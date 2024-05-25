import { ref } from 'vue';

import { ViewModel } from '@/modules/view-model';

export class Lorem extends ViewModel {
  readonly #p = ref<number | undefined>();

  constructor(paragraphs?: number) {
    super('lorem-view');
    this.paragraphs = paragraphs;
  }

  get paragraphs() {
    return this.#p.value;
  }

  set paragraphs(value) {
    this.#p.value = value;
  }
}
