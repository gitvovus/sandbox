import { ref } from 'vue';

import { type Property } from '@/modules/theme/properties/property';
import { allPropsExist, hexByte, stringify } from '@/modules/theme/properties/lib';

export class Color implements Property {
  readonly key = Symbol();
  readonly component = 'color-editor';
  readonly name: string;
  readonly children: Property[] = [];

  readonly #r = ref(0);
  readonly #g = ref(0);
  readonly #b = ref(0);
  readonly #a = ref(0);

  constructor(name: string, r = 0, g = 0, b = 0, a = 1) {
    this.name = name;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  get r() {
    return this.#r.value;
  }
  set r(value) {
    this.#r.value = value;
  }

  get g() {
    return this.#g.value;
  }
  set g(value) {
    this.#g.value = value;
  }

  get b() {
    return this.#b.value;
  }
  set b(value) {
    this.#b.value = value;
  }

  get a() {
    return this.#a.value;
  }
  set a(value) {
    this.#a.value = value;
  }

  toRgb() {
    const a = this.a !== 1 ? ` / ${this.a.toFixed(2)}` : '';
    return `rgb(${this.r} ${this.g} ${this.b}${a})`;
  }

  toHex() {
    const a = this.a !== 1 ? hexByte(this.a * 255) : '';
    const rgb = [this.r, this.g, this.b].map(hexByte).join('');
    return `#${rgb}${a}`;
  }

  toCss() {
    return this.toRgb();
  }

  save() {
    localStorage.setItem(this.name, stringify(this, ['r', 'g', 'b', 'a']));
  }

  load() {
    const data = JSON.parse(localStorage.getItem(this.name) ?? '{}');
    if (allPropsExist(data, ['r', 'g', 'b', 'a'])) {
      this.r = Number(data.r);
      this.g = Number(data.g);
      this.b = Number(data.b);
      this.a = Number(data.a);
    }
  }
}
