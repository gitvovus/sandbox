import { Vec } from '@/lib/bi';
import { Item } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { prettyGrid } from '@/modules/svg/utils';
import { ViewModel } from '@/modules/view-model';

class PathBuilder {
  #d: string[] = [];
  #f: (x: number) => string;
  #points = 0;

  constructor(decimalPoint = 3) {
    this.#f = (x: number) => x.toFixed(decimalPoint);
  }

  get() {
    return this.#d.join(' ');
  }

  reset() {
    this.#d = [];
    this.#points = 0;
    return this;
  }

  M(...numbers: number[]) {
    this.#d.push('M', ...numbers.map(this.#f));
    this.#points += numbers.length / 2;
    return this;
  }

  m(...numbers: number[]) {
    this.#d.push('m', ...numbers.map(this.#f));
    this.#points += numbers.length / 2;
    return this;
  }

  C(...numbers: number[]) {
    this.#d.push('C', ...numbers.map(this.#f));
    this.#points += numbers.length / 6; // TODO
    return this;
  }

  z() {
    this.#d.push('z');
    return this;
  }
}

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
