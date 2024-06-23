import { Animation } from '@/lib/animation';
import { Vec } from '@/lib/bi';
import { Item, fromSource } from '@/lib/reactive';
import { mix, time } from '@/lib/std';
import { Transformable } from '@/lib/svg/transformable';
import { ViewModel } from '@/modules/view-model';

import logo from '@/assets/logo/logo.svg?raw';

function find(root: Item, id: string) {
  return root.find(id) as Transformable;
}

// function parabola(x0: number, x1: number, height: number, x: number) {
//   const t = 2 * (x - x0) / (x1 - x0) - 1;
//   return height * (1 - t * t);
// }

export function bezier(p: number[][], t: number) {
  const a = (1 - t) ** 3;
  const b = (1 - t) ** 2 * t;
  const c = (1 - t) * t ** 2;
  const d = t ** 3;

  const x = a * p[0][0] + b * p[1][0] + c * p[2][0] + d * p[3][0];
  const y = a * p[0][1] + b * p[1][1] + c * p[2][1] + d * p[3][1];

  return new Vec(x, y);
}

export class Logo extends ViewModel {
  readonly root = fromSource(logo, (tag, data) => {
    const lookup: (string | undefined)[] = [
      'logo',
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

  readonly #map: {
    [key: string]: {
      item: Transformable;
      animation: (t: number) => Vec;
    };
  } = {

      // logo: {
      //   item: find(this.root, 'logo'),
      //   animation: (t) => {
      //     if (t < 0 || 1 < t) return new Vec(0, 0);
      //     return new Vec(0, 40 * (1 - t));
      //   },
      // },

      title: {
        item: find(this.root, 'logo-title'),
        animation: (t) => {
          if (t < 0.5) return new Vec(-100, 0);
          return new Vec(mix(-200, 0, t), 0);
        },
      },

      ext: {
        item: find(this.root, 'logo-ext'),
        animation: (t) => {
          if (t < 0 || 1 < t) return new Vec(0, 0);
          const x0 = 20;
          const y0 = -10;
          const x1 = x0;
          const y1 = -y0;
          return bezier([[0, 0], [x0, y0], [x1, y1], [0, 0]], t);
        },
      },

      yellow: {
        item: find(this.root, 'logo-yellow'),
        animation: (t) => {
          if (t < 0 || 0.5 < t) return new Vec(0, 0);
          const k = -40;
          const y = k * Math.sin(2 * Math.PI * t);
          return new Vec(0, y);
        },
      },

      blue: {
        item: find(this.root, 'logo-blue'),
        animation: (t) => {
          if (t < 0 || 1 < t) return new Vec(0, 0);
          const k = 40;
          const y = k * Math.sin(Math.PI * t);
          return new Vec(0, y);
        },
      },
    };

  constructor() {
    super('logo-view');
  }

  mount() {
    for (const i in this.#map) this.#map[i].item.position = new Vec(0, 0);
    this.animate();
  }

  unmount() {
    this.#anim.stop();
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
        item.item.position = item.animation(dt / duration);
      }
    });
  }
}
