import * as std from '@/lib/std';
import * as bi from '@/lib/bi';
import { teethPerUnitRadius } from '@/modules/gear-box/drawings';
import { type Actor, type Rotor, type ShapeType } from '@/modules/gear-box/shapes';

const eps = 1e-3;

export type FailureType = 'bad data' | 'no source' | 'no destination' | 'collision' | 'block' | 'not finished';

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

  clear() {
    this.rotors.length = 0;
  }

  addRotor(rotor: Rotor) {
    this.rotors.push(rotor);
  }

  setActor(rotor: Rotor, actor: Actor) {
    rotor.actor = actor;
  }

  solve(fail: (f: Failure) => void) {
    if (this.rotors.length < 2) {
      fail({ type: 'bad data' });
      return;
    }

    const source = this.rotors.find((rotor) => rotor.type === 'source');
    if (!source) {
      fail({ type: 'no source' });
      return;
    }

    const data = new Map<Rotor, SolverData>([[source, { speed: source.speed, rotation: source.rotation, source }]]);
    let current: Set<Rotor>;
    let next = new Set<Rotor>([source]);

    while (next.size > 0) {
      current = next;
      next = new Set<Rotor>();

      current.forEach((a) => {
        const ar = a.actor ? [...a.actor.radii] : [1, 1];
        const at: [ShapeType, ShapeType] = a.actor ? [...a.actor.types] : ['stub', 'stub'];
        const aData = data.get(a)!;

        this.rotors.forEach((b) => {
          if (a === b || aData.source === b || data.get(b)?.source === a) return;

          const br = b.actor ? [...b.actor.radii] : [1, 1];
          const bt: [ShapeType, ShapeType] = b.actor ? [...b.actor.types] : ['stub', 'stub'];

          const abDistance = this.#distance(a, b);
          const contactDistances = [ar[0] + br[0], ar[1] + br[1]];

          // collision
          if (contactDistances[0] > abDistance + eps || contactDistances[1] > abDistance + eps) {
            fail({ type: 'collision', rotors: [a, b] });
            return;
          }

          // no contact
          if (abDistance > contactDistances[0] + eps && abDistance > contactDistances[1] + eps) {
            return;
          }

          // speeds at contact points
          const speeds = [0, 0];
          contactDistances.forEach((distance, index) => {
            if (Math.abs(distance - abDistance) < eps && at[index] === 'gear' && bt[index] === 'gear') {
              speeds[index] = (-aData.speed * ar[index]) / br[index];
            }
          });

          // block: two contact points, different gear ratios: unable to sync rotation
          const abs = speeds.map(Math.abs);
          if (abs[0] > 0 && abs[1] > 0 && Math.abs(abs[0] - abs[1]) > eps) {
            fail({ type: 'block', rotors: [a, b] });
            return;
          }

          const speed = abs[0] > abs[1] ? speeds[0] : speeds[1];
          const contactIndex = abs[0] > abs[1] ? 0 : 1;

          if (data.has(b)) {
            const bData = data.get(b)!;
            if (Math.abs(bData.speed - speed) > eps) {
              fail({ type: 'block', rotors: [a, b] });
              return;
            }
          } else {
            // sync rotation
            const delta = new bi.Vector2(b.position.x - a.position.x, b.position.y - a.position.y);
            const angle = std.mod(Math.atan2(delta.y, delta.x), 2 * Math.PI);

            const aAngle = std.mod(angle - aData.rotation, 2 * Math.PI);
            const aStep = (2 * Math.PI) / teethPerUnitRadius / ar[contactIndex];
            const aPhase = std.mod(aAngle, aStep) / aStep;

            const bAngle = std.mod(angle + Math.PI - b.rotation, 2 * Math.PI);
            const bStep = (2 * Math.PI) / teethPerUnitRadius / br[contactIndex];
            const bPhase = std.mod(bAngle, bStep) / bStep;

            const bRequiredPhase = std.mod(0.5 - aPhase, 1);
            let diff = std.mod(bPhase - bRequiredPhase, 1);
            if (diff > 0.5) diff -= 1;
            const rotation = b.rotation + diff * bStep;

            data.set(b, { speed, rotation, source: a });
            next.add(b);
          }
        });
      });
    }

    const destinations = this.rotors.filter((rotor) => rotor.type === 'destination');
    destinations.forEach((rotor) => {
      if (!data.has(rotor)) {
        fail({ type: 'not finished' });
      } else {
        const rotorData = data.get(rotor)!;
        if (rotorData.speed === 0) {
          fail({ type: 'not finished' }); // TODO: this should not happen (remove?)
        }
      }
    });

    data.forEach((rotorData, rotor) => {
      rotor.speed = rotorData.speed;
      rotor.rotation = rotorData.rotation;
    });

    this.rotors.forEach((rotor) => {
      if (!data.has(rotor)) rotor.speed = 0;
    });
  }

  #distance(a: Rotor, b: Rotor) {
    return bi.distance(a.position, b.position);
  }
}
