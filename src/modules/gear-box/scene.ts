import { ReactiveNode, type Attributes } from '@/lib/reactive';

export class Scene {
  readonly root = new ReactiveNode('svg');

  readonly id: string;

  readonly #width: number;
  readonly #height: number;
  readonly #ox: number;
  readonly #oy: number;

  readonly #defs = new ReactiveNode('defs');
  readonly #shadow: ReactiveNode;
  readonly #content = new ReactiveNode('g');

  readonly #filters: ReactiveNode[] = [];
  readonly #masks: ReactiveNode[] = [];

  readonly #background = new ReactiveNode('g');
  readonly #layers: ReactiveNode[] = [];
  readonly #overlay = new ReactiveNode('g');

  readonly #shadowFill = '#00000030';

  constructor(id: string, width: number, height: number, layersCount: number, offset: number) {
    this.id = id;
    this.#width = width;
    this.#height = height;
    this.#ox = offset;
    this.#oy = -offset;

    this.#shadow = new ReactiveNode('rect', {
      id: `${this.id}:shadow`,
      class: 'no-mouse',
      x: -width / 2,
      y: -height / 2,
      width,
      height,
      fill: this.#shadowFill,
    });
    this.#defs.add(this.#shadow);

    this.#content.add(this.#background);

    for (let i = 0; i < layersCount; ++i) {
      const filter = new ReactiveNode('mask', { id: `${this.id}:filter:${i}` });
      this.#filters.push(filter);
      if (i > 0) {
        filter.add(new ReactiveNode('g', { fill: 'white' }));
      }

      const mask = new ReactiveNode('mask', { id: `${this.id}:mask:${i}` });
      this.#masks.push(mask);
      if (i === 0) {
        mask.add(new ReactiveNode('g', { fill: 'white' }), new ReactiveNode('g', { fill: 'black' }));
      } else {
        mask.add(new ReactiveNode('g', { fill: 'white', mask: `url(#${filter.attributes.id})` }));
      }

      this.#defs.add(filter, mask);

      const layer = new ReactiveNode('g');
      this.#layers.push(layer);
      this.#content.add(layer);

      if (i < layersCount - 1) {
        this.#content.add(this.#use(this.#shadow, { mask: `url(#${mask.attributes.id})` }));
      }
    }

    this.#content.add(this.#overlay);

    this.root.add(this.#defs, this.#content);
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get content() {
    return this.#content;
  }

  get background() {
    return this.#background;
  }

  addDefs(...defs: ReactiveNode[]) {
    this.#defs.add(...defs);
  }

  addToGround(item: ReactiveNode, acceptsShadows: boolean = true) {
    this.#layers[0].add(item);
    if (!acceptsShadows) {
      this.#masks[0].items[1].add(this.#sameRef(item));
    }
  }

  addToLayer(item: ReactiveNode, index: number) {
    this.#layers[index].add(item);

    if (index > 0) {
      this.#filters[index].items[0].add(this.#sameRef(item));
    }

    for (let i = 0; i < index; ++i) {
      this.#masks[i].items[0].add(this.#sameRef(item, { x: this.#ox * (index - i), y: this.#oy * (index - i) }));
    }
  }

  remove(href: string) {
    this.#layers.forEach((layer) => {
      const items = layer.items.filter((item) => item.attributes.href === href);
      items.forEach((item) => layer.remove(item));
    });
    this.#masks.forEach((mask) => {
      const items = mask.items[0].items.filter((item) => item.attributes.href === href);
      items.forEach((item) => mask.items[0].remove(item));
    });
    this.#filters.forEach((filter, index) => {
      if (index > 0) {
        const items = filter.items[0].items.filter((item) => item.attributes.href === href);
        items.forEach((item) => filter.items[0].remove(item));
      }
    });
  }

  removeDef(id: string) {
    const items = this.#defs.items.filter((item) => item.attributes.id === id);
    items.forEach((item) => this.#defs.remove(item));
  }

  #sameRef(item: ReactiveNode, attributes?: Attributes) {
    return new ReactiveNode('use', { href: item.attributes.href, ...attributes });
  }

  #use(item: ReactiveNode, attributes?: Attributes) {
    return new ReactiveNode('use', { href: `#${item.attributes.id}`, ...attributes });
  }
}
