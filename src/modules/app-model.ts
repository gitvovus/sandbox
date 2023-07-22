import { ref } from 'vue';

import { ControlsModel } from '@/modules/controls-model';
import { ReactiveModel } from '@/modules/reactive-model';
import { GearBoxModel } from '@/modules/gear-box-model';
import { ViewModel } from '@/modules/view-model';
import { LogoModel } from '@/modules/logo-model';
import { LayeredModel } from '@/modules/layered-model';
import { SvgModel } from '@/modules/svg-model';

export enum ToolBarAlignment {
  LEFT,
  CENTER,
  RIGHT,
}

export class AppModel extends ViewModel {
  readonly pages: ViewModel[] = [
    new LogoModel(),
    new GearBoxModel(),
    // new LayeredModel(),
    new SvgModel(),
    new ControlsModel(),
    new ReactiveModel(),
  ];

  #toolBarAlignment = ref(ToolBarAlignment.CENTER);
  #showDialog = ref(false);
  #pageIndex = ref(2);

  constructor() {
    super('app-view');
  }

  get toolBarAlignment() {
    return this.#toolBarAlignment.value;
  }

  set toolBarAlignment(value) {
    this.#toolBarAlignment.value = value;
  }

  get showDialog() {
    return this.#showDialog.value;
  }

  set showDialog(value) {
    this.#showDialog.value = value;
  }

  get pageIndex() {
    return this.#pageIndex.value;
  }

  set pageIndex(value) {
    this.#pageIndex.value = value;
  }

  get activePage() {
    return this.pages[this.pageIndex];
  }
}
