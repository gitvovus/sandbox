import * as svg from '@/lib/svg';
import { type Attributes, Item } from '@/lib/reactive';
import { type Scene } from '@/modules/gear-box/scene';
import { draw, type DrawingOptions } from '@/modules/gear-box/drawings';
import { Transformable } from '@/modules/svg/transformable';

export type ShapeType = 'gear' | 'stub';

export type RotorType = 'source' | 'mediator' | 'destination';

export interface Actor {
  readonly radii: [number, number];
  readonly types: [ShapeType, ShapeType];
  position: svg.Vector2;
  rotation: number;
  rotor?: Rotor;
}

export interface Rotor {
  readonly type: RotorType;
  readonly position: svg.Vector2;
  rotation: number;
  speed: number;
  actor?: Actor;
}

function use(item: Item, attributes?: Attributes) {
  return new Item('use', { href: `#${item.attributes.id}`, ...attributes });
}

function useT(item: Item, attributes?: Attributes) {
  return new Transformable('use', { href: `#${item.attributes.id}`, ...attributes });
}

function changeClasses(classes: string, { add = [], remove = [] }: { add?: string[]; remove?: string[] }) {
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
    this.shape = new Item('path', { id, d: draw(type, options), 'fill-rule': 'evenodd' });
  }

  get id() {
    return this.shape.attributes.id!;
  }
}

export class Shaft implements Rotor {
  readonly #scene: Scene;
  readonly #base: Transformable;
  readonly #shaft: Transformable;

  // Rotor
  readonly #type: RotorType;
  #speed = 0;
  #actor?: Actor;

  constructor(type: RotorType, scene: Scene, base: Item, shaft: Item, index: number) {
    this.#type = type;
    this.#scene = scene;
    this.#base = useT(base, { id: `ref:shaft-base:${index}`, class: `shaft-base ${type}` });
    this.#shaft = useT(shaft, { id: `ref:shaft:${index}`, class: `shaft ${type}` });
  }

  addToScene() {
    this.#scene.addDefs(this.#base, this.#shaft);
    this.#scene.addToGround(use(this.#base));
    this.#scene.addToGround(use(this.#shaft), false);
  }

  removeFromScene() {
    [this.#base, this.#shaft].forEach((item) => {
      this.#scene.remove(item.attributes.href!);
      this.#scene.removeDef(item.attributes.id!);
    });
  }

  get position() {
    return this.#shaft.position;
  }

  set position(value) {
    this.#base.position = this.#shaft.position = value;
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
      const a = this.#base.attributes;
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
    }
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

  constructor(scene: Scene, lower: Shape, upper: Shape, lowerFill: string, upperFill: string, index: number) {
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
      this.#scene.remove(`#${ref.attributes.id}`);
      this.#scene.removeDef(ref.attributes.id!);
    });
  }

  flip() {
    this.#refs.forEach((ref) => this.#scene.remove(`#${ref.attributes.id}`));
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

  get radii() {
    return this.#radii;
  }

  get types() {
    return this.#types;
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
}
