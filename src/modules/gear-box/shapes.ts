import * as bi from '@/lib/bi';
import { type Attributes, Item } from '@/lib/reactive';
import { type Scene } from '@/modules/gear-box/scene';
import { draw, type DrawingOptions } from '@/modules/gear-box/drawings';
import { Transformable } from '@/modules/svg/transformable';

export type ShapeType = 'gear' | 'stub';

export type RotorType = 'source' | 'mediator' | 'destination';

export type RotorState = 'ok' | 'block' | 'collision';

export interface Actor {
  readonly radii: [number, number];
  readonly types: [ShapeType, ShapeType];
  position: bi.Vec;
  rotation: number;
  rotor?: Rotor;
}

export interface Rotor {
  readonly type: RotorType;
  readonly position: bi.Vec;
  rotation: number;
  speed: number;
  actor?: Actor;
  state: RotorState;
}

function use(item: Item, attributes?: Attributes) {
  return new Item('use', { href: `#${item.attributes.id}`, ...attributes });
}

function useT(item: Item, attributes?: Attributes) {
  return new Transformable('use', { href: `#${item.attributes.id}`, ...attributes });
}

function changeClasses(
  classes: string,
  { add = [], remove = [] }: { add?: string[]; remove?: string[] },
) {
  const updated = classes.split(' ').filter((c) => !add.includes(c) && !remove.includes(c));
  updated.push(...add);
  return updated.join(' ');
}

export class Shape {
  readonly type: ShapeType;
  readonly radius: number;
  readonly shape: Item;

  constructor(type: ShapeType, options: DrawingOptions) {
    this.type = type;
    this.radius = options.radius;

    const id = `shape:${type}-${options.radius}`;
    this.shape = new Item('path', {
      id,
      d: draw(type, options),
      'fill-rule': 'evenodd',
      'stroke-width': 0.5,
      'vector-effect': 'non-scaling-stroke',
    });
  }

  get id() {
    return this.shape.attributes.id!;
  }
}

export class Shaft implements Rotor {
  readonly #scene: Scene;
  readonly #back: Transformable;
  readonly #base: Transformable;
  readonly #shaft: Transformable;

  // Rotor
  state: RotorState = 'ok';
  readonly #type: RotorType;
  #speed = 0;
  #actor?: Actor;

  constructor(type: RotorType, scene: Scene, back: Item, base: Item, shaft: Item, index: number) {
    this.#type = type;
    this.#scene = scene;
    this.#back = useT(back, { id: `ref:shaft-back:${index}`, class: `shaft-back ${type}` });
    if (type !== 'source') {
      this.#back.attributes.class += ' unpowered';
    }
    this.#base = useT(base, { id: `ref:shaft-base:${index}`, class: `shaft-base` });
    this.#shaft = useT(shaft, { id: `ref:shaft:${index}`, class: `shaft ${type}` });
  }

  get position() {
    return this.#shaft.position;
  }

  set position(value) {
    this.#back.position = this.#base.position = this.#shaft.position = value;
  }

  get rotation() {
    return this.#shaft.rotation;
  }

  set rotation(value) {
    this.#shaft.rotation = value;
    this.#actor && (this.#actor.rotation = value);
  }

  // Rotor
  get type() {
    return this.#type;
  }

  get speed() {
    return this.#speed;
  }

