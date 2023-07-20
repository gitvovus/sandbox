import { ref } from 'vue';
import { ViewModel } from '@/modules/view-model';

export class ControlsModel extends ViewModel {
  readonly radioItems = [...Array(4)].map((item, i) => ({ name: `item #${i}` }));

  readonly #radioIndex = ref(0);

  constructor() {
    super('controls-view');
  }

  get radioIndex() {
    return this.#radioIndex.value;
  }

  set radioIndex(value) {
    this.#radioIndex.value = value;
  }
}
