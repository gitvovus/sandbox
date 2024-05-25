import { ref } from 'vue';
import { ViewModel } from '@/modules/view-model';

export class Theme extends ViewModel {
  readonly bg = ref('');

  constructor() {
    super('theme-view');
  }
}
