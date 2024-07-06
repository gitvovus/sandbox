import { Animation } from '@/lib/animation';
import { Mat, Vec } from '@/lib/bi';
import { Item, fromSource } from '@/lib/reactive';
import { Disposable, cubicBezier, onElementEvent, time } from '@/lib/std';
import { Transformable } from '@/lib/svg/transformable';
import { ViewModel } from '@/modules/view-model';

import logo from '@/assets/logo/logo.svg?raw';

function find(root: Item, id: string) {
  return root.find(id) as Transformable;
}

function compose(item: Transformable, position: Vec, scale: Vec) {
  const x = Number.parseFloat(item.attributes.x as string);
  const y = Number.parseFloat(item.attributes.y as string);
  return Mat.translation(x + position.x, y + position.y)
    .multiply(Mat.scale(scale.x, scale.y))
    .multiply(Mat.translation(-x, -y));
}

export class Logo extends ViewModel {
  readonly #mounted = new Disposable();
  // #el: HTMLElement = undefined!;

  readonly root = fromSource(logo, (tag, data) => {
    const lookup: (string | undefined)[] = [
      'logo-title',
      'logo-ext',
      'logo-vue',
      'logo-three',
      'logo-svg',
      'logo-yellow',
      'logo-blue',
    ];
    if (typeof data === 'object' && lookup.includes(data.id)) {
      return new Transformable(tag, data);
    }
    else {
      return new Item(tag, data);
    }
  })!;

  readonly #anim = new Animation();

  // readonly #blue = find(this.root, 'logo-blue');

  readonly #map: {
    [key: string]: {
      item: Transformable;
      animation: (item: Transformable, t: number) => Mat;
    };
  } = {

      // title: {
      //   item: find(this.root, 'logo-title'),
      //   animation: (item, t) => {
      //     const position = new Vec(...cubicBezier([
      //       [0, -30], [0, -1], [0, 0],
      //       [0, 0],
      //     ], t));
      //     const scale = new Vec(...cubicBezier([
      //       [1, 1], [1, 5], [1, 2],
      //       [1, 1],
      //     ], t));
      //     return compose(item, position, scale);
      //   },
      // },

      // ext: {
      //   item: find(this.root, 'logo-ext'),
      //   animation: (t) => {
      //     const scale = new Vec(1, 1);
      //     let position = new Vec(0, 0);
      //     if (0 <= t && t <= 1) {
      //       position = new Vec(...cubicBezier([
      //         [0, 0], [20, 0], [30, 0],
      //         [0, 0],
      //       ], t));
      //     }
      //     return compose(position, scale);
      //   },
      // },

      // yellow: {
      //   item: find(this.root, 'logo-yellow'),
      //   animation: (t) => {
      //     if (t < 0 || 0.5 < t) return new Vec(0, 0);
      //     const k = -40;
      //     const y = k * Math.sin(2 * Math.PI * t);
      //     return new Vec(0, y);
      //   },
      // },

      // blue: {
      //   item: find(this.root, 'logo-blue'),
      //   animation: (t) => {
      //     if (t < 0 || 1 < t) return new Vec(0, 0);
      //     const k = 40;
      //     const y = k * Math.sin(Math.PI * t);
      //     return new Vec(0, y);
      //   },
      // },
    };

  constructor() {
    super('logo-view', 'logo-button');
  }

  mount(el: HTMLElement) {
    // this.#el = el;
    this.#mounted.add(
      onElementEvent(el, 'pointermove', this.#move),
      () => this.#reset(),
    );
    this.animate();
  }

  unmount() {
    this.#mounted.dispose();
  }

  animate() {
    if (this.#anim.isActive()) return;

    const start = time();
    const duration = 2;

    this.#anim.start(() => {
      let dt = time() - start;
      if (dt >= duration) {
        dt = duration;
        this.#anim.stop();
      }

      for (const i in this.#map) {
        const item = this.#map[i];
        item.item.transform = item.animation(item.item, dt / duration);
      }
    });
  }

  #reset() {
    for (const i in this.#map) this.#map[i].item.position = new Vec(0, 0);
    this.#anim.stop();
  }

  readonly #move = (e: PointerEvent) => {
    // const { width, height } = this.#el.getBoundingClientRect();
    // const { x, y } = elementOffset(this.#el, e);
    // const rx = 2 * x / width - 1;
    // const ry = 2 * y / height - 1;
    // const r = Math.hypot(rx, ry);
    // const phi = Math.atan2(ry, rx) + Math.PI;
    // this.#blue.position = new Vec(Math.cos(phi) * r, Math.sin(phi) * r);
  };

  test() {
    cubicBezier;
    find;
    compose;
  }
}
