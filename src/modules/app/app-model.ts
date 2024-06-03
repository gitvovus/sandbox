import { ref } from 'vue';

import { Controls } from '@/modules/controls/controls';
import { Dialog } from '@/modules/dialog/model';
// import { GearBox } from '@/modules/gear-box/model';
// import { Worker } from '@/modules/worker/model';
import { Logo } from '@/modules/logo/model';
// import { SvgSandbox } from '@/modules/svg-sandbox/model';
import { ControlsSandbox } from '@/modules/controls-sandbox/model';
// import { BicubicDemo } from '@/modules/bicubic-demo/model';
import { ViewModel } from '@/modules/view-model';
import { Theme } from '@/modules/theme/theme-model';
import { Responsive } from '@/modules/responsive/model';

export const enum Align {
  LEFT,
  CENTER,
  RIGHT,
}

export class AppModel extends ViewModel {
  readonly pages: ViewModel[] = [
    new Logo(),
    // new BicubicDemo(),
    // new GearBox(),
    new Controls(),
    // new Worker(),
    // new SvgSandbox(),
    new ControlsSandbox(),
    new Theme(),
  ];

  readonly #toolBarAlign = ref(Align.CENTER);
  readonly #pageIndex = ref(3);

  readonly dialog = new Dialog({ resizable: true });
  readonly layout = new Responsive();

  constructor() {
    super('app-view');
  }

  get toolBarAlign() {
    return this.#toolBarAlign.value;
  }

  set toolBarAlign(value) {
    this.#toolBarAlign.value = value;
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
