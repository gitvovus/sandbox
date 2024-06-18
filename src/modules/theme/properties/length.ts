import { ref } from 'vue';
import { PropertyBase } from './property';

export class Length extends PropertyBase {
  #value = ref(0);
  #unit = ref('');

  constructor(name: string) {
    super('length-editor', name);
  }

  get value() {
    return this.#value.value;
  }

  set value(value) {
    if (typeof value !== 'number') {
      value = 0;
    }
    this.#value.value = value;
  }

  get unit() {
    return this.#unit.value;
  }

  set unit(value) {
    this.#unit.value = value;
  }

  get safeUnit() {
    const value = this.value;
    const unit = this.unit;
    return value && !unit ? 'px' : unit;
  }

  toCss() {
    return `${this.value}${this.safeUnit}`;
  }
}
