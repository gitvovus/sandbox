import { Vec } from '@/lib/bi';
import type { RotorType, ShapeType } from '@/modules/gear-box/shapes';

export type GearData = {
  position: Vec;
  shapes: [
    { type: ShapeType; radius: number; fill: string },
    { type: ShapeType; radius: number; fill: string },
  ];
};

export type LevelData = {
  shafts: { type: RotorType; position: Vec }[];
  gears: GearData[];
  connections: { shaft: number; gear: number }[];
};

// class Level {
//   rotors: { type: RotorType; position: Vec }[] = [{ type: 'source', position: new Vec() }];

//   add(position: Vec, type: RotorType = 'mediator') {
//     this.rotors.push({ type, position });
//   }

//   fromOne(a: Vec, direction: Vec, distance: number) {
//     const d = normalize(direction);
//     return new Vec(a.x + d.x * distance, a.y + d.y * distance);
//   }

//   fromTwo(a: Vec, b: Vec, da: number, db: number) {
//     const ab = new Vec(b.x - a.x, b.y - a.y);
//     const d = length(ab);
//     const x = (d * d + da * da - db * db) / (2 * d);
//     const y = Math.sqrt(da * da - x * x);

//     const dx = new Vec((ab.x * x) / d, (ab.y * x) / d);
//     const dy = new Vec((-ab.y * y) / d, (ab.x * y) / d);

//     return new Vec(a.x + dx.x + dy.x, a.y + dx.y + dy.y);
//   }
// }

const v = (x: number, y: number) => new Vec(x, y);

export const levels: LevelData[] = [
  // level 0
  {
    /* eslint-disable */
    shafts: [
      { type: 'source',      position: v(-3, 9) },
      { type: 'mediator',    position: v(-3, 1) },
      { type: 'destination', position: v( 4, 1) },
      { type: 'destination', position: v( 4, 9) },
    ],
    /* eslint-enable */
    gears: [
      {
        position: v(-12, -6),
        shapes: [
          { type: 'gear', radius: 5, fill: 'fill-5' },
          { type: 'stub', radius: 3, fill: 'fill-3' },
        ],
      },
      {
        position: v(4, -10),
        shapes: [
          { type: 'gear', radius: 5, fill: 'fill-4' },
          { type: 'gear', radius: 3, fill: 'fill-2' },
        ],
      },
      {
        position: v(-5, -12),
        shapes: [
          { type: 'gear', radius: 3, fill: 'fill-0' },
          { type: 'gear', radius: 2, fill: 'fill-7' },
        ],
      },
      {
        position: v(13, -6),
        shapes: [
          { type: 'gear', radius: 4, fill: 'fill-1' },
          { type: 'gear', radius: 2, fill: 'fill-6' },
        ],
      },
    ],
    connections: [
      // { shaft: 0, gear: 0 },
      // { shaft: 1, gear: 1 },
      // { shaft: 2, gear: 2 },
      // { shaft: 3, gear: 3 },
    ],
  },
];
