import { type IViewModel } from '@/modules/view-model';
import { Item, type Attributes } from '@/lib/svg';
import { Camera } from '@/modules/svg/camera';
import { Controller, Gesture } from '@/modules/svg/controller';
import { Transformable } from '@/modules/svg/transformable';
import { gearData, gear, shaftBase, shaft, stub, type ShapeOptions, type ShapeType } from '@/modules/gear-box/shapes';
import { Scene } from '@/modules/gear-box/scene';
import { onAnimationFrame, onElementEvent } from '@/lib/utils';
import { Disposable, Mouse, Vector2, clamp, distance, time } from '@/lib/std';
import { Solver, type Actor, type Rotor, type RotorType } from '@/modules/gear-box/solver';
import { v0, v2 } from '@/lib/helpers';
import { InfoModel } from '@/modules/info-model';

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

class Shape {
  readonly type: ShapeType;
  readonly radius: number;
  readonly shape: Item;

  constructor(type: ShapeType, options: ShapeOptions) {
    const data = gearData(options);

    this.type = type;
    this.radius = data.radius;

    const id = `shape:${type}-${data.radius}`;
    this.shape = new Item('path', {
      id,
      d: type === 'gear' ? gear(data) : stub(data),
      'fill-rule': 'evenodd',
    });
  }

  get id() {
    return this.shape.attributes.id!;
  }
}

class Shaft implements Rotor {
  readonly #scene: Scene;
  readonly #base: Transformable;
  readonly #shaft: Transformable;

  // Rotor
  readonly #type: RotorType;
  #speed = 0;
  #actor?: Actor;

