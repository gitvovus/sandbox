import { ref } from 'vue';

import { performanceTestDuration, testPerformance } from '@/lib/system';
import { ControlsModel } from '@/modules/controls-model';
import { GearBoxModel } from '@/modules/gear-box-model';
import { LogoModel } from '@/modules/logo-model';
import { SvgModel } from '@/modules/svg-model';
import { SvgTool } from '@/modules/svg-tool';
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
    // new SvgModel(),
    // new SvgTool(),
  ];

  #toolBarAlignment = ref(ToolBarAlignment.CENTER);
  #showDialog = ref(false);
  #pageIndex = ref(2);

  constructor() {
    super('app-view');
    // testPerformance();
    // console.log(`${performanceTestDuration?.toFixed()}ms`);
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
