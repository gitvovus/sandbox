import * as std from '@/lib/std';
import * as bi from '@/lib/bi';
import { teethPerUnitRadius } from '@/modules/gear-box/lib/drawings';
import { type Actor, type Rotor, type ShapeType } from '@/modules/gear-box/lib/shapes';

const eps = 1e-3;

export type FailureType =
  | 'bad data'
  | 'no source'
  | 'no destination'
  | 'collision'
  | 'block'
  | 'not finished';

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

    const source = this.rotors.find(rotor => rotor.type === 'source');
    if (!source) {
      fail({ type: 'no source' });
      return;
    }

    this.rotors.forEach((rotor) => {
      rotor.state = 'ok';
      rotor.speed = 0;
    });

    // check all pairs
    for (let i = 0; i < this.rotors.length - 1; ++i) {
      for (let j = i + 1; j < this.rotors.length; ++j) {
        const a = this.rotors[i];
        const ar = a.actor ? [...a.actor.radii] : [1, 1];
        const at: [ShapeType, ShapeType] = a.actor ? [...a.actor.types] : ['stub', 'stub'];

        const b = this.rotors[j];
        const br = b.actor ? [...b.actor.radii] : [1, 1];
        const bt: [ShapeType, ShapeType] = b.actor ? [...b.actor.types] : ['stub', 'stub'];

        const abDistance = this.#distance(a, b);
        const contactDistances = [ar[0] + br[0], ar[1] + br[1]];

        // no contact
        if (abDistance > contactDistances[0] + eps && abDistance > contactDistances[1] + eps) {
          continue;
        }

        // collision
        if (contactDistances[0] > abDistance + eps || contactDistances[1] > abDistance + eps) {
          if (a.state === 'ok') a.state = 'collision';
          if (b.state === 'ok') b.state = 'collision';
          fail({ type: 'collision', rotors: [a, b] });
          continue;
        }

        // relative speeds at contact points
        const speeds = [0, 0];
        contactDistances.forEach((distance, index) => {
          if (
            Math.abs(distance - abDistance) < eps
            && at[index] === 'gear'
            && bt[index] === 'gear'
          ) {
            speeds[index] = -ar[index] / br[index];
          }
        });

        // direct block: two contact points, different gear ratios: unable to sync rotation
        const abs = speeds.map(Math.abs);
        if (abs[0] > 0 && abs[1] > 0 && Math.abs(abs[0] - abs[1]) > eps) {
          if (a.state === 'ok') a.state = 'block';
          if (b.state === 'ok') b.state = 'block';
          fail({ type: 'block', rotors: [a, b] });
          continue;
        }
      }
    }

    if (source.state !== 'ok') {
      fail({ type: 'not finished' });
      return;
    }

    source.speed = 1;
    const data = new Map<Rotor, SolverData>([
      [source, { speed: source.speed, rotation: source.rotation }],
    ]);
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
          if (a.state !== 'ok' && b.state !== 'ok') return;

          const br = b.actor ? [...b.actor.radii] : [1, 1];
          const bt: [ShapeType, ShapeType] = b.actor ? [...b.actor.types] : ['stub', 'stub'];

          const abDistance = this.#distance(a, b);
          const contactDistances = [ar[0] + br[0], ar[1] + br[1]];

          // no contact
          if (abDistance > contactDistances[0] + eps && abDistance > contactDistances[1] + eps) {
            return;
          }

          // collision - already checked

          // absolute speeds at contact points
          const speeds = [0, 0];
          contactDistances.forEach((distance, index) => {
            if (
              Math.abs(distance - abDistance) < eps
              && at[index] === 'gear'
              && bt[index] === 'gear'
            ) {
              speeds[index] = (-aData.speed * ar[index]) / br[index];
            }
          });

          const abs = speeds.map(Math.abs);
          // block: contact with blocked gear
          if ((abs[0] > 0 || abs[1] > 0) && (a.state !== 'ok' || b.state !== 'ok')) {
            if (a.state === 'ok') a.state = 'block';
            if (b.state === 'ok') b.state = 'block';
            fail({ type: 'block', rotors: [a, b] });
            return;
          }

          // direct block - already checked

          // block: two contact actors, different gear ratios: unable to sync rotation
          const speed = abs[0] > abs[1] ? speeds[0] : speeds[1];
          const contactIndex = abs[0] > abs[1] ? 0 : 1;

          if (data.has(b)) {
            const bData = data.get(b)!;
            if (Math.abs(bData.speed - speed) > eps) {
              if (a.state === 'ok') a.state = 'block';
              if (b.state === 'ok') b.state = 'block';
              fail({ type: 'block', rotors: [a, b] });
              return;
            }
          }
          else {
            // sync rotation
            const delta = new bi.Vec(b.position.x - a.position.x, b.position.y - a.position.y);
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

    const destinations = this.rotors.filter(rotor => rotor.type === 'destination');
    destinations.forEach((rotor) => {
      if (!data.has(rotor)) {
        fail({ type: 'not finished' });
      }
      else {
        const rotorData = data.get(rotor)!;
        if (rotorData.speed === 0) {
          fail({ type: 'not finished' });
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
