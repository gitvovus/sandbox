import { fn, xn, yn } from '@/lib/helpers';
import { type ShapeType } from '@/modules/gears/lib/shapes';

export const teethPerUnitRadius = 3;
const q = 2;

export type DrawingOptions = {
  radius: number;
  innerRadius?: number;
  offset?: number;
  thickness?: number;
  spokeThickness?: number;
  spokes?: number;
  toothHeight?: number;
  shaftRadius?: number;
  baseRadius?: number;
  margin?: number;
  shaftMargin?: number;
};

export type DrawingData = Required<DrawingOptions>;

const defaultData: DrawingData = {
  radius: 1,
  innerRadius: 1,
  offset: 0,
  thickness: 0.375,
  spokeThickness: 0.375,
  spokes: 3,
  toothHeight: 0.875,
  shaftRadius: 0.375,
  baseRadius: 0.75,
  margin: 0.1,
  shaftMargin: 0.06,
};

function drawingData(options: DrawingOptions) {
  return Object.assign({ ...defaultData }, options);
}

export function cuts(options: DrawingOptions) {
  const data = drawingData(options);

  const ir = data.innerRadius;
  const tc = data.thickness;
  const st = data.spokeThickness;
  const h = data.toothHeight;
  const off = data.offset;

  const r1 = data.radius - 0.5 * h;
  const r0 = r1 - tc;
  const r3 = ir;
  const s = data.spokes;
  const di = (2 * Math.PI) / s;
  const d0 = (0.5 * st) / r0;
  const d1 = di - d0;
  const d2 = (0.5 * st) / r3;
  const d3 = di - d2;

  const path: string[] = [];

  for (let i = 0; i < s; ++i) {
    const phi = i * di + off;
    path.push(
      `M ${xn(r0, phi + d0, q)} ${yn(r0, phi + d0, q)}`,
      `L ${xn(r3, phi + d2, q)} ${yn(r3, phi + d2, q)}`,
      `A ${fn(r3, q)} ${fn(r3, q)} 0 0 1 ${xn(r3, phi + d3, q)} ${yn(r3, phi + d3, q)}`,
      `L ${xn(r0, phi + d1, q)} ${yn(r0, phi + d1, q)}`,
      `A ${fn(r0, q)} ${fn(r0, q)} 0 0 0 ${xn(r0, phi + d0, q)} ${yn(r0, phi + d0, q)} z`,
    );
  }

  return path.join(' ');
}

export function drawBase(radius?: number) {
  const r = fn(radius || defaultData.baseRadius, q);
  return `M ${r} 0 A ${r} ${r} 0 0 1 -${r} 0 A ${r} ${r} 0 0 1 ${r} 0 z`;
}

export function drawShaft(radius?: number) {
  radius = radius || defaultData.shaftRadius;
  const n = 6;
  const d = Math.PI / n;
  const d0 = -d / 2;
  const path = [`M ${xn(radius, d0, q)} ${yn(radius, d0, q)}`];
  const r0 = radius / 3;
  const r1 = radius / 2;
  for (let i = 0; i < n; ++i) {
    const a0 = d0 + 2 * d * i + d;
    const a1 = a0 + d;
    path.push(
      `A ${fn(r0, q)} ${fn(r0, q)} 0 0 1 ${xn(radius, a0, q)} ${yn(radius, a0, q)}`,
      `A ${fn(r1, q)} ${fn(r1, q)} 0 0 0 ${xn(radius, a1, q)} ${yn(radius, a1, q)}`,
    );
  }
  path.push('z');
  return path.join(' ');
}

export function stub(options: DrawingOptions) {
  const data = drawingData(options);

  const r0 = data.radius - 0.5 * data.toothHeight;
  const sr = data.shaftRadius;
  const r = fn(r0, q);

  const path = [`M ${r} 0 A${r} ${r} 0 0 1 -${r} 0 A ${r} ${r} 0 0 1 ${r} 0`];
  if (r0 > sr + 0.1) {
    path.push(cuts(data));
  }
  path.push(drawShaft(sr + data.shaftMargin));

  return path.join(' ');
}

