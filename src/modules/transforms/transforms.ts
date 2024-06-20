import { ViewModel } from '@/modules/view-model';
import { ref, shallowReactive } from 'vue';

// https://drafts.csswg.org/css-transforms-2/#mathematical-description
export class Vec4 {
  readonly v = shallowReactive([0, 0, 0, 1]);
  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 1) {
    this.v[0] = x;
    this.v[1] = y;
    this.v[2] = z;
    this.v[3] = w;
  }

  get x() { return this.v[0]; }
  set x(value) { this.v[0] = value; }

  get y() { return this.v[1]; }
  set y(value) { this.v[1] = value; }

  get z() { return this.v[2]; }
  set z(value) { this.v[2] = value; }

  get w() { return this.v[3]; }
  set w(value) { this.v[3] = value; }
}

export class Mat4 {
  // column-major order (transposed relative to all math papers):
  // first line of numbers represents first column of matrix etc.
  readonly m = shallowReactive([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1, // <= translations live here
  ]);

  constructor(m?: number[]) {
    m && this.assign(m);
  }

  assign(values: number[]) {
    const to = Math.min(this.m.length, values.length);
    for (let i = 0; i < to; ++i) {
      this.m[i] = values[i];
    }
  }

  get(row: number, col: number) {
    return this.m[row + 4 * col];
  }

  set(row: number, col: number, value: number) {
    this.m[row + 4 * col] = value;
  }
}

// https://drafts.csswg.org/css-transforms-2/#PerspectiveDefined
export function perspective(d: number) {
  /* eslint-disable */
  return new Mat4([
    1, 0, 0,  0  ,
    0, 1, 0,  0  ,
    0, 0, 1, -1/d,
    0, 0, 0,  1  ,
  ]);
  /* eslint-enable */
}

// https://drafts.csswg.org/css-transforms-2/#Rotate3dDefined
export function rotation(v: Vec4, a: number) {
  const norm = 1 / Math.hypot(v.x, v.y, v.z);
  const x = norm * v.x;
  const x2 = x * x;
  const y = norm * v.y;
  const y2 = y * y;
  const z = norm * v.z;
  const z2 = z * z;
  const s = Math.sin(a / 2);
  const c = Math.cos(a / 2);
  const sc = s * c;
  const sq = s * s;

  /* eslint-disable */
  return new Mat4([
    1 - 2 * (y2 + z2) * sq,   2 * (x*y*sq + z*sc)   ,   2 * (x*z*sq - y*sc)   ,   0,
    2 * (x*y*sq - z*sc)   ,   1 - 2 * (x2 + z2) * sq,   2 * (y*z*sq + x*sc)   ,   0,
    2 * (x*z*sq + y*sc)   ,   2 * (y*z*sq - x*sc)   ,   1 - 2 * (x2 + y2) * sq,   0,
    0                     ,   0                     ,   0                     ,   1,
  ]);
  /* eslint-enable */
}

export function mulCV4(c: number, v: Vec4) {
  return new Vec4(c * v.x, c * v.y, c * v.z);
}

export function mulM4M4(a: Mat4, b: Mat4) {
  const m = new Mat4();
  for (let row = 0; row < 4; ++row) {
    for (let col = 0; col < 4; ++col) {
      let sum = 0;
      for (let i = 0; i < 4; ++i) {
        sum += a.get(row, i) * b.get(i, col);
        m.set(row, col, sum);
      }
    }
  }
  return m;
}

export function rX(a: number) {
  return rotation(v4(1, 0, 0), a);
}

export function rY(a: number) {
  return rotation(v4(0, 1, 0), a);
}

export function rZ(a: number) {
  return rotation(v4(0, 0, 1), a);
}

export function v4(x: number = 0, y: number = 0, z: number = 0, w: number = 1) {
  return new Vec4(x, y, z, w);
}

export function m4(values: number[]) {
  return new Mat4(values);
}

// -------------------------------------------------------------------------------------------------
export class Transforms extends ViewModel {
  readonly m = rY(Math.PI / 6);

  readonly #a = ref(0);
  readonly #p = ref(500);

  constructor() {
    super('transforms-view');
  }

  get a() {
    return this.#a.value;
  }

  set a(value) {
    this.#a.value = value;
  }

  get p() {
    return this.#p.value;
  }

  set p(value) {
    this.#p.value = value;
  }

  get matrix3d() {
    const m = mulM4M4(perspective(this.p), rY(this.a * Math.PI / 180));
    return `matrix3d(${m.m.join(',')})`;
  }
}
