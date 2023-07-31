import { Item } from '@/lib/reactive';
import { Vec, distance, length, normalize } from '@/lib/bi';
import { Disposable, Mouse, clamp, onElementEvent, time } from '@/lib/std';
import { Animation } from '@/lib/animation';
import { drawBase, drawShaft, grid } from '@/modules/gear-box/drawings';
import { Gear, Shaft, Shape, type RotorType } from '@/modules/gear-box/shapes';
import { Scene } from '@/modules/gear-box/scene';
import { Solver } from '@/modules/gear-box/solver';
import { InfoModel } from '@/modules/info-model';
import { Camera } from '@/modules/svg/camera';
import { Controller, Gesture } from '@/modules/svg/controller';
import { type IViewModel } from '@/modules/view-model';

class Level {
  rotors: { type: RotorType; position: Vec }[] = [{ type: 'source', position: new Vec(0, 0) }];

  add(position: Vec, type: RotorType = 'mediator') {
    this.rotors.push({ type, position });
  }

  fromOne(a: Vec, direction: Vec, distance: number) {
    const d = normalize(direction);
    return new Vec(a.x + d.x * distance, a.y + d.y * distance);
  }

  fromTwo(a: Vec, b: Vec, da: number, db: number) {
    const ab = new Vec(b.x - a.x, b.y - a.y);
    const d = length(ab);
    const x = (d * d + da * da - db * db) / (2 * d);
    const y = Math.sqrt(da * da - x * x);

    const dx = new Vec((ab.x * x) / d, (ab.y * x) / d);
    const dy = new Vec((-ab.y * y) / d, (ab.x * y) / d);

    return new Vec(a.x + dx.x + dy.x, a.y + dx.y + dy.y);
  }
}

function sampleLevel() {
  const level = new Level();
}

export class GearBoxModel extends Disposable implements IViewModel {
  readonly component = 'gear-box-view';
  readonly key = Symbol();

  readonly #scene = new Scene('gb:', 24, 24, 3, 0.2, false);
  readonly #camera = new Camera({ scale: new Vec(1, -1) });
  readonly #controller = new Controller(this.#scene.root, this.#scene.content, this.#camera);

  readonly #shafts: Shaft[] = [];
  readonly #gears: Gear[] = [];

  readonly #shaftBackLight = new Item('circle', { id: 'shaft-back', r: 2.25 });
  readonly #shaftBaseShape = new Item('path', { id: 'shaft-base', d: drawBase() });
  readonly #shaftShape = new Item('path', { id: 'shaft', d: drawShaft() });
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
  #pickedPoint!: Vec;
  #pickedPosition!: Vec;

  #selected?: Gear;

  debug = new InfoModel();

  constructor() {
    super();
    this.#controller.resize(this.#scene.width, this.#scene.height);
    this.#createShapes();
    this.#createStatic();
    this.#createSample();
  }

  get root() {
    return this.#scene.root;
  }

  mount(element: HTMLElement) {
    this.addDisposers(
      onElementEvent(element, 'pointerdown', this.#pick),
      onElementEvent(element, 'pointermove', this.#drag),
      onElementEvent(element, 'pointerup', this.#drop),
      () => this.#rotationAnimation.stop(),
      () => this.#swayAnimation.stop(),
      () => this.#controller.dispose(),
    );
    this.#controller.mount(element);
  }

  unmount() {
    this.dispose();
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

  startRotation() {
    this.#acceleration = this.#maxAcceleration;
    this.#rotationAnimation.start(this.#rotationFrame);
  }

  stopRotation() {
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

  #createStatic() {
    this.#scene.background.add(grid(this.#scene.width, this.#scene.height, 7, 1, '#00000040'));
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

    this.#scene.addDefs(this.#shaftBackLight, this.#shaftBaseShape, this.#shaftShape);
    this.#stubShapes.forEach((item) => this.#scene.addDefs(item.shape));
    this.#gearShapes.forEach((item) => this.#scene.addDefs(item.shape));

    [
      ['powered', '#00ff00'],
      ['unpowered', '#c0c000'],
      ['unpowered-destination', '#ff0000'],
    ].forEach(([name, fill]) => {
      const gradient = new Item('radialGradient', { id: `shaft-back-${name}` });
      gradient.add(
        new Item('stop', { offset: 0.2, 'stop-color': `${fill}30` }),
        new Item('stop', { offset: 1, 'stop-color': `${fill}00` }),
      );
      this.#scene.addDefs(gradient);
    });
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
        ['fill-0', 'fill-1'],
      ],
      [
        [g(2), g(4)],
        ['fill-6', 'fill-1'],
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
    const shaft = new Shaft(type, this.#scene, this.#shaftBackLight, this.#shaftBaseShape, this.#shaftShape, index);
    shaft.position = new Vec(x, y);
    this.#shafts.push(shaft);
    shaft.addToScene();
  }

  #addGear(index: number, lower: Shape, upper: Shape, lowerClass: string, upperClass: string) {
    const gear = new Gear(this.#scene, lower, upper, lowerClass, upperClass, index);
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

  #findShaft(position: Vec, maxDistance: number) {
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

    const point = this.#camera.transform.transform(this.#controller.toCamera(e));
    const delta = new Vec(point.x - this.#pickedPoint.x, point.y - this.#pickedPoint.y);
    const position = new Vec(this.#pickedPosition.x + delta.x, this.#pickedPosition.y + delta.y);
    const shaft = this.#findShaft(position, 0.5);

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
    this.check();
  };
}
