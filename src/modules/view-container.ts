import { shallowReactive } from 'vue';

import { ViewModel } from '@/modules/view-model';

export class ViewContainer extends ViewModel {
  readonly content: ViewModel;
  readonly classes = shallowReactive<string[]>([]);

  constructor(content: ViewModel, classes: string[]) {
    super('view-container');
    this.content = content;
    this.classes = classes;
  }
}
