import { Item } from '@/lib/reactive';
import { Vector2, length, normalize } from '@/lib/svg';
import { grid } from '@/modules/gear-box/drawings';
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

const x = (r: number, a: number) => r * Math.cos(a);
const y = (r: number, a: number) => r * Math.sin(a);
const f = (n: number) => n.toFixed(3);
const v2 = (x: number, y: number) => new Vector2(x, y);

export class SvgModel extends ViewModel {
  root = new Item('svg');
  defs = new Item('defs');
  gradients: Item[] = [];
  content = new Item('g');

  #camera = new Camera({ scale: v2(1, -1) });
  #controller = new Controller(this.root, this.content, this.#camera);

  #element?: HTMLElement;
  #s = 24.8;

  #styleIndex = 0;
  #styles = ['gradient-green', 'gradient-yellow', 'gradient-red'];
  #styledCircle = new Item('circle', { cx: 0, cy: 0, r: 3, class: this.#styles[this.#styleIndex] });

  constructor() {
    super('svg-view');

    (<[string, string][]>[
      ['green', '#00ff00'],
      ['yellow', '#c0c000'],
      ['red', '#ff0000'],
    ]).forEach(([name, fill]) => {
      const g = new Item('radialGradient', { id: `gradient-${name}` });
      g.add(
        new Item('stop', { offset: 0.2, 'stop-color': `${fill}40` }),
        new Item('stop', { offset: 1, 'stop-color': `${fill}00` }),
      );
      this.gradients.push(g);
    });

    this.defs.add(...this.gradients);

    this.#createStatic();
    this.#createScene();
    this.root.add(this.defs, this.content);
    this.#controller.resize(this.#s, this.#s);
  }

  test() {
    this.#styleIndex = (this.#styleIndex + 1) % this.#styles.length;
    this.#styledCircle.attributes.class = this.#styles[this.#styleIndex];
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#controller.mount(element);
  }

  unmount() {
    this.#element = undefined;
    this.#controller.unmount();
  }

  #createStatic() {
    this.content.add(
      grid(this.#s, this.#s, 1, 1, '#00000020'),
      grid(this.#s, this.#s, 5, 1, '#00000040'),
      grid(this.#s, this.#s, 10, 1, '#000000'),
    );
  }

  #createScene() {
    this.#createLevel();
    this.#createGradient();
    // this.#createGear();
  }

  #createLevel() {
    const s = [v2(0, 0)];
    const m: Vector2[] = [];
    const d: Vector2[] = [];

    m.push(this.#fromOne(s[0], v2(3, 4), 10));
    d.push(this.#fromTwo(s[0], m[0], 6, 8));
    d.push(this.#fromTwo(m[0], s[0], 8, 6));

    const sw = 2;
    const mw = 2;
    const dw = 2;

    let x = 0;
    let y = 0;
    let w = sw * s.length + mw * m.length + dw * d.length;

    s.forEach((v) => {
      x += sw * v.x;
      y += sw * v.y;
    });
    m.forEach((v) => {
      x += mw * v.x;
      y += mw * v.y;
    });
    d.forEach((v) => {
      x += dw * v.x;
      y += dw * v.y;
    });

    x /= w;
    y /= w;

    s.forEach((v) => {
      v.x -= x;
      v.y -= y;
    });
    m.forEach((v) => {
      v.x -= x;
      v.y -= y;
    });
    d.forEach((v) => {
      v.x -= x;
      v.y -= y;
    });

    const g = new Item('g');
    s.forEach((v) => g.add(this.#circle(v, '#20c00080')));
    m.forEach((v) => g.add(this.#circle(v, '#e0e02080')));
    d.forEach((v) => g.add(this.#circle(v, '#f0200080')));
    this.content.add(g);
  }

  #fromOne(a: Vector2, direction: Vector2, distance: number) {
    const d = normalize(direction);
    return v2(a.x + d.x * distance, a.y + d.y * distance);
  }

  #fromTwo(a: Vector2, b: Vector2, da: number, db: number) {
    const ab = v2(b.x - a.x, b.y - a.y);
    const d = length(ab);
    const x = (d * d + da * da - db * db) / (2 * d);
    const y = Math.sqrt(da * da - x * x);

    const dx = v2((ab.x * x) / d, (ab.y * x) / d);
    const dy = v2((-ab.y * y) / d, (ab.x * y) / d);

    return v2(a.x + dx.x + dy.x, a.y + dx.y + dy.y);
  }

  #circle(v: Vector2, fill: string) {
    return new Item('circle', { cx: v.x, cy: v.y, r: 0.4, fill });
  }

  #createGradient() {
    this.content.add(this.#styledCircle);
  }

  #createGear() {
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

    const g1 = new Item('g', { fill: 'none', stroke: 'gray', 'stroke-width': 0.01 });
    const g2 = new Item('g', {
      fill: 'none',
      stroke: 'gray',
      'stroke-width': 0.01,
      transform: 'scale(1, -1) translate(0.5 0)',
    });

    g1.add(new Item('path', { d: this.#gear() }));
    g2.add(new Item('path', { d: this.#gear() }));

    this.content.add(g1, g2);
  }

  #gear() {
    const p: [number, number][] = [
      [0.0, 0.0],
      [0.26, 0.4],
      [0.42, 0.9],
    ];
    for (let i = p.length - 1; i >= 0; --i) {
      p.push([1 - p[i][0], p[i][1]]);
    }
    for (let i = 0; i < p.length; ++i) {
      p[i][0] -= 0.5;
      p[i][1] -= 0.5;
    }

    const c: [number, number][] = [
      [0.19, 0.0],
      [0.19, 0.0],
      [0.37, 0.88],
      [0.37, 0.88],
      [0.5, 0.91],
    ];
    for (let i = c.length - 1; i >= 0; --i) {
      c.push([1 - c[i][0], c[i][1]]);
    }
    for (let i = 0; i < c.length; ++i) {
      c[i][0] -= 0.5;
      c[i][1] -= 0.5;
    }

    const gp = new Item('g', { fill: 'darkred' });
    p.forEach(([x, y]) => gp.add(new Item('circle', { cx: x, cy: y, r: 0.01 })));

    const gc = new Item('g', { fill: 'orange' });
    c.forEach(([x, y]) => gc.add(new Item('circle', { cx: x, cy: y, r: 0.01 })));

    this.content.add(gc);
    this.content.add(gp);

    return new PathBuilder()
      .M(...p[0])
      .C(...c[0], ...c[1], ...p[1])
      .C(...c[2], ...c[3], ...p[2])
      .C(...c[4], ...c[5], ...p[3])
      .C(...c[6], ...c[7], ...p[4])
      .C(...c[8], ...c[9], ...p[5])
      .get();
  }
}
