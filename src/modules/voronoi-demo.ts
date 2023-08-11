import { Vec } from '@/lib/bi';
import { Item } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { grid } from '@/modules/svg/utils';
import { ViewModel } from '@/modules/view-model';

const v = (x: number, y: number) => new Vec(x, y);

export class VoronoiDemo extends ViewModel {
  readonly root = new Item('svg');

  readonly #mounted = new Disposable();
  readonly #content = new Item('g');
  readonly #size = 100;
  readonly #camera = new Camera({ scale: v(1, -1) });
  readonly #controller = new Controller(this.root, this.#content, this.#camera);

  constructor() {
    super('voronoi-view');
    this.#createStatic();
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
      grid(this.#size / 2, this.#size / 4, 5, 1, '#00000018'),
      grid(this.#size / 2, this.#size / 4, 25, 1, '#00000040'),
    );
  }
}
