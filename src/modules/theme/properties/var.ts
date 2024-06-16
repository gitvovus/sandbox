import { SingleSelection } from '@/lib/ui-models';
import { type Property } from './property';
import { ref, shallowRef } from 'vue';

export class Var implements Property {
  readonly key = Symbol();
  readonly component = 'var-editor';
  readonly name: string;
  readonly children = [];

  readonly #text = ref('');
  readonly #types = new SingleSelection<{
    type: string;
  }>([
    { type: 'color' },
    { type: 'color' },
    { type: 'color' },
    { type: 'color' },
    { type: 'text' },
    { type: 'text' },
    { type: 'text' },
    { type: 'text' },
  ]);
  readonly #type = shallowRef(this.#types.items[1]);

  constructor(name: string, text: string) {
    this.name = name;
    this.text = text;
  }

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }

  get types() {
    return this.#types.items;
  }

  get type() {
    return this.#type.value;
  }

  set type(value) {
    this.#type.value = value;
  }

  toCss() {
    return this.text;
  }

  save() {
    // this.property.save();
  }

  load() {
    // this.property.load();
  }
}
