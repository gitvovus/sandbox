import { Vector2 } from '@/lib/std';
import { Item } from '@/lib/svg';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
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
}

function tri() {
  const path = new PathBuilder(0);
  return path.M(2, 0, -1, 1, -1, -1).get();
}

export class SvgModel extends ViewModel {
  root = new Item('svg');
  content = new Item('g');
  shape = new Item('path', { class: 'morph', d: tri() });

  #camera = new Camera({ scale: new Vector2(1, -1) });
  #controller = new Controller(this.root, this.content, this.#camera);

  #el?: Element;

  constructor() {
    super('svg-view');

    this.root.add(this.content);
    this.content.add(this.shape);
    this.#controller.setReferenceSize(20, 20);
  }

  mount(el: HTMLElement) {
    this.#el = el;
    this.#controller.mount(el);
  }

  unmount() {
    this.#el = undefined;
    this.#controller.unmount();
  }

  test() {}

  #frame(dt: number) {}
}
