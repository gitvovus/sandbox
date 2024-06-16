import { ref } from 'vue';

export class Parser {
  readonly #text = ref('');

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }
}
