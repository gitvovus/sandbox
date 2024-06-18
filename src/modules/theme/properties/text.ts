import { ref } from 'vue';
import { PropertyBase } from './property';

export class Text extends PropertyBase {
  readonly #text = ref('');

  constructor(name: string, text: string = '') {
    super('text-editor', name);
    this.text = text;
  }

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }

  toCss() {
    return this.text;
  }

  save() {
    localStorage.setItem(this.name, this.text);
  }

  load() {
    this.text = localStorage.getItem(this.name) ?? '';
  }
}
