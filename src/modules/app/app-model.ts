import { ref } from 'vue';

import { Controls } from '@/modules/controls/controls';
import { Dialog } from '@/modules/dialog/dialog';
import { Bicubic } from '@/modules/bicubic/bicubic';
import { Gears } from '@/modules/gears/gears';
import { Worker } from '@/modules/worker/worker';
import { Logo } from '@/modules/logo/logo';
import { SvgSandbox } from '@/modules/svg-sandbox/svg-sandbox';
import { Sandbox } from '@/modules/sandbox/sandbox';
import { ViewModel } from '@/modules/view-model';
import { Theme } from '@/modules/theme/theme-model';
import { Responsive } from '@/modules/responsive/responsive';

export const enum Align {
  LEFT,
  CENTER,
  RIGHT,
}

export class AppModel extends ViewModel {
  readonly pages: ViewModel[] = [
    new Logo(),
    new Bicubic(),
    new Gears(),
    new Worker(),
    new Controls(),
    new SvgSandbox(),
    new Sandbox(),
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
