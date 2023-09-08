import { ref } from 'vue';

import { ControlsModel } from '@/modules/controls-model';
import { GearBoxModel } from '@/modules/gear-box-model';
import { LogoModel } from '@/modules/logo-model';
import { ThreeModel } from '@/modules/three-model';
import { ViewModel } from '@/modules/view-model';

export const enum ToolBarAlignment {
  LEFT,
  CENTER,
  RIGHT,
}

export class AppModel extends ViewModel {
  readonly pages: ViewModel[] = [
    new LogoModel(),
    new ThreeModel(),
    new GearBoxModel(),
    new ControlsModel(),
  ];

  #toolBarAlignment = ref(ToolBarAlignment.CENTER);
  #showDialog = ref(false);
  #pageIndex = ref(3);

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
