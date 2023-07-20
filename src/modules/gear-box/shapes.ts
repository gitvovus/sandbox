export const teethPerUnitRadius = 8;

export type GearOptions = {
  radius: number;
  innerRadius?: number;
  offset?: number;
  thickness?: number;
  spokeThickness?: number;
  spokes?: number;
  toothHeight?: number;
  shaftRadius?: number;
  margin?: number;
};

export type GearData = Required<GearOptions>;

const gearDefault: GearData = {
  radius: 1,
  innerRadius: 1,
  offset: 0,
  thickness: 0.25,
  spokeThickness: 0.375,
  spokes: 3,
  toothHeight: 0.5,
  shaftRadius: 0.375,
  margin: 0.1,
};

export function gearData(options: GearOptions) {
  return Object.assign({ ...gearDefault }, options);
}

// helpers to format text inside path data
const f = (n: number) => n.toFixed(3);
const x = (r: number, a: number) => f(r * Math.cos(a));
const y = (r: number, a: number) => f(r * Math.sin(a));

function cuts(data: GearData) {
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
      `M${x(r0, phi + d0)} ${y(r0, phi + d0)}`,
      `L${x(r3, phi + d2)} ${y(r3, phi + d2)}`,
      `A${f(r3)} ${f(r3)} 0 0 1 ${x(r3, phi + d3)} ${y(r3, phi + d3)}`,
      `L${x(r0, phi + d1)} ${y(r0, phi + d1)}`,
      `A${f(r0)} ${f(r0)} 0 0 0 ${x(r0, phi + d0)} ${y(r0, phi + d0)}z`
    );
  }

  return path.join('');
}

export function shaftBaseShape(radius: number = 1) {
  const r = f(radius);
  return `M${r} 0A${r} ${r} 0 0 1 -${r} 0A${r} ${r} 0 0 1 ${r} 0`;
}

export function shaftShape(radius?: number) {
  radius = radius || gearDefault.shaftRadius;
  const n = 6;
  const d = (2 * Math.PI) / n;
  const path = [`M${f(radius)} 0`];
  for (let i = 1; i < n; ++i) {
    const a = d * i;
    path.push(` ${x(radius, a)} ${y(radius, a)}`);
  }
  path.push('z');
  return path.join('');
}

export function stubShape(gearOptions: GearOptions) {
  const data = gearData(gearOptions);

  const r0 = data.radius - 0.5 * data.toothHeight;
  const sr = data.shaftRadius;
  const r = f(r0);

  const path = [`M${r} 0A${r} ${r} 0 0 1 -${r} 0A${r} ${r} 0 0 1 ${r} 0`];
  if (r0 > sr + 0.1) {
    path.push(cuts(data));
  }
  path.push(shaftShape(sr + data.margin));

  return path.join('');
}

export function gearShape(gearOptions: GearOptions) {
  const data = gearData(gearOptions);
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

  const path = [`M${x(r1, -a0)} ${y(r1, -a0)}`];

  for (let i = 0; i < n; ++i) {
    const phi = i * da;
    path.push(
      `A0.5 0.5 0 0 0 ${x(r1, phi + a0)} ${y(r1, phi + a0)}`,
      `A1 1 0 0 1 ${x(r2, phi + a1)} ${y(r2, phi + a1)}`,
      `A0.5 0.5 0 0 1 ${x(r2, phi + a2)} ${y(r2, phi + a2)}`,
      `A1 1 0 0 1 ${x(r1, phi + a3)} ${y(r1, phi + a3)}`
    );
  }
  path.push('z');

  path.push(cuts(data));
  path.push(shaftShape(sr + data.margin));

  return path.join('');
}
