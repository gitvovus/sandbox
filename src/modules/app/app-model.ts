import { ref } from 'vue';

import { Bicubic } from '@/modules/bicubic/bicubic';
import { BinaryTree } from '@/modules/binary-tree/binary-tree';
import { Controls } from '@/modules/controls/controls';
import { Dialog } from '@/ui/lib/dialog';
import { Gears } from '@/modules/gears/gears';
import { Flowers } from '@/modules/flowers/flowers';
import { Logo } from '@/modules/logo/logo';
import { Movable } from '@/modules/movable/movable';
import { Responsive } from '@/modules/responsive/responsive';
import { Sandbox } from '@/modules/sandbox/sandbox';
import { SvgSandbox } from '@/modules/svg-sandbox/svg-sandbox';
import { Theme } from '@/modules/theme/theme';
import { ViewModel } from '@/modules/view-model';
import { Wrapper } from '@/modules/wrapper/wrapper';

export const enum Align {
  LEFT,
  CENTER,
  RIGHT,
}

export class AppModel extends ViewModel {
  readonly #align = ref(Align.CENTER);
  readonly #index = ref(0);

  readonly pages: Wrapper[];
  readonly dialog = new Dialog({ resizable: true });
  readonly layout = new Responsive();

  constructor() {
    super('app-view');

    const a: Record<string, ViewModel> = {
      logo: new Logo(),
      bicubic: new Bicubic(),
      gears: new Gears(),
      flowers: new Flowers(),
      binaryTree: new BinaryTree(),
      sandbox: new Sandbox(),
      svgSandbox: new SvgSandbox(),
      controls: new Controls(),
      theme: new Theme(),
    };
    a.movable = new Movable([a.bicubic, a.gears, a.flowers, a.binaryTree]);

    this.pages = [
      new Wrapper(a.logo, ['view']),
      new Wrapper(a.bicubic, ['view card clip shadow']),
      new Wrapper(a.gears, ['view card clip shadow']),
      new Wrapper(a.flowers, ['view card clip shadow']),
      new Wrapper(a.binaryTree, ['view card clip shadow']),
      new Wrapper(a.movable, ['view margin']),
      new Wrapper(a.controls, ['view card clip shadow border']),
      new Wrapper(a.theme, ['view card']),
    ];
    this.index = 5;
  }

  get align() {
    return this.#align.value;
  }

  set align(value) {
    this.#align.value = value;
  }

  get index() {
    return this.#index.value;
  }

  set index(value) {
    this.#index.value = value;
  }

  get page() {
    return this.pages[this.index];
  }

  toggle() {
    const state = this.page.state;
    this.page.state = state === 'full' ? 'mini' : 'full';
  }
}