  set speed(value) {
    if ((this.#speed !== 0) !== (value !== 0)) {
      const a = this.#back.attributes;
      if (value !== 0) {
        a.class = changeClasses(a.class!, { add: ['powered'], remove: ['unpowered'] });
      } else {
        a.class = changeClasses(a.class!, { add: ['unpowered'], remove: ['powered'] });
      }
    }
    this.#speed = value;
  }

  get actor() {
    return this.#actor;
  }

  // shaft leads, gear follows
  set actor(value) {
    const prev = this.#actor;
    if (prev === value) {
      if (prev) {
        prev.position = this.position;
        this.rotation = prev.rotation;
      }
      return;
    }

    this.#actor = value;

    if (prev && prev.rotor === this) {
      prev.rotor = undefined;
    }

    if (value && value.rotor !== this) {
      value.rotor = this;
      value.position = this.position;
      this.rotation = value.rotation;
    }
  }

  addToScene() {
    this.#scene.addDefs(this.#back, this.#base, this.#shaft);
    this.#scene.addToGround(use(this.#back));
    this.#scene.addToGround(use(this.#base));
    this.#scene.addToGround(use(this.#shaft), false);
  }

  removeFromScene() {
    [this.#back, this.#base, this.#shaft].forEach((item) => {
      this.#scene.removeRefs(item.attributes.href!);
      this.#scene.removeDef(item.attributes.id!);
    });
  }
}

export class Gear implements Actor {
  readonly #scene: Scene;
  #refs: Transformable[];
  #visuals: Item[];

  // Actor
  #radii: [number, number];
  #types: [ShapeType, ShapeType];
  #rotor?: Rotor;

  defaultPosition = new bi.Vec();

  constructor(
    scene: Scene,
    lower: Shape,
    upper: Shape,
    lowerFill: string,
    upperFill: string,
    index: number,
  ) {
    this.#scene = scene;

    this.#refs = [
      useT(lower.shape, { id: `ref:${lower.type}:${index}:0` }),
      useT(upper.shape, { id: `ref:${upper.type}:${index}:1` }),
    ];

    this.#visuals = [
      use(this.#refs[0], { class: `${lower.type} ${lowerFill}` }),
      use(this.#refs[1], { class: `${upper.type} ${upperFill}` }),
    ];

    this.#radii = [lower.radius, upper.radius];
    this.#types = [lower.type, upper.type];
  }

  get radii() {
    return this.#radii;
  }

  get types() {
    return this.#types;
  }

  get position() {
    return this.#refs[0].position;
  }

  set position(value) {
    this.#refs.forEach((ref) => (ref.position = value));
  }

  get rotation() {
    return this.#refs[0].rotation;
  }

  set rotation(value) {
    this.#refs.forEach((ref) => (ref.rotation = value));
  }

  get rotor() {
    return this.#rotor;
  }

  // shaft leads, gear follows
  set rotor(value) {
    const prev = this.#rotor;
    if (prev === value) {
      if (prev) {
        this.position = prev.position;
      }
      return;
    }

    this.#rotor = value;

    if (prev && prev.actor === this) {
      prev.actor = undefined;
    }

    if (value && value.actor !== this) {
      value.actor = this;
    }
  }

  select() {
    this.#visuals.forEach((visual) => {
      if (!visual.attributes.class!.includes('selected')) {
        visual.attributes.class += ' selected';
      }
    });
  }

  unselect() {
    this.#visuals.forEach((visual) => {
      if (visual.attributes.class!.includes('selected')) {
        visual.attributes.class = visual.attributes
          .class!.split(' ')
          .filter((c) => c !== 'selected')
          .join(' ');
      }
    });
  }

  addToScene() {
    this.#scene.addDefs(...this.#refs);
    this.#addLayers();
  }

  removeFromScene() {
    this.#refs.forEach((ref) => {
      this.#scene.removeRefs(`#${ref.attributes.id}`);
      this.#scene.removeDef(ref.attributes.id!);
    });
  }

  moveToTop() {
    this.#visuals.forEach((visual) => (visual.index = -1));
  }

  flip() {
    this.#refs.forEach((ref) => this.#scene.removeRefs(`#${ref.attributes.id}`));
    this.#refs = [this.#refs[1], this.#refs[0]];
    this.#radii = [this.#radii[1], this.#radii[0]];
    this.#types = [this.#types[1], this.#types[0]];
    this.#visuals = [this.#visuals[1], this.#visuals[0]];

    this.#addLayers();
  }

  #addLayers() {
    for (let i = 0; i < 2; ++i) {
      this.#scene.addToLayer(this.#visuals[i], i + 1);
    }
  }
}
