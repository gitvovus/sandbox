import { Vec } from '@/lib/bi';
import { it } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/lib/svg/camera';
import { Controller } from '@/lib/svg/controller';
import { prettyGrid } from '@/lib/svg/utils';
import { ViewModel } from '@/modules/view-model';

export class SvgSandbox extends ViewModel {
  readonly #mounted = new Disposable();

  readonly #size = 52;
  readonly #camera = new Camera({ scale: new Vec(1, 1) });

  readonly #content = it('g', [
    prettyGrid(this.#size / 2, this.#size / 4, 1, 1, '#00000018'),
    prettyGrid(this.#size / 2, this.#size / 4, 10, 1, '#00000040'),
  ]);

  readonly root = it('svg', [
    this.#content,
  ]);

  readonly #controller = new Controller(
    this.root, this.#content, this.#camera,
    { width: this.#size, height: this.#size },
  );

  constructor() {
    super('svg-sandbox-view');
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);
    this.#mounted.add(() => this.#controller.unmount());
  }

  unmount() {
    this.#mounted.dispose();
  }

  test() {
  }
}