  constructor(type: RotorType, scene: Scene, baseShape: Item, shaftShape: Item, index: number) {
    this.#type = type;
    this.#scene = scene;
    this.#base = useT(baseShape, { id: `ref:shaft-base:${index}`, class: `shaft-base ${type}` });
    this.#shaft = useT(shaftShape, { id: `ref:shaft:${index}`, class: `shaft ${type}` });
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

class Gear implements Actor {
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

class Animation {
  #doNothing = () => {};
  #stopAnimation = this.#doNothing;

  #emptyCallback = (dt: number) => {};
  #frameCallback = this.#emptyCallback;

  #start = 0;

  isActive() {
    return this.#frameCallback !== this.#emptyCallback;
  }

  start(callback: (dt: number) => void) {
    this.#start = time();
    this.stop();
    this.#frameCallback = callback;
    this.#stopAnimation = onAnimationFrame(this.#frame);
  }

  stop() {
    this.#stopAnimation();
    this.#stopAnimation = this.#doNothing;
    this.#frameCallback = this.#emptyCallback;
  }

  #frame = () => {
    const now = time();
    const dt = now - this.#start;
    this.#start = now;
    this.#frameCallback(dt);
  };
}

export class GearBoxModel extends Disposable implements IViewModel {
  readonly component = 'gear-box-view';
  readonly key = Symbol();

  readonly #scene = new Scene('gb:', 24, 24, 3, 0.2);
  readonly #camera = new Camera({ scale: new Vector2(1, -1) });
  readonly #controller = new Controller(this.#scene.root, this.#scene.content, this.#camera);

  readonly #shafts: Shaft[] = [];
  readonly #gears: Gear[] = [];

  readonly #shaftShape = new Item('path', { id: 'shaft', d: shaft() });
  readonly #shaftBaseShape = new Item('path', { id: 'shaft-base', d: shaftBase() });
  readonly #stubShapes = new Map<number, Shape>();
  readonly #gearShapes = new Map<number, Shape>();

  readonly #solver = new Solver();

  #speed = 0;
  #maxSpeed = 0.75;
  #acceleration = 0;
  #maxAcceleration = 2 * this.#maxSpeed;

  #rotationAnimation = new Animation();

  #swayStart = 0;
  #swayAcceleration = 0;
  #swayAnimation = new Animation();

  #gesture = Gesture.NONE;
  #pickedGear!: Gear;
  #pickedShaft?: Shaft;
  #pickedPoint!: Vector2;
  #pickedPosition!: Vector2;

  #selected?: Gear;

  info = new InfoModel();

  constructor() {
    super();
    this.#controller.setReferenceSize(this.#scene.width, this.#scene.height);

    this.#createShapes();
    this.#createStatic();
    this.#createSample();

    this.addDisposers(() => {
      this.#rotationAnimation.stop();
      this.#swayAnimation.stop();
    });

    this.info.data.ppt = '-';
    this.info.data.pos = '-';
    this.info.data.shf = '-';
  }

  get root() {
    return this.#scene.root;
  }

  startRotation() {
    this.#acceleration = this.#maxAcceleration;
    this.#rotationAnimation.start(this.#rotationFrame);
  }

  stopRotation() {
    this.#acceleration = -this.#maxAcceleration;
  }

  #rotationFrame = (dt: number) => {
    this.#speed = clamp(this.#speed + dt * this.#acceleration, -this.#maxSpeed, this.#maxSpeed);
    this.#rotate(dt * this.#speed);
    if (this.#acceleration < 0 && this.#speed < 0) {
      this.#rotationAnimation.stop();
      if (!this.#swayAnimation.isActive()) {
        this.#speed = 0;
      }
    }
  };

  #rotate(delta: number) {
    this.#shafts.forEach((shaft) => {
      const angle = delta * shaft.speed;
      shaft.rotation += angle;
    });
  }

  sway() {
    this.#swayStart = time();
    this.#swayAcceleration = -this.#maxAcceleration;
    this.#swayAnimation.start(this.#swayFrame);
  }

  #swayFrame = (dt: number) => {
    this.#speed = clamp(this.#speed + dt * this.#swayAcceleration, -this.#maxSpeed, this.#maxSpeed);
    this.#rotate(dt * this.#speed);
    const now = time() - this.#swayStart;
    if (now > 0.15) {
      this.#swayAcceleration = this.#maxAcceleration;
    }
    if (now > 0.45) {
      this.#swayAcceleration = -this.#maxAcceleration;
    }
    if (now > 0.7) {
      this.#swayAnimation.stop();
      if (!this.#rotationAnimation.isActive()) {
        this.#speed = 0;
      }
    }
  };

  check() {
    this.#solver.clear();
    this.#shafts.forEach((shaft) => this.#solver.addRotor(shaft));

    let ok = true;
    this.#solver.solve((failure) => {
      ok = false;
      // console.log('check failed:', failure.type);
    });
    this.sway();
  }

  mount(element: HTMLElement) {
    this.addDisposers(
      onElementEvent(element, 'pointerdown', this.#pick),
      onElementEvent(element, 'pointermove', this.#drag),
      onElementEvent(element, 'pointerup', this.#drop),
      () => {
        this.#controller.dispose();
      },
    );
    this.#controller.mount(element);
  }

  unmount() {
    this.dispose();
  }

  #createStatic() {
    const background = new Item('g', { stroke: '#00000040', 'stroke-width': 1 });
    const g = 7;
    const w = this.#scene.width - 2;
    const x = -w / 2;
    const n = Math.floor(w / g / 2);
    for (let i = -n; i <= n; ++i) {
      background.add(
        new Item('path', { d: `M${x} ${i * g}h${w}`, 'vector-effect': 'non-scaling-stroke' }),
        new Item('path', { d: `M${i * g} ${x}v${w}`, 'vector-effect': 'non-scaling-stroke' }),
      );
    }
    this.#scene.background.add(background);
  }

  #createShapes() {
    [2, 3, 4, 5].forEach((i) => {
      this.#stubShapes.set(
        i,
        new Shape('stub', {
          radius: i,
          thickness: 0.2 + 0.01 * i,
          spokeThickness: 0.2 + 0.01 * i,
          spokes: 6,
        }),
      );
    });

    [
      new Shape('gear', { radius: 2, innerRadius: 0.9, offset: 0, spokes: 4 }),
      new Shape('gear', { radius: 3, innerRadius: 0.84, offset: Math.PI / 6, spokes: 3 }),
      new Shape('gear', { radius: 4, innerRadius: 0.78, offset: Math.PI / 4, spokes: 4 }),
      new Shape('gear', { radius: 5, innerRadius: 0.72, offset: Math.PI / 10, spokes: 5 }),
    ].forEach((item) => this.#gearShapes.set(item.radius, item));

    this.#scene.addDefs(this.#shaftBaseShape, this.#shaftShape);
    this.#stubShapes.forEach((item) => this.#scene.addDefs(item.shape));
    this.#gearShapes.forEach((item) => this.#scene.addDefs(item.shape));
  }

  #createSample() {
    const s = (i: number) => this.#stubShapes.get(i)!;
    const g = (i: number) => this.#gearShapes.get(i)!;

    (<[RotorType, number, number][]>[
      ['source', -2, 4],
      ['mediator', -2, -4],
      ['destination', 5, -4],
      ['destination', 5, 4],
    ]).forEach(([type, x, y], i) => {
      this.#addShaft(type, i, x, y);
      this.#solver.addRotor(this.#shafts[i]);
    });

    this.#shafts[0].speed = 1;

    (<[[Shape, Shape], [string, string]][]>[
      [
        [g(5), s(3)],
        ['fill-5', 'fill-3'],
      ],
      [
        [g(3), g(5)],
        ['fill-2', 'fill-4'],
      ],
      [
        [g(3), g(2)],
        ['fill-0', 'fill-3'],
      ],
      [
        [g(2), g(4)],
        ['fill-4', 'fill-1'],
      ],
    ]).forEach(([shape, fill], i) => {
      this.#addGear(i, shape[0], shape[1], fill[0], fill[1]);
    });

    for (let i = 0; i < this.#shafts.length; ++i) {
      this.#gears[i].position = this.#shafts[i].position; // TODO: make it automatic
      this.#shafts[i].actor = this.#gears[i];
    }

    this.check();
  }

  #addShaft(type: RotorType, index: number, x: number, y: number) {
    const shaft = new Shaft(type, this.#scene, this.#shaftBaseShape, this.#shaftShape, index);
    shaft.position = new Vector2(x, y);
    this.#shafts.push(shaft);
    shaft.addToScene();
  }

  #addGear(index: number, lower: Shape, upper: Shape, lowerClass: string, upperClass: string) {
    const gear = new Gear(this.#scene, lower, upper, lowerClass, upperClass, index);
    this.#gears.push(gear);
    gear.addToScene();
  }

  #select(gear?: Gear) {
    if (this.#selected === gear) {
      return;
    }
    this.#unselect();
    this.#selected = gear;
    this.#selected?.select();
  }

  #unselect() {
    if (this.#selected === undefined) {
      return;
    }
    this.#selected.unselect();
    this.#selected = undefined;
  }

  #findGear(e: PointerEvent) {
    const point = this.#camera.transform.transform(this.#controller.toCamera(e));
    const g: { gear: Gear; penetration: number }[] = [];
    this.#gears.forEach((gear) => {
      const d = distance(gear.position, point);
      if (d < gear.radii[0] || d < gear.radii[1]) {
        g.push({ gear, penetration: Math.max(gear.radii[0] - d, gear.radii[1] - d) });
      }
    });

    if (g.length > 0) {
      let index = 0;
      let max = g[0].penetration;
      for (let i = 1; i < g.length; ++i) {
        if (g[i].penetration > max) {
          index = i;
          max = g[i].penetration;
        }
      }
      return g[index].gear;
    }

    return undefined;
  }

  #findShaft(position: Vector2, maxDistance: number) {
    let found: Shaft | undefined;
    let min = maxDistance;
    this.#shafts.forEach((shaft) => {
      const d = distance(shaft.position, position);
      if (d < min) {
        found = shaft;
        min = d;
      }
    });
    return found;
  }

  readonly #pick = (e: PointerEvent) => {
    if (e.button !== Mouse.LEFT && e.button !== Mouse.RIGHT) return;

    const gear = this.#findGear(e);
    if (!gear) return;

    e.stopPropagation();
    e.stopImmediatePropagation();

    if (e.button === Mouse.RIGHT) {
      gear.flip();
      if (gear.rotor) this.check();
      return;
    }

    this.#gesture = Gesture.DRAG;
    (e.target as Element).setPointerCapture(e.pointerId);

    this.#pickedGear = gear;
    this.#pickedShaft = gear.rotor as Shaft;
    this.#pickedPosition = gear.position;
    this.#pickedPoint = this.#camera.transform.transform(this.#controller.toCamera(e));

    this.#select(this.#pickedGear);

    this.info.data.ppt = v0(this.#pickedPoint);
    this.info.data.pos = v2(this.#pickedPosition);
    this.info.data.shf = this.#pickedShaft ? v2(this.#pickedShaft.position) : '-';
  };

  readonly #drag = (e: PointerEvent) => {
    if (this.#gesture !== Gesture.DRAG) {
      this.#select(this.#findGear(e));
      return;
    }

    // drag
    const point = this.#camera.transform.transform(this.#controller.toCamera(e));
    const delta = new Vector2(point.x - this.#pickedPoint.x, point.y - this.#pickedPoint.y);
    const position = new Vector2(this.#pickedPosition.x + delta.x, this.#pickedPosition.y + delta.y);
    const shaft = this.#findShaft(position, 0.5);

    this.info.data.pos = v2(position);
    this.info.data.shf = shaft ? v2(shaft.position) : '-';

    if (shaft && shaft === this.#pickedGear.rotor) return;

    if (shaft && !shaft.actor) {
      // this.#currentShaft = shaft;
      shaft.actor = this.#pickedGear;
      return;
    }

    this.#pickedGear.rotor = undefined;
    this.#pickedGear.position = position;
  };

  readonly #drop = (e: PointerEvent) => {
    if (this.#gesture !== Gesture.DRAG) return;

    this.#gesture = Gesture.NONE;
    (e.target as Element).releasePointerCapture(e.pointerId);
    this.check();
  };
}
