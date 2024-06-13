import { Mat, Vec, interpolate } from '@/lib/bi';
import { Item } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/lib/svg/camera';
import { Controller } from '@/lib/svg/controller';
import { Transformable } from '@/lib/svg/transformable';
import { prettyGrid } from '@/lib/svg/utils';
import { draw } from '@/modules/gears/lib/drawings';
import { ViewModel } from '@/modules/view-model';
import { Animation } from '@/lib/animation';
import { time } from '@/lib/std';

export class SvgSandbox extends ViewModel {
  readonly root = new Item('svg');

  readonly #mounted = new Disposable();
  readonly #defs = new Item('def');
  readonly #content = new Item('g');
  readonly #size = 23.8;
  readonly #camera = new Camera({ scale: new Vec(1, -1) });
  readonly #controller = new Controller(this.root, this.#content, this.#camera);

  readonly #shape = new Item('path', {
    'id': 'path-0',
    'd': draw('gear', { radius: 5, innerRadius: 0.72, offset: Math.PI / 10, spokes: 5 }),
    'fill-rule': 'evenodd',
    'stroke-width': 1,
    'vector-effect': 'non-scaling-stroke',
  });

  readonly #gear1 = new Transformable('use', { href: '#path-0', class: 'gear fill-1' });
  readonly #gear2 = new Transformable('use', { href: '#path-0', class: 'gear fill-6' });

  #resetAnimation = new Animation();
  #resetStart = 0;
  #resetDuration = 1;
  #m1 = Mat.scale(1, 1);
  #m2 = Mat.inverse(Mat.scale(1, -1));

  constructor() {
    super('svg-sandbox-view');

    this.#createStatic();
    this.#createScene();
    this.#controller.resize(this.#size, this.#size);
    this.#gear1.position = new Vec(-5, 0);
    this.#gear2.position = new Vec(5, 0);
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);
    this.#mounted.add(() => this.#controller.unmount());
  }

  unmount() {
    this.#mounted.dispose();
  }

  #resetFrame = (dt: number) => {
    let k = (time() - this.#resetStart) / this.#resetDuration;
    if (k >= 1) {
      this.#resetAnimation.stop();
      k = 1;
    }

    const d = Mat.inverse(interpolate(this.#m1, this.#m2, k)).decompose();
    this.#camera.position = d.translation;
    this.#camera.rotation = d.rotation;
    this.#camera.scale = d.scale;
  };

  test() {
    this.#resetStart = time();
    this.#m1 = this.#camera.inverse;
    this.#resetAnimation.start(this.#resetFrame);
  }

  #createStatic() {
    this.root.add(this.#defs, this.#content);
    this.#content.add(
      prettyGrid(this.#size / 2, this.#size / 4, 1, 1, '#00000018'),
      prettyGrid(this.#size / 2, this.#size / 4, 5, 1, '#00000040'),
    );
  }

  #createScene() {
    this.#defs.add(this.#shape);
    this.#content.add(this.#gear1, this.#gear2);
  }

  get rotation() {
    return this.#gear1.rotation;
  }

  set rotation(value) {
    this.#gear1.rotation = value;
    this.#gear2.rotation = -value;
  }
}
