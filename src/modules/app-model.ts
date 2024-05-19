import { ref } from 'vue';

import { ControlsModel } from '@/modules/controls-model';
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

export const enum DialogState {
  HIDDEN,
  HIDDEN_TRANSITION,
  NON_MODAL,
  NON_MODAL_TRANSITION,
  MODAL,
  MODAL_TRANSITION,
}

export class DialogModel {
  readonly #state = ref(DialogState.HIDDEN);

  get state() {
    return this.#state.value;
  }

  set state(value) {
    this.#state.value = value;
  }

  close() {
    this.#state.value = 0;
  }

  show() {
    this.#state.value = 1;
  }

  showModal() {
    this.#state.value = 2;
  }
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
