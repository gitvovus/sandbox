import { ref } from 'vue';

import { ControlsModel } from '@/modules/controls-model';
import { Model as DialogModel } from '@/modules/dialog/model';
// import { EventsModel } from '@/modules/events-model';
import { GearBoxModel } from '@/modules/gear-box-model';
// import { ImagesModel } from '@/modules/images-model';
import { LogoModel } from '@/modules/logo-model';
// import { SvgModel } from '@/modules/svg-model';
import { TestModel } from '@/modules/test-model';
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
    // new EventsModel(),
    // new ImagesModel(),
    // new SvgModel(),
    new TestModel(),
  ];

  readonly #toolBarAlignment = ref(ToolBarAlignment.CENTER);
  readonly #pageIndex = ref(this.pages.length - 1);

  readonly dialog = new DialogModel();

  constructor() {
    super('app-view');
  }

  get toolBarAlignment() {
    return this.#toolBarAlignment.value;
  }

  set toolBarAlignment(value) {
    this.#toolBarAlignment.value = value;
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
