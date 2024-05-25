import { ref } from 'vue';

import { Controls } from '@/modules/controls/model';
import { Dialog } from '@/modules/dialog/model';
import { GearBox } from '@/modules/gear-box/model';
import { Worker } from '@/modules/worker/model';
import { Logo } from '@/modules/logo/model';
import { SvgSandbox } from '@/modules/svg-sandbox/model';
import { ControlsSandbox } from '@/modules/controls-sandbox/model';
import { BicubicDemo } from '@/modules/bicubic-demo/model';
import { ViewModel } from '@/modules/view-model';
import { Theme } from '@/modules/theme/model';

export const enum Align {
  LEFT,
  CENTER,
  RIGHT,
}

export class App extends ViewModel {
  readonly pages: ViewModel[] = [
    new Logo(),
    new BicubicDemo(),
    new GearBox(),
    new Controls(),
    new Worker(),
    new SvgSandbox(),
    new ControlsSandbox(),
    new Theme(),
  ];

  readonly #toolBarAlign = ref(Align.CENTER);
  readonly #pageIndex = ref(this.pages.length - 1);

  readonly dialog = new Dialog({ resizable: true });

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
