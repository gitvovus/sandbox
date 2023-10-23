import { Vec } from '@/lib/bi';
import { Item } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { prettyGrid } from '@/modules/svg/utils';
import { ViewModel } from '@/modules/view-model';

export class SvgModel extends ViewModel {
  readonly root = new Item('svg');

  readonly #mounted = new Disposable();
  readonly #content = new Item('g');
  readonly #size = 23.8;
  readonly #camera = new Camera({ scale: new Vec(1, -1) });
  readonly #controller = new Controller(this.root, this.#content, this.#camera);

  constructor() {
    super('svg-view');

    this.#createStatic();
    this.#createScene();
    this.#controller.resize(this.#size, this.#size);
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);
    this.#mounted.add(() => this.#controller.unmount());
  }

  unmount() {
    this.#mounted.dispose();
  }

  #createStatic() {
    this.root.add(this.#content);
    this.#content.add(
      prettyGrid(this.#size / 2, this.#size / 4, 1, 1, '#00000018'),
      prettyGrid(this.#size / 2, this.#size / 4, 5, 1, '#00000040'),
    );
  }

  #createScene() {}
}
