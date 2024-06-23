import { ref } from 'vue';

import { ViewModel } from '@/modules/view-model';

import { Bicubic } from '@/modules/bicubic/bicubic';
import { BinaryTree } from '@/modules/binary-tree/binary-tree';
import { Controls } from '@/modules/controls/controls';
import { Dialog } from '@/ui/lib/dialog';
import { Gears } from '@/modules/gears/gears';
import { Flowers } from '@/modules/flowers/flowers';
import { Logo } from '@/modules/logo/logo';
import { Movable } from '@/modules/movable/movable';
import { Sandbox } from '@/modules/sandbox/sandbox';
import { SvgEditor } from '@/modules/svg-editor/svg-editor';
import { SvgSandbox } from '@/modules/svg-sandbox/svg-sandbox';
import { Theme } from '@/modules/theme/theme';
import { Transforms } from '@/modules/transforms/transforms';
import { WebPage } from '@/modules/web-page/web-page';
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

  readonly dialogContent = new WebPage();

  readonly logo = new Logo();
  readonly bicubic = new Bicubic();
  readonly gears = new Gears();
  readonly flowers = new Flowers();
  readonly binaryTree = new BinaryTree();
  readonly webPage = new WebPage();
  readonly controls = new Controls();
  readonly theme = new Theme();
  readonly transforms = new Transforms();
  readonly sandbox = new Sandbox();
  readonly svgEditor = new SvgEditor();
  readonly svgSandbox = new SvgSandbox();
  readonly movable = new Movable([this.bicubic, this.gears, this.flowers, this.binaryTree]);

  constructor() {
    super('app-view');

    this.pages = [
      new Wrapper(this.logo, ['view']),
      new Wrapper(this.bicubic, ['view card clip shadow']),
      new Wrapper(this.gears, ['view card clip shadow']),
      new Wrapper(this.flowers, ['view card clip shadow']),
      new Wrapper(this.binaryTree, ['view card clip shadow']),
      new Wrapper(this.movable, ['view margin']),
      new Wrapper(this.svgEditor, ['view card clip shadow']),
      new Wrapper(this.controls, ['view card clip shadow border']),
      new Wrapper(this.theme, ['view card']),
      // new Wrapper(this.sandbox, ['view card clip shadow border']),
      // new Wrapper(this.svgSandbox, ['view card clip shadow']),
      // new Wrapper(this.transforms, ['view card']),
    ];
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
}
