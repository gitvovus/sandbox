import { Item } from '@/lib/reactive';

export class Scene {
  readonly root = new Item('svg');

  readonly id: string;

  readonly #width: number;
  readonly #height: number;

  readonly #defs = new Item('defs');
  readonly #content = new Item('g');

  readonly #background = new Item('g');
  readonly #layers: Item[] = [];
  readonly #overlay = new Item('g');

  constructor(
    id: string,
    width: number,
    height: number,
    layers: number,
  ) {
    this.id = id;
    this.#width = width;
    this.#height = height;

    this.#content.add(this.#background);

    for (let i = 0; i < layers; ++i) {
      const layer = new Item('g');
      this.#layers.push(layer);
      this.#content.add(layer);
    }

    this.root.add(this.#defs, this.#content, this.#overlay);
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

  get overlay() {
    return this.#overlay;
  }

  addDefs(...defs: Item[]) {
    this.#defs.add(...defs);
  }

  addToLayer(index: number, item: Item) {
    this.#layers[index].add(item);
  }

  removeRefs(href: string) {
    this.#remove(this.root, item => item.attributes.href === href);
  }

  removeDef(id: string) {
    this.#remove(this.#defs, item => item.attributes.id === id);
  }

  #remove(root: Item, predicate: (item: Item) => boolean) {
    root.items.filter(predicate).forEach(item => root.remove(item));
    root.items.forEach(item => this.#remove(item, predicate));
  }
}
