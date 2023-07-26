import { x3, y3, f3 } from '@/lib/helpers';
import { Item } from '@/lib/reactive';
import { type ShapeType } from '@/modules/gear-box/shapes';

export const teethPerUnitRadius = 8;

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
  teethPerUnitRadius?: number;
  margin?: number;
  shaftMargin?: number;
};

export type DrawingData = Required<DrawingOptions>;

const defaultData: DrawingData = {
  radius: 1,
  innerRadius: 1,
  offset: 0,
  thickness: 0.25,
  spokeThickness: 0.375,
  spokes: 3,
  toothHeight: 0.5,
  shaftRadius: 0.375,
  baseRadius: 0.75,
  teethPerUnitRadius,
  margin: 0.1,
  shaftMargin: 0.06,
};

function drawingData(options: DrawingOptions) {
  return Object.assign({ ...defaultData }, options);
}

function cuts(data: DrawingData) {
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
      `M${x3(r0, phi + d0)} ${y3(r0, phi + d0)}`,
      `L${x3(r3, phi + d2)} ${y3(r3, phi + d2)}`,
      `A${f3(r3)} ${f3(r3)} 0 0 1 ${x3(r3, phi + d3)} ${y3(r3, phi + d3)}`,
      `L${x3(r0, phi + d1)} ${y3(r0, phi + d1)}`,
      `A${f3(r0)} ${f3(r0)} 0 0 0 ${x3(r0, phi + d0)} ${y3(r0, phi + d0)}z`,
    );
  }

  return path.join('');
}

export function drawBase(radius?: number) {
  const r = f3(radius || defaultData.baseRadius);
  return `M${r} 0A${r} ${r} 0 0 1 -${r} 0A${r} ${r} 0 0 1 ${r} 0z`;
}

export function drawShaft(radius?: number) {
  radius = radius || defaultData.shaftRadius;
  const n = 6;
  const d = Math.PI / n;
  const d0 = -d / 2;
  const path = [`M${x3(radius, d0)} ${y3(radius, d0)}`];
  const r0 = radius / 3;
  const r1 = radius / 2;
  for (let i = 0; i < n; ++i) {
    const a0 = d0 + 2 * d * i + d;
    const a1 = a0 + d;
    path.push(
      `A${f3(r0)} ${f3(r0)} 0 0 1 ${x3(radius, a0)} ${y3(radius, a0)}`,
      `A${f3(r1)} ${f3(r1)} 0 0 0 ${x3(radius, a1)} ${y3(radius, a1)}`,
    );
  }
  path.push('z');
  return path.join('');
}

function stub(gearOptions: DrawingOptions) {
  const data = drawingData(gearOptions);

  const r0 = data.radius - 0.5 * data.toothHeight;
  const sr = data.shaftRadius;
  const r = f3(r0);

  const path = [`M${r} 0A${r} ${r} 0 0 1 -${r} 0A${r} ${r} 0 0 1 ${r} 0`];
  if (r0 > sr + 0.1) {
    path.push(cuts(data));
  }
  path.push(drawShaft(sr + data.shaftMargin));

  return path.join('');
}

function gear(gearOptions: DrawingOptions) {
  const data = drawingData(gearOptions);
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

  const rh1 = f3(h);
  const rh2 = f3(2 * h);

  const path = [`M${x3(r1, -a0)} ${y3(r1, -a0)}`];

  for (let i = 0; i < n; ++i) {
    const phi = i * da;
    path.push(
      `A${rh1} ${rh1} 0 0 0 ${x3(r1, phi + a0)} ${y3(r1, phi + a0)}`,
      `A${rh2} ${rh2} 0 0 1 ${x3(r2, phi + a1)} ${y3(r2, phi + a1)}`,
      `A${rh1} ${rh1} 0 0 1 ${x3(r2, phi + a2)} ${y3(r2, phi + a2)}`,
      `A${rh2} ${rh2} 0 0 1 ${x3(r1, phi + a3)} ${y3(r1, phi + a3)}`,
    );
  }
  path.push('z');

  path.push(cuts(data));
  path.push(drawShaft(sr + data.shaftMargin));

  return path.join('');
}

export function draw(type: ShapeType, options: DrawingOptions) {
  switch (type) {
    case 'gear':
      return gear(options);
    case 'stub':
      return stub(options);
  }
}

export function grid(width: number, height: number, step: number, strokeWidth: number, stroke: string) {
  const grid = new Item('g', { stroke, 'stroke-width': strokeWidth });
  const x = -width / 2;
  const y = -height / 2;
  const nx = Math.floor(width / step / 2);
  const ny = Math.floor(height / step / 2);

  for (let i = -nx; i <= nx; ++i) {
    grid.add(new Item('path', { d: `M${i * step} ${y}v${height}`, 'vector-effect': 'non-scaling-stroke' }));
  }

  for (let i = -ny; i <= ny; ++i) {
    grid.add(new Item('path', { d: `M${x} ${i * step}h${width}`, 'vector-effect': 'non-scaling-stroke' }));
  }

  return grid;
}
