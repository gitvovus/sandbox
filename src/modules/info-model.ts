import { ViewModel } from '@/modules/view-model';
import { ref } from 'vue';

export class InfoModel extends ViewModel {
  #data = ref<{ [key: string]: string }>({});

  constructor() {
    super('info-view');
  }

  get data() {
    return this.#data.value;
  }
}
