import { Vector2, distance, mod, squareDistance } from '@/lib/std';
import { teethPerUnitRadius } from '@/modules/gear-box/shapes';

const eps = 1e-3;

export enum VertexType {
  SOURCE,
  NORMAL,
  DESTINATION,
}

export enum GearType {
  GEAR,
  STUB,
}

export interface IActor {
  readonly r: [number, number];
  readonly t: [GearType, GearType];
  rotation: number;
}

export interface IVertex {
  readonly type: VertexType;
  readonly position: Vector2;
  rotation: number;
  speed: number;
  actor?: IActor;
}

function dist(a: IVertex, b: IVertex) {
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
  vertices?: [IVertex, IVertex];
};

type CheckData = {
  speed: number;
  rotation: number;
  source?: IVertex;
};

export class Graph {
  readonly vertices: IVertex[] = [];

  addVertex(v: IVertex) {
    this.vertices.push(v);
  }

  findVertex(v: Vector2) {
    return this.vertices.find((item) => squareDistance(item.position, v) < eps);
  }

  setActor(vertex: IVertex, actor: IActor) {
    vertex.actor = actor;
  }

  solve(fail: (f: Failure) => void) {
    if (this.vertices.length < 2) {
      fail({ type: FailureType.BAD_DATA });
      return;
    }

    const source = this.vertices.find((item) => item.type === VertexType.SOURCE);
    if (!source) {
      fail({ type: FailureType.NO_SOURCE });
      return;
    }

    const data = new Map<IVertex, CheckData>([[source, { speed: source.speed, rotation: source.rotation, source }]]);
    let current: Set<IVertex>;
    let next = new Set<IVertex>([source]);

    const dbg = (v: IVertex) => `(${v.position.x}, ${v.position.y})`;
    const f = (n: number) => n.toFixed(1);
    const fa = (n: number) => `${(n * 180 / Math.PI).toFixed(1)} deg`;

    while (next.size > 0) {
      current = next;
      next = new Set<IVertex>();

      current.forEach((v) => {
        const vr = v.actor ? [...v.actor.r] : [1, 1];
        const vt = v.actor ? [...v.actor.t] : [GearType.STUB, GearType.STUB];
        const vdata = data.get(v)!;

        for (let i = 0; i < this.vertices.length; ++i) {
          const w = this.vertices[i];
          if (w === v) {
            continue;
          }

          if (data.has(w)) {
            const dataw = data.get(w)!;
            if (dataw.source === v) {
              continue;
            }
          }

          if (vdata.source === w) {
            continue;
          }

          const wr = w.actor ? [...w.actor.r] : [1, 1];
          const wt = w.actor ? [...w.actor.t] : [GearType.STUB, GearType.STUB];

          const dvw = dist(v, w);
          const d = [vr[0] + wr[0], vr[1] + wr[1]];

          // collision
          if (d[0] > dvw + eps || d[1] > dvw + eps) {
            fail({ type: FailureType.COLLISION, vertices: [v, w] });
            return;
          }

          // no contact
          if (dvw > d[0] + eps && dvw > d[1] + eps) {
            continue;
          }

          // speeds at contact points
          const s = [0, 0];
          d.forEach((value, index) => {
            if (
              Math.abs(value - dvw) < eps &&
              vt[index] === GearType.GEAR &&
              wt[index] === GearType.GEAR
            ) {
              s[index] = (-vdata.speed * vr[index]) / wr[index];
            }
          });

          // block: two contact points, different gear ratios: unable to sync rotation
          const abs = s.map(Math.abs);
          if (abs[0] > 0 && abs[1] > 0 && Math.abs(abs[0] - abs[1]) > eps) {
            fail({ type: FailureType.BLOCK, vertices: [v, w] });
            return;
          }

          const speed = abs[0] > abs[1] ? s[0] : s[1];
          const contactIndex = abs[0] > abs[1] ? 0 : 1; // TODO: resolve 0 : 1 equality

          if (data.has(w)) {
            const wdata = data.get(w)!;
            if (Math.abs(wdata.speed - speed) > eps) {
              fail({ type: FailureType.BLOCK, vertices: [v, w] });
              return;
            }
          } else {
            // sync rotation
            const delta = new Vector2(w.position.x - v.position.x, w.position.y - v.position.y);
            const angle = mod(Math.atan2(delta.y, delta.x), 2 * Math.PI);

            const vangle = mod(angle - vdata.rotation, 2 * Math.PI);
            const vstep = 2 * Math.PI / teethPerUnitRadius / vr[contactIndex];
            const vphase = mod(vangle, vstep) / vstep;

            const wangle = mod(angle + Math.PI - w.rotation, 2 * Math.PI);
            const wstep = 2 * Math.PI / teethPerUnitRadius / wr[contactIndex];
            const wphase = mod(wangle, wstep) / wstep;

            const requiredWPhase = mod(0.5 - vphase, 1);
            let diff = mod(wphase - requiredWPhase, 1);
            if (diff > 0.5) diff -= 1;
            const rotation = w.rotation + diff * wstep;

            data.set(w, { speed, rotation, source: v });
            next.add(w);
          }
        }
      });
    }

    const destinations = this.vertices.filter((item) => item.type === VertexType.DESTINATION);
    destinations.forEach(v => {
      if (!data.has(v)) {
        fail({ type: FailureType.NOT_FINISHED });
      } else {
        const ddata = data.get(v)!;
        if (ddata.speed === 0) {
          fail({ type: FailureType.NOT_FINISHED });
        }
      }
    });

    data.forEach((values, vertex) => {
      vertex.speed = values.speed;
      vertex.rotation = values.rotation;
    });
  }
}
