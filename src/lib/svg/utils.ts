import { Item, type Attributes } from '@/lib/reactive';

export function grid(
  width: number,
  height: number,
  step: number,
  strokeWidth: number,
  stroke: string,
) {
  const grid = new Item('g', { stroke, 'stroke-width': strokeWidth });
  const x = -width / 2;
  const y = -height / 2;
  const nx = Math.floor(width / step / 2);
  const ny = Math.floor(height / step / 2);

  for (let i = -nx; i <= nx; ++i) {
    grid.add(
      new Item('path', { 'd': `M${i * step} ${y}v${height}`, 'vector-effect': 'non-scaling-stroke' }),
    );
  }

  for (let i = -ny; i <= ny; ++i) {
    grid.add(
      new Item('path', { 'd': `M${x} ${i * step}h${width}`, 'vector-effect': 'non-scaling-stroke' }),
    );
  }

  return grid;
}

export function prettyGrid(
  r1: number,
  r2: number,
  step: number,
  strokeWidth: number,
  stroke: string,
) {
  const grid = new Item('g', { stroke, 'stroke-width': strokeWidth });
  const n = Math.floor(r1 / step);
  for (let i = -n; i <= n; ++i) {
    const a = i * step;
    const q = Math.abs(a) - r1 + r2;
    const b = q < 0 ? r1 : r1 - r2 + Math.sqrt(r2 * r2 - q * q);
    grid.add(
      new Item('line', { 'x1': a, 'y1': -b, 'x2': a, 'y2': b, 'vector-effect': 'non-scaling-stroke' }),
      new Item('line', { 'x1': -b, 'y1': a, 'x2': b, 'y2': a, 'vector-effect': 'non-scaling-stroke' }),
    );
  }
  return grid;
}

export function comb(r: number, attrs?: Attributes) {
  const angles = [...Array(6)].map((value, i) => (i + 0.5) * Math.PI / 3);
  const x = angles.map(value => Math.cos(value));
  const y = angles.map(value => Math.sin(value));
  const a = angles.map((value, i) => `${i ? 'L' : 'M'} ${x[i] * r} ${y[i] * r}`);
  a.push('z');
  return new Item('path', { d: a.join(' '), ...attrs });
}

export function prettyComb(
  r: number,
  rComb: number,
  groupAttrs?: Attributes,
  combAttrs?: Attributes,
) {
  const k = 1.1;
  const stepX = k * Math.sqrt(3) * rComb;
  const stepY = k * 1.5 * rComb;
  const n = Math.ceil(r / stepX);
  const grid = new Item('g', { ...groupAttrs });

  for (let x = -n; x <= n; ++x) {
    grid.add(comb(rComb, { transform: `translate(${x * stepX}, 0)`, ...combAttrs }));
  }

  for (let y = 1; y <= n; ++y) {
    for (let x = -n; x <= n - y; ++x) {
      grid.add(
        comb(rComb, { transform: `translate(${(y * 0.5 + x) * stepX} ${-y * stepY})`, ...combAttrs }),
        comb(rComb, { transform: `translate(${(y * 0.5 + x) * stepX} ${y * stepY})`, ...combAttrs }),
      );
    }
  }

  return grid;
}
