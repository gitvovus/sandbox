import * as three from 'three';

import * as geometry from '@/lib/geometry';
import { Disposable } from '@/lib/std';
import { ref, shallowReactive } from 'vue';

export interface Attributes {
  template?: string;
  label?: string;
  icon?: string;
}

export function merge(attributes: Attributes, overwrite?: Attributes) {
  return Object.assign(attributes, overwrite);
}

export class Item extends Disposable {
  readonly #template = ref('');
  readonly #label = ref('');
  readonly #icon = ref('');
  readonly items = shallowReactive<Item[]>([]);

  constructor(attributes?: Attributes) {
    super();
    // const {template, label, icon} = merge({ template: 'item-template', label: 'Item', icon: 'icon-home' }, attributes);
    Object.assign(
      this,
      merge({ template: 'item-template', label: 'Item', icon: 'icon-home' }, attributes),
    );
    this.add(() => {
      this.items.forEach((item) => item.dispose());
      this.items.length = 0;
    });
  }

  get template() {
    return this.#template.value;
  }

  set template(value) {
    this.#template.value = value;
  }

  get label() {
    return this.#label.value;
  }

  set label(value) {
    this.#label.value = value;
  }

  get icon() {
    return this.#icon.value;
  }

  set icon(value) {
    this.#icon.value = value;
  }
}

export class Object3D extends Item {
  root!: three.Object3D;

  constructor(attributes?: Attributes) {
    super(merge({ template: 'object-3d', label: 'Object3D', icon: 'icon-view3d' }, attributes));
    this.add(() => {
      if (this.root.parent) {
        this.root.parent.remove(this.root);
      }
      geometry.dispose(this.root);
    });
  }
}
