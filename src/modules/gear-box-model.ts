import { type IViewModel } from '@/modules/view-model';
import { Item, type Attributes } from '@/lib/svg';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { Transformable } from '@/modules/svg/transformable';
import {
  gearData,
  gearShape,
  shaftShape,
  stubShape,
  type GearOptions,
  shaftBaseShape,
} from '@/modules/gear-box/shapes';
import { Scene } from '@/modules/gear-box/scene';
import { elementOffset, onAnimationFrame } from '@/lib/utils';
import { Disposable, Vector2, mod, clamp } from '@/lib/std';
import {
  GearType,
  Graph,
  type IActor,
  type IVertex,
  VertexType,
  failureType,
} from '@/modules/gear-box/graph';

function use(item: Item, attributes?: Attributes) {
  return new Item('use', { href: `#${item.attributes.id}`, ...attributes });
}

function useT(item: Item, attributes?: Attributes) {
  return new Transformable('use', { href: `#${item.attributes.id}`, ...attributes });
}

function time() {
  return Date.now() * 0.001;
}

class Shaft implements IVertex {
  readonly #scene: Scene;
  readonly #base: Transformable;
  readonly #shaft: Transformable;

  // IVertex
  #type = VertexType.NORMAL;
  #speed = 0;
  #actor?: IActor;

  constructor(scene: Scene, baseShape: Item, shaftShape: Item, index: number) {
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

  // IVertex
  get type() {
    return this.#type;
  }

  set type(value) {
    this.#type = value;
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
  }
}

function gearType(type: GearType) {
  return type === GearType.GEAR ? 'gear' : 'stub';
}

class GearShape {
  readonly shape: Item;
  readonly radius: number;
  readonly type: GearType;

  constructor(gearOptions: GearOptions, type: GearType = GearType.GEAR) {
    const data = gearData(gearOptions);
    const id = `shape:${gearType(type)}-${data.radius}`;
    this.shape = new Item('path', {
      id,
      d: type === GearType.GEAR ? gearShape(data) : stubShape(data),
      'fill-rule': 'evenodd',
    });
    this.radius = data.radius;
    this.type = type;
  }

  get id() {
    return this.shape.attributes.id!;
  }
}

class GearBlock implements IActor {
  readonly #scene: Scene;
  #shapes: GearShape[];
  #gears: Transformable[];
  #fills: string[];

  // IActor
  #r: [number, number];
  #t: [GearType, GearType] = [GearType.STUB, GearType.STUB];

  constructor(
    scene: Scene,
    lower: GearShape,
    upper: GearShape,
    lowerFill: string,
    upperFill: string,
    index: number
  ) {
    this.#scene = scene;
    this.#shapes = [lower, upper];
    this.#fills = [lowerFill, upperFill];
    this.#gears = [
      useT(lower.shape, { id: `ref:${gearType(lower.type)}:${index}:0` }),
      useT(upper.shape, { id: `ref:${gearType(upper.type)}:${index}:1` }),
    ];

    this.#r = [lower.radius, upper.radius];
    this.#t = [lower.type, upper.type];
  }

  get position() {
    return this.#gears[0].position;
  }

  set position(value) {
    this.#gears.forEach(gear => gear.position = value);
  }

  get rotation() {
    return this.#gears[0].rotation;
  }

  set rotation(value) {
    this.#gears.forEach(gear => gear.rotation = value);
  }

  addToScene() {
    this.#scene.addDefs(...this.#gears);
    this.#addLayers();
  }

  removeFromScene() {
    this.#gears.forEach((gear) => {
      this.#scene.remove(`#${gear.attributes.id}`);
      this.#scene.removeDef(gear.attributes.id!);
    });
  }

  flip() {
    this.#gears.forEach((gear) => this.#scene.remove(`#${gear.attributes.id}`));
    this.#shapes = [this.#shapes[1], this.#shapes[0]];
    this.#gears = [this.#gears[1], this.#gears[0]];
    this.#fills = [this.#fills[1], this.#fills[0]];
    this.#addLayers();

    this.#r = [this.#r[1], this.#r[0]];
    this.#t = [this.#t[1], this.#t[0]];
  }

  #addLayers() {
    for (let i = 0; i < 2; ++i) {
      this.#scene.addToLayer(
        use(this.#gears[i], { class: `${gearType(this.#shapes[i].type)} ${this.#fills[i]}` }),
        i + 1
      );
    }
  }

  get r() {
    return this.#r;
  }

  get t() {
    return this.#t;
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

  stop () {
    this.#stopAnimation();
    this.#stopAnimation = this.#doNothing;
    this.#frameCallback = this.#emptyCallback;
  }

  #frame = () => {
    const now = time();
    const dt = now - this.#start;
    this.#start = now;
    this.#frameCallback(dt);
  }
}

export class GearBoxModel extends Disposable implements IViewModel {
  readonly component = 'gear-box-view';
  readonly key = Symbol();

  #element?: HTMLElement;

  readonly #scene = new Scene('gb:', 24, 24, 3, 0.2);
  readonly #camera = new Camera({ scale: new Vector2(1, -1) });
  readonly #controller = new Controller(this.#scene.root, this.#scene.content, this.#camera);

