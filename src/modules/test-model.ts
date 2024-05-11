import { ref } from 'vue';

import { ViewModel } from '@/modules/view-model';

export class TestModel extends ViewModel {
  #x = ref(0);
  #y = ref(0);
  #horizontal = ref(true);

  constructor() {
    super('test-view');
  }

  get x() {
    return this.#x.value;
  }

  set x(value) {
    this.#x.value = value;
  }

  get y() {
    return this.#y.value;
  }

  set y(value) {
    this.#y.value = value;
  }

  get horizontal() {
    return this.#horizontal.value;
  }

  toggle() {
    this.#horizontal.value = !this.#horizontal.value;
  }
}
