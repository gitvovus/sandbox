import { Item } from '@/lib/reactive';

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
      new Item('path', { d: `M${i * step} ${y}v${height}`, 'vector-effect': 'non-scaling-stroke' }),
    );
  }

  for (let i = -ny; i <= ny; ++i) {
    grid.add(
      new Item('path', { d: `M${x} ${i * step}h${width}`, 'vector-effect': 'non-scaling-stroke' }),
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
  const c = r1 - r2;
  for (let i = -n; i <= n; ++i) {
    const a = i * step;
    const q = Math.abs(a) - r1 + r2;
    const b = q < 0 ? r1 : r1 - r2 + Math.sqrt(r2 * r2 - q * q);
    grid.add(
      new Item('line', { x1: a, y1: -b, x2: a, y2: b, 'vector-effect': 'non-scaling-stroke' }),
      new Item('line', { x1: -b, y1: a, x2: b, y2: a, 'vector-effect': 'non-scaling-stroke' }),
    );
  }
  return grid;
}
