import { ref } from 'vue';

import { ViewModel } from '@/modules/view-model';

export class Responsive extends ViewModel {
  #width = ref(0);
  #height = ref(0);

  constructor() {
    super('responsive-view');
  }

  get width() {
    return this.#width.value;
  }
  set width(value) {
    this.#width.value = value;
  }

  get height() {
    return this.#height.value;
  }
  set height(value) {
    this.#height.value = value;
  }
}
