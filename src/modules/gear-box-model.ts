import { type IViewModel } from '@/modules/view-model';
import { Item, type Attributes } from '@/lib/svg';
import { Camera } from '@/modules/svg/camera';
import { Controller, Gesture } from '@/modules/svg/controller';
import { Transformable } from '@/modules/svg/transformable';
import {
  gearData,
  gear,
  shaftBase,
  shaft,
  stub,
  type ShapeOptions,
  type ShapeType,
} from '@/modules/gear-box/shapes';
import { Scene } from '@/modules/gear-box/scene';
import { elementOffset, onAnimationFrame, onElementEvent } from '@/lib/utils';
import { Disposable, Vector2, mod, clamp, distance, squareLength, squareDistance } from '@/lib/std';
import { Solver, type Actor, type Rotor, type RotorType } from '@/modules/gear-box/solver';

function use(item: Item, attributes?: Attributes) {
  return new Item('use', { href: `#${item.attributes.id}`, ...attributes });
}

function useT(item: Item, attributes?: Attributes) {
  return new Transformable('use', { href: `#${item.attributes.id}`, ...attributes });
}

function time() {
  return Date.now() * 0.001;
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
    this.#base = useT(baseShape, { id: `ref:shaft-base:${index}` });
    this.#shaft = useT(shaftShape, { id: `ref:shaft:${index}` });
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
    this.#speed = value;
  }

  get actor() {
    return this.#actor;
  }

  set actor(value) {
    this.#actor = value;
    this.#actor && (this.#actor.position = this.position);
  }
}

class Shape {
  readonly shape: Item;
  readonly radius: number;
  readonly type: ShapeType;

  constructor(options: ShapeOptions, type: ShapeType = 'gear') {
    const data = gearData(options);
    const id = `shape:${type}-${data.radius}`;
    this.shape = new Item('path', {
      id,
      d: type === 'gear' ? gear(data) : stub(data),
      'fill-rule': 'evenodd',
    });
    this.radius = data.radius;
    this.type = type;
  }

  get id() {
    return this.shape.attributes.id!;
  }
}

class Gear implements Actor {
  readonly #scene: Scene;
  #refs: Transformable[];
  #visuals: Item[] = [];
  #fills: string[];

  // Actor
  #radii: [number, number];
  #types: [ShapeType, ShapeType];
  #rotor?: Rotor; 

  constructor(
    scene: Scene,
    lower: Shape,
    upper: Shape,
    lowerFill: string,
    upperFill: string,
    index: number
  ) {
    this.#scene = scene;
    this.#fills = [lowerFill, upperFill];

    this.#refs = [
      useT(lower.shape, { id: `ref:${lower.type}:${index}:0` }),
      useT(upper.shape, { id: `ref:${upper.type}:${index}:1` }),
    ];

