import { Vector2, distance, mod, squareDistance } from '@/lib/std';
import { teethPerUnitRadius } from '@/modules/gear-box/shapes';

const eps = 1e-3;

export type RotorType = 'source' | 'mediator' | 'destination';

export type GearType = 'gear' | 'stub';

export interface Actor {
  readonly radii: [number, number];
  readonly types: [GearType, GearType];
  rotation: number;
}

export interface Rotor {
  readonly type: RotorType;
  readonly position: Vector2;
  rotation: number;
  speed: number;
  actor?: Actor;
}

function dist(a: Rotor, b: Rotor) {
  return distance(a.position, b.position);
}

export enum FailureType {
  BAD_DATA,
  NO_SOURCE,
  NO_DESTINATION,
  COLLISION,
  BLOCK,
  NOT_FINISHED,
}

export function failureType(type: FailureType) {
  switch (type) {
    case FailureType.BAD_DATA:
      return 'BAD_DATA';
    case FailureType.NO_SOURCE:
      return 'NO_SOURSE';
    case FailureType.NO_DESTINATION:
      return 'NO_DESTINATION';
    case FailureType.COLLISION:
      return 'COLLISION';
    case FailureType.BLOCK:
      return 'BLOCK';
    case FailureType.NOT_FINISHED:
      return 'NOT_FINISHED';
  }
}

type Failure = {
  type: FailureType;
  rotors?: [Rotor, Rotor];
};

type SolverData = {
  speed: number;
  rotation: number;
  source?: Rotor;
};

export class Solver {
  readonly rotors: Rotor[] = [];

  addRotor(rotor: Rotor) {
    this.rotors.push(rotor);
  }

  findRotorAt(position: Vector2) {
    return this.rotors.find((rotor) => squareDistance(rotor.position, position) < eps);
  }

  setActor(rotor: Rotor, actor: Actor) {
    rotor.actor = actor;
  }

  solve(fail: (f: Failure) => void) {
    if (this.rotors.length < 2) {
      fail({ type: FailureType.BAD_DATA });
      return;
    }

    const source = this.rotors.find((rotor) => rotor.type === 'source');
    if (!source) {
      fail({ type: FailureType.NO_SOURCE });
      return;
    }

    const data = new Map<Rotor, SolverData>([
      [source, { speed: source.speed, rotation: source.rotation, source }],
    ]);
    let current: Set<Rotor>;
    let next = new Set<Rotor>([source]);

    const f = (n: number) => n.toFixed(1);
    const fa = (n: number) => `${f((n * 180) / Math.PI)} deg`;
    const dbg = (v: Rotor) => `(${v.position.x}, ${v.position.y})`;

    while (next.size > 0) {
      current = next;
      next = new Set<Rotor>();

      current.forEach((a) => {
        const ar = a.actor ? [...a.actor.radii] : [1, 1];
        const at: [GearType, GearType] = a.actor ? [...a.actor.types] : ['stub', 'stub'];
        const aData = data.get(a)!;

        for (let i = 0; i < this.rotors.length; ++i) { // TODO: forEach
          const b = this.rotors[i];
          if (a === b) {
            continue;
          }

          if (aData.source === b) {
            continue;
          }

          if (data.has(b) && data.get(b)!.source === a) {
            continue;
          }

          const br = b.actor ? [...b.actor.radii] : [1, 1];
          const bt: [GearType, GearType] = b.actor ? [...b.actor.types] : ['stub', 'stub'];

          const abDistance = dist(a, b);
          const gearDistances = [ar[0] + br[0], ar[1] + br[1]];

          // collision
          if (gearDistances[0] > abDistance + eps || gearDistances[1] > abDistance + eps) {
            fail({ type: FailureType.COLLISION, rotors: [a, b] });
            continue;
          }

          // no contact
          if (abDistance > gearDistances[0] + eps && abDistance > gearDistances[1] + eps) {
            continue;
          }

          // speeds at contact points
          const speeds = [0, 0];
          gearDistances.forEach((distance, index) => {
            if (
              Math.abs(distance - abDistance) < eps &&
              at[index] === 'gear' &&
              bt[index] === 'gear'
            ) {
              speeds[index] = (-aData.speed * ar[index]) / br[index];
            }
          });

          // block: two contact points, different gear ratios: unable to sync rotation
          const abs = speeds.map(Math.abs);
          if (abs[0] > 0 && abs[1] > 0 && Math.abs(abs[0] - abs[1]) > eps) {
            fail({ type: FailureType.BLOCK, rotors: [a, b] });
            continue;
          }

          const speed = abs[0] > abs[1] ? speeds[0] : speeds[1];
          const contactIndex = abs[0] > abs[1] ? 0 : 1;

          if (data.has(b)) {
            const bData = data.get(b)!;
            if (Math.abs(bData.speed - speed) > eps) {
              fail({ type: FailureType.BLOCK, rotors: [a, b] });
              continue;
            }
          } else {
            // sync rotation
            const delta = new Vector2(b.position.x - a.position.x, b.position.y - a.position.y);
            const angle = mod(Math.atan2(delta.y, delta.x), 2 * Math.PI);

            const aAngle = mod(angle - aData.rotation, 2 * Math.PI);
            const aStep = (2 * Math.PI) / teethPerUnitRadius / ar[contactIndex];
            const aPhase = mod(aAngle, aStep) / aStep;

            const bAngle = mod(angle + Math.PI - b.rotation, 2 * Math.PI);
            const bStep = (2 * Math.PI) / teethPerUnitRadius / br[contactIndex];
            const bPhase = mod(bAngle, bStep) / bStep;

            const bRequiredPhase = mod(0.5 - aPhase, 1);
            let diff = mod(bPhase - bRequiredPhase, 1);
            if (diff > 0.5) diff -= 1;
            const rotation = b.rotation + diff * bStep;

            data.set(b, { speed, rotation, source: a });
            next.add(b);
          }
        }
      });
    }

    const destinations = this.rotors.filter((rotor) => rotor.type === 'destination');
    destinations.forEach((rotor) => {
      if (!data.has(rotor)) {
        fail({ type: FailureType.NOT_FINISHED });
      } else {
        const rotorData = data.get(rotor)!;
        if (rotorData.speed === 0) {
          fail({ type: FailureType.NOT_FINISHED }); // TODO: this should not happen (remove?)
        }
      }
    });

    data.forEach((rotorData, rotor) => {
      rotor.speed = rotorData.speed;
      rotor.rotation = rotorData.rotation;
    });
  }
}