  readonly #shafts: Shaft[] = [];
  readonly #gears: GearBlock[] = [];

  readonly #shaftShape = new Item('path', { id: 'shaft', class: 'shaft fill-0', d: shaftShape() });
  readonly #shaftBaseShape = new Item('path', {
    id: 'shaft-base',
    class: 'shaft-base',
    d: shaftBaseShape(),
  });
  readonly #stubShapes = new Map<number, GearShape>();
  readonly #gearShapes = new Map<number, GearShape>();

  readonly #graph = new Graph();

  #speed = 0;
  #maxSpeed = 0.5;
  #acceleration = 0;
  #maxAcceleration = 1;

  #rotationAnimation = new Animation();

  #swayStart = 0;
  #swayAcceleration = 0;
  #swayAnimation = new Animation();

  #pickableGears: Transformable[] = [];

  constructor() {
    super();
    this.#controller.setReferenceSize(this.#scene.width, this.#scene.height);

    this.#createShapes();
    this.#createStatic();
    this.#createSample();

    this.addDisposers(
      () => {
        this.#pickableGears.forEach((item) => item.dispose());
        this.#rotationAnimation.stop();
        this.#swayAnimation.stop();
      },
    );
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
    if (now > 0.70) {
      this.#swayAnimation.stop();
      if (!this.#rotationAnimation.isActive()) {
        this.#speed = 0;
      }
    }
  }

  #rotate(k: number) {
    this.#shafts.forEach(shaft => {
      const angle = k * shaft.speed;
      shaft.rotation += angle;
    });
  }

  check() {
    this.#graph.vertices.length = 0;
    this.#shafts.forEach((shaft) => this.#graph.addVertex(shaft));

    let ok = true;
    this.#graph.solve((failure) => {
      ok = false;
      console.log('check failed:', failureType(failure.type));
      console.log(this.#graph);
    });
    this.sway();
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#controller.mount(element);
  }

  unmount() {
    this.#element = undefined;
    this.#controller.unmount();

    delete (window as any).graph;
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
        new GearShape(
          {
            radius: i,
            thickness: 0.2 + 0.01 * i,
            spokeThickness: 0.2 + 0.01 * i,
            spokes: 6,
          },
          GearType.STUB
        )
      );
    });

    [
      new GearShape({ radius: 2, innerRadius: 0.92, offset: 0, spokes: 4 }),
      new GearShape({ radius: 3, innerRadius: 0.84, offset: Math.PI / 6, spokes: 3 }),
      new GearShape({ radius: 4, innerRadius: 0.76, offset: Math.PI / 4, spokes: 4 }),
      new GearShape({ radius: 5, innerRadius: 0.68, offset: Math.PI / 10, spokes: 5 }),
    ].forEach((item) => this.#gearShapes.set(item.radius, item));

    this.#scene.addDefs(this.#shaftBaseShape, this.#shaftShape);
    this.#stubShapes.forEach((item) => this.#scene.addDefs(item.shape));
    this.#gearShapes.forEach((item) => this.#scene.addDefs(item.shape));
  }

  #createSample() {
    const s = (i: number) => this.#stubShapes.get(i)!;
    const g = (i: number) => this.#gearShapes.get(i)!;

    [
      { type: VertexType.SOURCE, x: -2, y: 4 },
      { type: VertexType.NORMAL, x: -2, y: -4 },
      { type: VertexType.DESTINATION, x: 5, y: -4 },
      { type: VertexType.DESTINATION, x: 5, y: 4 },
    ].forEach(({ type, x, y }, i) => {
      this.#addShaft(i, x, y);
      this.#shafts[i].type = type;
      this.#graph.addVertex(this.#shafts[i]);
    });

    this.#shafts[0].speed = 1;

    [
      { b: [g(5), s(3)], f: ['fill-5', 'fill-3'] },
      { b: [g(3), g(5)], f: ['fill-2', 'fill-4'] },
      { b: [g(3), g(2)], f: ['fill-1', 'fill-3'] },
      { b: [g(2), g(4)], f: ['fill-4', 'fill-1'] },
    ].forEach(({ b, f }, i) => {
      this.#addGearBlock(i, b[0], b[1], f[0], f[1]);
    });

    for (let i = 0; i < this.#shafts.length; ++i) {
      this.#gears[i].position = this.#shafts[i].position; // TODO: make it automatic
      this.#shafts[i].actor = this.#gears[i];
    }

    this.check();
  }

  #addShaft(index: number, x: number, y: number) {
    const shaft = new Shaft(this.#scene, this.#shaftBaseShape, this.#shaftShape, index);
    this.#shafts.push(shaft);
    shaft.position = new Vector2(x, y);
    shaft.addToScene();
  }

  #addGearBlock(
    index: number,
    lower: GearShape,
    upper: GearShape,
    lowerClass: string,
    upperClass: string,
  ) {
    const gear = new GearBlock(this.#scene, lower, upper, lowerClass, upperClass, index);
    this.#gears.push(gear);
    gear.addToScene();
  }
}
