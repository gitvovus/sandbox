import { Item } from '@/lib/reactive';
import { Vector2 } from '@/lib/svg';
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

function tri() {
  const path = new PathBuilder(0);
  return path.M(2, 0, -1, 1, -1, -1).get();
}

const x = (r: number, a: number) => r * Math.cos(a);
const y = (r: number, a: number) => r * Math.sin(a);
const f = (n: number) => n.toFixed(3);

export class SvgModel extends ViewModel {
  root = new Item('svg');
  content = new Item('g');

  #camera = new Camera({ scale: new Vector2(1, -1) });
  #controller = new Controller(this.root, this.content, this.#camera);

  #element?: HTMLElement;
  #s = 1.3;

  constructor() {
    super('svg-view');
    this.root.add(this.content);
    this.#createStatic();
    this.#createScene();
    this.#controller.setReferenceSize(this.#s, this.#s);
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#controller.mount(element);
  }

  unmount() {
    this.#element = undefined;
    this.#controller.unmount();
  }

  test() {}

  #grid(size: number, step: number, strokeWidth: number, stroke: string) {
    const grid = new Item('g', { stroke, 'stroke-width': strokeWidth });
    const x = -size / 2;
    const s = -2 * x;
    const n = Math.floor(size / step / 2);
    for (let i = -n; i <= n; ++i) {
      grid.add(
        new Item('path', { d: `M${x} ${i * step}h${s}`, 'vector-effect': 'non-scaling-stroke' }),
        new Item('path', { d: `M${i * step} ${x}v${s}`, 'vector-effect': 'non-scaling-stroke' }),
      );
    }
    return grid;
  }

  #createStatic() {
    this.content.add(
      this.#grid(this.#s, 0.1, 1, '#00000010'),
      this.#grid(this.#s, 0.5, 1, '#00000030'),
      this.#grid(this.#s, 1.0, 1, '#000000'),
    );
  }

  #createScene() {
    const r = 5;
    const cx = -r;
    const cy = 0;
    const d = Math.PI / r / 4;
    const n = 5;
    const d0 = (-n * d) / 2;

    const ref = [`M ${f(cx + x(r, d0))} ${f(cy + y(r, d0))}`];
    for (let i = 0; i < n; ++i) {
      const a = d0 + i * d + d;
      ref.push(`A ${f(r)} ${f(r)} 0 0 1 ${f(cx + x(r, a))} ${f(cy + y(r, a))}`);
    }

    const g = new Item('g', { fill: 'none', stroke: 'gray', 'stroke-width': 0.005 });

    g.add(
      // new Item('path', {
      //   d: `M ${f(cx + x(r, d0))} ${f(cy + y(r, d0))} A ${f(r)} ${f(r)} 0 0 1 ${f(cx + x(r, -d0))} ${f(cy + y(r, -d0))}`,
      // }),

      // new Item('path', { d: 'M -2,2 C -1.5,2 -1.5,2 -1,0 C -0.5,-2 -0.5,-2 0,-2' }),
      new Item('path', { d: this.#gear(), transform: 'translate(-0.5, -5)' }),

      // new Item('path', { d: ref.join(''), fill: 'none', stroke: 'gray', 'stroke-width': 0.02 }),
    );

    this.content.add(g);
  }

  #gear() {
    const r = 5;
    const h = 1;
    const m = 0.1;
    const rr = r - 0.5 * h;
    const rb = rr + m;
    const rt = r + 0.5 * h - m;
    const rq = rt - 0.5 * m;
    const rbq = rq - rb;
    const rqt = rt - rq;

    const d = 1;
    const ab = 0.21 * d;
    // const am = 0.30 * d;
    const aq = 0.36 * d;
    const at = 0.5 * d;
    const abq = aq - ab;
    const aqt = at - aq;

    this.content.add(
      new Item('circle', {
        cx: d - ab - 0.15 * abq,
        cy: rb + 0.1 * rbq,
        fill: 'orange',
        transform: 'translate(-0.5, -5)',
        r: 0.01,
      }),
      new Item('circle', {
        cx: d - ab - 0.15 * abq,
        cy: rb + 0.1 * rbq,
        fill: 'orange',
        transform: 'translate(-0.5, -5)',
        r: 0.01,
      }),
    );

    return new PathBuilder()
      .M(0, rr)
      .C(0.4 * ab, rr, 0.85 * ab, rr, ab, rb)

      .C(ab + 0.15 * abq, rb + 0.1 * rbq, ab + 0.65 * abq, rb + 0.9 * rbq, aq, rq)
      .C(aq + 0.15 * aqt, rq + 0.7 * rqt, d - aq - 0.15 * aqt, rq + 0.7 * rqt, d - aq, rq)

      .C(d - ab - 0.15 * abq, rb + 0.1 * rbq, d - ab - 0.65 * abq, rb + 0.9 * rbq, d - ab, rb)

      .C(d - 0.4 * ab, rr, d - 0.85 * ab, rr, d, rr)
      .get();
  }
}
