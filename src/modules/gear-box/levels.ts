import { Vec, length, normalize } from '@/lib/bi';
import type { ShapeType, RotorType } from '@/modules/gear-box/shapes';

export type GearData = { type: ShapeType; radius: number; fill: string };

export type LevelData = {
  shafts: [RotorType, number, number][];
  gears: [GearData, GearData][];
  connections: { shaft: number; gear: number }[];
};

class Level {
  rotors: { type: RotorType; position: Vec }[] = [{ type: 'source', position: new Vec(0, 0) }];

  add(position: Vec, type: RotorType = 'mediator') {
    this.rotors.push({ type, position });
  }

  fromOne(a: Vec, direction: Vec, distance: number) {
    const d = normalize(direction);
    return new Vec(a.x + d.x * distance, a.y + d.y * distance);
  }

  fromTwo(a: Vec, b: Vec, da: number, db: number) {
    const ab = new Vec(b.x - a.x, b.y - a.y);
    const d = length(ab);
    const x = (d * d + da * da - db * db) / (2 * d);
    const y = Math.sqrt(da * da - x * x);

    const dx = new Vec((ab.x * x) / d, (ab.y * x) / d);
    const dy = new Vec((-ab.y * y) / d, (ab.x * y) / d);

    return new Vec(a.x + dx.x + dy.x, a.y + dx.y + dy.y);
  }
}

export const levels: LevelData[] = [
  // level 0
  {
    shafts: [
      ['source', -2, 4],
      ['mediator', -2, -4],
      ['destination', 5, -4],
      ['destination', 5, 4],
    ],
    gears: [
      [
        { type: 'gear', radius: 5, fill: 'fill-5' },
        { type: 'stub', radius: 3, fill: 'fill-3' },
      ],
      [
        { type: 'gear', radius: 3, fill: 'fill-2' },
        { type: 'gear', radius: 5, fill: 'fill-4' },
      ],
      [
        { type: 'gear', radius: 3, fill: 'fill-0' },
        { type: 'gear', radius: 2, fill: 'fill-7' },
      ],
      [
        { type: 'gear', radius: 2, fill: 'fill-6' },
        { type: 'gear', radius: 4, fill: 'fill-1' },
      ],
    ],
    connections: [
      { shaft: 0, gear: 0 },
      { shaft: 1, gear: 1 },
      { shaft: 2, gear: 2 },
      { shaft: 3, gear: 3 },
    ],
  },
];