export function simpleGear(options: DrawingOptions) {
  const data = drawingData(options);
  const h = data.toothHeight;
  const n = teethPerUnitRadius * data.radius;
  const sr = data.shaftRadius;

  const da = (2 * Math.PI) / n;
  const a0 = da * 0.19;
  const a1 = da * 0.37;
  const a2 = da - a1;
  const a3 = da - a0;

  const r1 = data.radius - 0.5 * h;
  const r2 = r1 + (1 - data.margin) * h;

  const path = [`M ${xn(r1, -a0, q)} ${yn(r1, -a0, q)}`];

  for (let i = 0; i < n; ++i) {
    const phi = i * da;
    path.push(
      `${xn(r1, phi + a0, q)} ${yn(r1, phi + a0, q)}`,
      `${xn(r2, phi + a1, q)} ${yn(r2, phi + a1, q)}`,
      `${xn(r2, phi + a2, q)} ${yn(r2, phi + a2, q)}`,
      `${xn(r1, phi + a3, q)} ${yn(r1, phi + a3, q)}`,
    );
  }
  path.push('z');

  path.push(cuts(data));
  path.push(drawShaft(sr + data.shaftMargin));

  return path.join(' ');
}

export function gearContour(options: DrawingOptions) {
  const data = drawingData(options);
  const h = data.toothHeight;
  const m = data.margin;
  const n = teethPerUnitRadius * data.radius;

  const da = (2 * Math.PI) / n;
  const a0 = 0;
  const a1 = da * 0.45;
  const a2 = da * 0.17;
  const a3 = da * 0.5;
  const a5 = da - a1;
  const a6 = da;

  const r0 = data.radius - 0.5 * h;
  const r1 = r0 / Math.cos(a1);
  const r3 = r0 + h - m;
  const r2 = r3 / Math.cos(a3 - a2);
  const r5 = r1;
  const r6 = r0;

  const r = [r2, r3, r5, r6];
  const a = [a2, a3, a5, a6];

  const path = [`M ${xn(r0, a0, q)} ${yn(r0, a0, q)} C ${xn(r1, a1, q)} ${yn(r1, a1, q)}`];

  for (let i = 0; i < n; ++i) {
    const phi = i * da;
    const c = (idx: number) => `${xn(r[idx], phi + a[idx], q)} ${yn(r[idx], phi + a[idx], q)}`;
    if (i !== 0) {
      path.push('S');
    }
    path.push(`${c(0)} ${c(1)} S ${c(2)} ${c(3)}`);
  }
  path.push('z');
  return path.join(' ');
}

export function gear(options: DrawingOptions) {
  const data = drawingData(options);
  const h = data.toothHeight;
  const m = data.margin;
  const n = teethPerUnitRadius * data.radius;
  const sr = data.shaftRadius;

  const da = (2 * Math.PI) / n;
  const a0 = 0;
  const a1 = da * 0.45;
  const a2 = da * 0.17;
  const a3 = da * 0.5;
  const a5 = da - a1;
  const a6 = da;

  const r0 = data.radius - 0.5 * h;
  const r1 = r0 / Math.cos(a1);
  const r3 = r0 + h - m;
  const r2 = r3 / Math.cos(a3 - a2);
  const r5 = r1;
  const r6 = r0;

  const r = [r2, r3, r5, r6];
  const a = [a2, a3, a5, a6];

  const path = [`M ${xn(r0, a0, q)} ${yn(r0, a0, q)} C ${xn(r1, a1, q)} ${yn(r1, a1, q)}`];

  for (let i = 0; i < n; ++i) {
    const phi = i * da;
    const c = (idx: number) => `${xn(r[idx], phi + a[idx], q)} ${yn(r[idx], phi + a[idx], q)}`;
    if (i !== 0) {
      path.push('S');
    }
    path.push(`${c(0)} ${c(1)} S ${c(2)} ${c(3)} `);
  }
  path.push('z');

  path.push(cuts(data));
  path.push(drawShaft(sr + data.shaftMargin));

  return path.join(' ');
}

export function draw(type: ShapeType, options: DrawingOptions) {
  switch (type) {
    case 'gear':
      return gear(options);
    case 'stub':
      return stub(options);
  }
}
