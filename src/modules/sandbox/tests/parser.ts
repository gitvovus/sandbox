import { ref } from 'vue';

export class Parser {
  readonly #text = ref('0 0 20px 10px rgb(0 0 0 / 0.25) inset');
  readonly #parsed = ref('');

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }

  get parsed() {
    return this.#parsed.value;
  }

  set parsed(value) {
    this.#parsed.value = value;
  }

  parseShadow() {
    // https://stackoverflow.com/questions/19943049/get-every-value-from-a-box-shadow-by-regex
    this.run(/ (?![^(]*\))/g);
  }

  parseLength() {
    const regex = /(\b\d+\.?\d*(?:\b|px\b|em\b))/g;
    const match = [...this.text.matchAll(regex)];
    console.log(match);
    for (const i of match) {
      console.log(i);
    }
  }

  run(regex: RegExp) {
    this.parsed = this.text.split(regex).map(value => `[${value}]`).join(' ');
  }
}
