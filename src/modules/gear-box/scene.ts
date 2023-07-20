import { Item, type Attributes } from '@/lib/svg';

export class Scene {
  readonly root = new Item('svg');

  readonly id: string;

  readonly #width: number;
  readonly #height: number;
  readonly #ox: number;
  readonly #oy: number;

  readonly #defs = new Item('defs');
  readonly #shadow: Item;
  readonly #content = new Item('g');

  readonly #filters: Item[] = [];
  readonly #masks: Item[] = [];

  readonly #background = new Item('g');
  readonly #layers: Item[] = [];
  readonly #overlay = new Item('g');

  readonly #shadowFill = '#00000030';

  constructor(id: string, width: number, height: number, layersCount: number, offset: number) {
    this.id = id;
    this.#width = width;
    this.#height = height;
    this.#ox = offset;
    this.#oy = -offset;

    this.#shadow = new Item('rect', {
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
      const filter = new Item('mask', { id: `${this.id}:filter:${i}` });
      this.#filters.push(filter);
      if (i > 0) {
        filter.add(new Item('g', { fill: 'white' }));
      }

      const mask = new Item('mask', { id: `${this.id}:mask:${i}` });
      this.#masks.push(mask);
      if (i === 0) {
        mask.add(new Item('g', { fill: 'white' }), new Item('g', { fill: 'black' }));
      } else {
        mask.add(new Item('g', { fill: 'white', mask: `url(#${filter.attributes.id})` }));
      }

      this.#defs.add(filter, mask);

      const layer = new Item('g');
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

  addDefs(...defs: Item[]) {
    this.#defs.add(...defs);
  }

  addToGround(item: Item, acceptsShadows: boolean = true) {
    this.#layers[0].add(item);
    if (!acceptsShadows) {
      this.#masks[0].items[1].add(this.#sameRef(item));
    }
  }

  addToLayer(item: Item, index: number) {
    this.#layers[index].add(item);

    if (index > 0) {
      this.#filters[index].items[0].add(this.#sameRef(item));
    }

    for (let i = 0; i < index; ++i) {
      this.#masks[i].items[0].add(
        this.#sameRef(item, { x: this.#ox * (index - i), y: this.#oy * (index - i) })
      );
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

  #sameRef(item: Item, attributes?: Attributes) {
    return new Item('use', { href: item.attributes.href, ...attributes });
  }

  #use(item: Item, attributes?: Attributes) {
    return new Item('use', { href: `#${item.attributes.id}`, ...attributes });
  }
}
