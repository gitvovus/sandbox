import { Item } from '@/lib/reactive';
import { Vec, distance } from '@/lib/bi';
import { Disposable, Mouse, clamp, onElementEvent, time } from '@/lib/std';
import { Animation } from '@/lib/animation';
import { drawBase, drawShaft } from '@/modules/gear-box/drawings';
import { Gear, Shaft, Shape, type RotorType } from '@/modules/gear-box/shapes';
import { Scene } from '@/modules/gear-box/scene';
import { Solver } from '@/modules/gear-box/solver';
import { Camera } from '@/modules/svg/camera';
import { Controller, Gesture } from '@/modules/svg/controller';
import { prettyGrid } from '@/modules/svg/utils';
import { type IViewModel } from '@/modules/view-model';
import { levels, type LevelData } from '@/modules/gear-box/levels';

export class GearBoxModel extends Disposable implements IViewModel {
  readonly component = 'gear-box-view';
  readonly key = Symbol();

  readonly #scene = new Scene('gb', 36.8, 36.8, 3, 0.25, true);
  readonly #camera = new Camera({ scale: new Vec(1, -1) });
  readonly #controller = new Controller(this.#scene.root, this.#scene.content, this.#camera, {
    minZoom: 0.5,
    maxZoom: 2,
  });

  #level = 0;
  readonly #shafts: Shaft[] = [];
  readonly #gears: Gear[] = [];

  readonly #shaftBack = new Item('circle', {
    id: 'shaft-back',
    r: 3.5,
  });
  readonly #shaftBase = new Item('path', {
    id: 'shaft-base',
    d: drawBase(),
    stroke: 'black',
    'stroke-width': 0.25,
    'vector-effect': 'non-scaling-stroke',
  });
  readonly #shaftShape = new Item('path', {
    id: 'shaft',
    d: drawShaft(),
  });
  readonly #stubShapes = new Map<number, Shape>();
  readonly #gearShapes = new Map<number, Shape>();

  readonly #solver = new Solver();

  #speed = 0;
  #maxSpeed = 0.75;
  #acceleration = 0;
  #maxAcceleration = this.#maxSpeed;

  #rotationAnimation = new Animation();

  #swayStart = 0;
  #swayAcceleration = 0;
  #swayAnimation = new Animation();

  #gesture = Gesture.NONE;
  #pickedGear!: Gear;
  #pickedPoint!: Vec;
  #pickedPosition!: Vec;

  #selected?: Gear;

  constructor() {
    super();
    this.#controller.resize(this.#scene.width, this.#scene.height);
    this.#createShapes();
    this.#createStatic();
    this.#load(levels[this.#level]);
  }

  get root() {
    return this.#scene.root;
  }

  mount(element: HTMLElement) {
    this.add(
      onElementEvent(element, 'pointerdown', this.#pick),
      onElementEvent(element, 'pointermove', this.#drag),
      onElementEvent(element, 'pointerup', this.#drop),
      () => this.#rotationAnimation.stop(),
      () => this.#swayAnimation.stop(),
      () => this.#controller.dispose(),
    );
    this.#controller.mount(element);
    this.check();
  }

  unmount() {
    this.dispose();
  }

  reset() {
    this.#reset(levels[this.#level]);
  }

  solve() {
    this.#solver.clear();
    this.#shafts.forEach((shaft) => this.#solver.addRotor(shaft));

    let ok = true;
    this.#solver.solve((failure) => {
      ok = false;
      // console.log('check failed:', failure.type);
    });
  }

  check() {
    this.solve();
    this.sway();
  }

  start() {
    this.#acceleration = this.#maxAcceleration;
    this.#rotationAnimation.start(this.#rotationFrame);
  }

  stop() {
    this.#acceleration = -this.#maxAcceleration;
  }

  sway() {
    this.#swayStart = time();
    this.#swayAcceleration = -this.#maxAcceleration;
    this.#swayAnimation.start(this.#swayFrame);
  }

  #rotate(delta: number) {
    this.#shafts.forEach((shaft) => {
      const angle = delta * shaft.speed;
      shaft.rotation += angle;
    });
  }

  readonly #rotationFrame = (dt: number) => {
    this.#speed = clamp(this.#speed + dt * this.#acceleration, -this.#maxSpeed, this.#maxSpeed);
    this.#rotate(dt * this.#speed);
    if (this.#acceleration < 0 && this.#speed < 0) {
      this.#rotationAnimation.stop();
      if (!this.#swayAnimation.isActive()) {
        this.#speed = 0;
      }
    }
  };

  readonly #swayFrame = (dt: number) => {
    this.#speed = clamp(this.#speed + dt * this.#swayAcceleration, -this.#maxSpeed, this.#maxSpeed);
    this.#rotate(dt * this.#speed);
    const now = time() - this.#swayStart;
    if (now > 0.2) {
      this.#swayAcceleration = this.#maxAcceleration;
    }
    if (now > 0.6) {
      this.#swayAcceleration = -this.#maxAcceleration;
    }
    if (now > 1) {
      this.#swayAnimation.stop();
      if (!this.#rotationAnimation.isActive()) {
        this.#speed = 0;
      }
    }
  };

  #createStatic() {
    this.#scene.background.add(
      prettyGrid(this.#scene.width / 2, this.#scene.width / 4, 1, 1, '#00000010'),
      prettyGrid(this.#scene.width / 2, this.#scene.width / 4, 10, 1, '#00000040'),
    );
  }

  #createShapes() {
    [2, 3, 4, 5].forEach((i) => {
      this.#stubShapes.set(
        i,
        new Shape('stub', {
          radius: i,
          thickness: 0.3,
          offset: -Math.PI / 10,
          spokeThickness: 0.25,
          spokes: 5,
        }),
      );
    });

    [
      new Shape('gear', { radius: 2, innerRadius: 0.9, offset: 0, spokes: 4 }),
      new Shape('gear', { radius: 3, innerRadius: 0.84, offset: Math.PI / 6, spokes: 3 }),
      new Shape('gear', { radius: 4, innerRadius: 0.78, offset: Math.PI / 4, spokes: 4 }),
      new Shape('gear', { radius: 5, innerRadius: 0.72, offset: Math.PI / 10, spokes: 5 }),
    ].forEach((item) => this.#gearShapes.set(item.radius, item));

    this.#scene.addDefs(this.#shaftBack, this.#shaftBase, this.#shaftShape);
    this.#stubShapes.forEach((item) => this.#scene.addDefs(item.shape));
    this.#gearShapes.forEach((item) => this.#scene.addDefs(item.shape));

    [
      ['powered', '#00ff00'],
      ['unpowered', '#c0c000'],
      ['unpowered-destination', '#ff0000'],
    ].forEach(([name, fill]) => {
      const gradient = new Item('radialGradient', { id: `shaft-back-${name}` });
      gradient.add(
        new Item('stop', { offset: 0.25, 'stop-color': `${fill}40` }),
        new Item('stop', { offset: 1, 'stop-color': `${fill}00` }),
      );
      this.#scene.addDefs(gradient);
    });
  }

  #clear() {
    this.#shafts.forEach((shaft) => shaft.removeFromScene());
    this.#shafts.length = 0;
    this.#gears.forEach((gear) => gear.removeFromScene());
    this.#gears.length = 0;
  }

  #reset(level: LevelData) {
    this.#gears.forEach((gear) => {
      gear.rotor = undefined;
      gear.position = gear.defaultPosition;
    });
    level.connections.forEach(({ shaft, gear }) => (this.#shafts[shaft].actor = this.#gears[gear]));
    this.check();
  }

  #load(level: LevelData) {
    this.#clear();
    level.shafts.forEach(({ type, position }, i) => this.#addShaft(type, i, position));
    level.gears.forEach((gear, i) => {
      const position = gear.position;
      const types = [gear.shapes[0].type, gear.shapes[1].type];
      const radii = [gear.shapes[0].radius, gear.shapes[1].radius];
      const fills = [gear.shapes[0].fill, gear.shapes[1].fill];
      const shapes = [
        (types[0] === 'gear' ? this.#gearShapes : this.#stubShapes).get(radii[0])!,
        (types[1] === 'gear' ? this.#gearShapes : this.#stubShapes).get(radii[1])!,
      ];
      this.#addGear(i, shapes[0], shapes[1], fills[0], fills[1], position);
    });
    this.#reset(level);
  }

  #addShaft(type: RotorType, index: number, position: Vec) {
    const shaft = new Shaft(
      type,
      this.#scene,
      this.#shaftBack,
      this.#shaftBase,
      this.#shaftShape,
      index,
    );
    shaft.position = position;
    this.#shafts.push(shaft);
    shaft.addToScene();
  }

  #addGear(
    index: number,
    lower: Shape,
    upper: Shape,
    lowerClass: string,
    upperClass: string,
    position: Vec,
  ) {
    const gear = new Gear(this.#scene, lower, upper, lowerClass, upperClass, index);
    gear.position = gear.defaultPosition = position;
    this.#gears.push(gear);
    gear.addToScene();
  }

  #select(gear?: Gear) {
    if (this.#selected === gear) return;
    this.#unselect();
    this.#selected = gear;
    this.#selected?.select();
  }

  #unselect() {
    this.#selected?.unselect();
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

  #findShaft(position: Vec, catchDistance: number) {
    let found: Shaft | undefined;
    let min = catchDistance;
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

    gear.moveToTop();

    if (e.button === Mouse.RIGHT) {
      gear.flip();
      if (gear.rotor) this.check();
      return;
    }

    this.#gesture = Gesture.DRAG;
    (e.currentTarget as Element).setPointerCapture(e.pointerId);

    this.#pickedGear = gear;
    this.#pickedPosition = gear.position;
    this.#pickedPoint = this.#camera.transform.transform(this.#controller.toCamera(e));

    this.#select(this.#pickedGear);
  };

  readonly #drag = (e: PointerEvent) => {
    if (this.#gesture !== Gesture.DRAG) {
      this.#select(this.#findGear(e));
      return;
    }

    const catchDistance = 1;

    const point = this.#camera.transform.transform(this.#controller.toCamera(e));
    const delta = new Vec(point.x - this.#pickedPoint.x, point.y - this.#pickedPoint.y);
    const position = new Vec(this.#pickedPosition.x + delta.x, this.#pickedPosition.y + delta.y);
    const shaft = this.#findShaft(position, catchDistance);

    if (shaft && shaft === this.#pickedGear.rotor) return;

    if (shaft && !shaft.actor) {
      shaft.actor = this.#pickedGear;
      this.solve();
      return;
    }

    this.#pickedGear.rotor = undefined;
    this.#pickedGear.position = position;
  };

  readonly #drop = (e: PointerEvent) => {
    if (this.#gesture !== Gesture.DRAG) return;

    this.#gesture = Gesture.NONE;
    (e.currentTarget as Element).releasePointerCapture(e.pointerId);
    if (!this.#pickedGear.rotor) {
      this.#pickedGear.position = this.#pickedGear.defaultPosition;
    }
    this.check();
  };
}