    this.#visuals = [
      use(this.#refs[0], { class: `${lower.type} ${this.#fills[0]}` }),
      use(this.#refs[1], { class: `${upper.type} ${this.#fills[1]}` }),
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
    this.#fills = [this.#fills[1], this.#fills[0]];
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

  set rotor(value) {
    if (this.#rotor && this.#rotor !== value && this.#rotor.actor === this) {
      this.#rotor.actor = undefined;
    }
    this.#rotor = value;
    if (this.#rotor) {
      this.#rotor.actor = this;
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

  readonly #shaftShape = new Item('path', { id: 'shaft', class: 'shaft fill-0', d: shaft() });
  readonly #shaftBaseShape = new Item('path', {
    id: 'shaft-base',
    class: 'shaft-base',
    d: shaftBase(),
  });
  readonly #stubShapes = new Map<number, Shape>();
  readonly #gearShapes = new Map<number, Shape>();

  readonly #solver = new Solver();

  #speed = 0;
  #maxSpeed = 0.5;
  #acceleration = 0;
  #maxAcceleration = 1;

  #rotationAnimation = new Animation();

  #swayStart = 0;
  #swayAcceleration = 0;
  #swayAnimation = new Animation();

  #gesture = Gesture.NONE;
  #pickedGear!: Gear;
  #pickedShaft?: Shaft;
  #pickedPoint!: Vector2;
  #pickedPosition!: Vector2;
  #connectionTimer?: number = undefined;

  #selected?: Gear;

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
  }

  get root() {
    return this.#scene.root;
  }

  startRotation() {
    this.#acceleration = this.#maxAcceleration;
    this.#rotationAnimation.start(this.#rotationFrame);
  }

  stopRotation() {
    this.#acceleration = -this.#maxSpeed;
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

  #rotate(k: number) {
    this.#shafts.forEach((shaft) => {
      const angle = k * shaft.speed;
      shaft.rotation += angle;
    });
  }

  check() {
    this.#solver.rotors.length = 0;
    this.#shafts.forEach((shaft) => this.#solver.addRotor(shaft));

    let ok = true;
    this.#solver.solve((failure) => {
      ok = false;
      console.log('check failed:', failure.type);
      // console.log(this.#solver);
    });
    this.sway();
  }

  mount(element: HTMLElement) {
    this.addDisposers(
      onElementEvent(element, 'pointerdown', this.#pick),
      onElementEvent(element, 'pointermove', this.#drag),
      onElementEvent(element, 'pointerup', this.#drop),
      () => { this.#controller.dispose() },
    );
    this.#controller.mount(element);
  }

  unmount() {
    this.dispose();
  }

  #createStatic() {
    [-5, 0, 5].forEach((i) =>
      this.#scene.background.add(
        new Item('path', {
          d: `M-10 ${i}h20`,
          stroke: '#00000040',
          'stroke-width': 1,
          'vector-effect': 'non-scaling-stroke',
        }),
        new Item('path', {
          d: `M${i} -10v20`,
          stroke: '#00000040',
          'stroke-width': 1,
          'vector-effect': 'non-scaling-stroke',
        })
      )
    );
  }

  #createShapes() {
    [2, 3, 4, 5].forEach((i) => {
      this.#stubShapes.set(
        i,
        new Shape(
          {
            radius: i,
            thickness: 0.2 + 0.01 * i,
            spokeThickness: 0.2 + 0.01 * i,
            spokes: 6,
          },
          'stub'
        )
      );
    });

    [
      new Shape({ radius: 2, innerRadius: 0.92, offset: 0, spokes: 4 }),
      new Shape({ radius: 3, innerRadius: 0.84, offset: Math.PI / 6, spokes: 3 }),
      new Shape({ radius: 4, innerRadius: 0.76, offset: Math.PI / 4, spokes: 4 }),
      new Shape({ radius: 5, innerRadius: 0.68, offset: Math.PI / 10, spokes: 5 }),
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
        ['fill-1', 'fill-3'],
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

  #findShaft(position: Vector2, distance: number) {
    let shaft: Shaft | undefined = undefined;
    let min = distance + 1;
    for (let i = 0; i < this.#shafts.length; ++i) {
      const d = squareDistance(this.#shafts[i].position, position);
      if (d < min) {
        shaft = this.#shafts[i];
        min = d;
      }
    }
    return shaft;
  }

  readonly #pick = (e: PointerEvent) => {
    if (e.button !== 0 && e.button !== 2) return;

    const gear = this.#findGear(e);
    if (!gear) return;

    e.stopPropagation();
    e.stopImmediatePropagation();

    if (e.button === 2) {
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
  };

  readonly #drag = (e: PointerEvent) => {
    if (this.#gesture === Gesture.NONE) {
      this.#select(this.#findGear(e));
      return;
    }

    // drag
    const point = this.#camera.transform.transform(this.#controller.toCamera(e));
    const delta = new Vector2(point.x - this.#pickedPoint.x, point.y - this.#pickedPoint.y);
    const length = squareLength(delta);
    const position = new Vector2(this.#pickedPosition.x + delta.x, this.#pickedPosition.y + delta.y);
    const shaft = this.#findShaft(position, 0.25);

    if (shaft !== this.#pickedShaft) {
      this.#pickedShaft = shaft;
      this.#pickedGear!.rotor = shaft;
      this.check();
    } else if (!this.#pickedGear.rotor) {
      this.#pickedGear.position = position;
    }
  };

  readonly #drop = (e: PointerEvent) => {
    (e.currentTarget as Element).releasePointerCapture(e.pointerId);
    this.#gesture = Gesture.NONE;
    this.#connectionTimer = undefined;
    // this.#unselect();
  };
}
