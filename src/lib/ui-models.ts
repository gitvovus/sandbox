import { shallowReactive, shallowRef, type ShallowReactive } from 'vue';

export class SingleSelection<T> {
  readonly #data: T[];
  readonly items: ShallowReactive<T[]>;
  readonly #selectedItem = shallowRef<T | undefined>();

  constructor(data: T[]) {
    this.#data = data;
    this.items = shallowReactive(this.#data);
  }

  get selectedItem() {
    return this.#selectedItem.value;
  }

  set selectedItem(value) {
    if (value !== undefined && !this.items.includes(value)) {
      return;
    }
    this.#selectedItem.value = value;
  }
}
