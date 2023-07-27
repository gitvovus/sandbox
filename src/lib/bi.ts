import * as std from '@/lib/std';

export type MatElements = [number, number, number, number, number, number];

export class Vec {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vec(this.x, this.y);
  }
}

export class Mat {
  static translation(x: number, y: number) {
    return new Mat(1, 0, 0, 1, x, y);
  }

  static rotation(angle: number) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    return new Mat(cos, sin, -sin, cos, 0, 0);
  }

  static scale(x: number, y: number) {
    return new Mat(x, 0, 0, y, 0, 0);
  }

  static inverse(matrix: Mat) {
    const m = matrix.elements;
    const k = 1 / (m[0] * m[3] - m[1] * m[2]);
    return new Mat(m[3] * k, -m[1] * k, -m[2] * k, m[0] * k, (m[2] * m[5] - m[3] * m[4]) * k, (m[1] * m[4] - m[0] * m[5]) * k);
  }

  readonly elements: MatElements;

  constructor(...elements: MatElements) {
    this.elements = elements;
  }

  clone() {
    return new Mat(...this.elements);
  }

  multiply(m: Mat) {
    const a = this.elements;
    const b = m.elements;
    return new Mat(
      a[0] * b[0] + a[2] * b[1],
      a[1] * b[0] + a[3] * b[1],
      a[0] * b[2] + a[2] * b[3],
      a[1] * b[2] + a[3] * b[3],
      a[0] * b[4] + a[2] * b[5] + a[4],
      a[1] * b[4] + a[3] * b[5] + a[5],
    );
  }

  transform(v: Vec) {
    const m = this.elements;
    return new Vec(m[0] * v.x + m[2] * v.y + m[4], m[1] * v.x + m[3] * v.y + m[5]);
  }

  toCss() {
    return `matrix(${this.elements.join(', ')})`;
  }
}

export function mix(a: Vec, b: Vec, k: number) {
  return new Vec(std.mix(a.x, b.x, k), std.mix(a.y, b.y, k));
}

export function squareDistance(a: Vec, b: Vec) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

export function distance(a: Vec, b: Vec) {
  return Math.sqrt(squareDistance(a, b));
}

export function squareLength(v: Vec) {
  return v.x * v.x + v.y * v.y;
}

export function length(v: Vec) {
  return Math.sqrt(squareLength(v));
}

export function normalize(v: Vec) {
  const k = 1 / length(v);
  return new Vec(v.x * k, v.y * k);
}
