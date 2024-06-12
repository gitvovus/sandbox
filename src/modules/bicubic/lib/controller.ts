import * as tri from 'three';
import * as std from '@/lib/std';

export type Config = {
  phi: number;
  theta: number;
  radius: number;
  lookAt: tri.Vector3;
  minRadius: number;
  maxRadius: number;
  movementSpeed: number;
  rotationSpeed: number;
};

const defaultConfig: Config = {
  phi: 0,
  theta: 0,
  radius: 6,
  lookAt: new tri.Vector3(0, 0, 0),
  minRadius: 2,
  maxRadius: 10,
  movementSpeed: 10,
  rotationSpeed: 1,
};

export class Controller implements std.IDisposable {
  #config = { ...defaultConfig };

  #element?: HTMLElement;
  #disposer = new std.Disposable();

  #minTheta = -1.5;
  #maxTheta = 1.5;
  #movement = 0;
  #phiRotation = 0;
  #thetaRotation = 0;

  #initializer: Config;
  #lastUpdate = std.time();
  #trackPointer = false;
  #pointer = { x: 0, y: 0 };

  constructor(options?: Partial<Config>) {
    Object.assign(this.#config, options);
    this.#initializer = { ...this.#config };
  }

  dispose() {
    this.#disposer.dispose();
  }

  update(camera: tri.Camera) {
    const time = std.time();
    const dt = time - this.#lastUpdate;
    this.#lastUpdate = time;

    this.#config.radius += dt * this.#movement * this.#config.movementSpeed;
    this.#config.phi += dt * this.#phiRotation * this.#config.rotationSpeed;
    this.#config.theta += dt * this.#thetaRotation * this.#config.rotationSpeed;

    this.#config.radius = std.clamp(
      this.#config.radius,
      this.#config.minRadius,
      this.#config.maxRadius,
    );
    this.#config.theta = std.clamp(this.#config.theta, this.#minTheta, this.#maxTheta);

    const x
      = this.#config.lookAt.x
      + this.#config.radius * Math.cos(this.#config.phi) * Math.cos(this.#config.theta);
    const y
      = this.#config.lookAt.y
      + this.#config.radius * Math.sin(this.#config.phi) * Math.cos(this.#config.theta);
    const z = this.#config.lookAt.z + this.#config.radius * Math.sin(this.#config.theta);

    camera.position.set(x, y, z);
    camera.lookAt(this.#config.lookAt);
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#disposer.add(
      () => (this.#element = undefined),
      std.onElementEvent(element, 'pointerdown', this.#pick),
      std.onElementEvent(element, 'pointermove', this.#drag),
      std.onElementEvent(element, 'pointerup', this.#drop),
      std.onElementEvent(element, 'contextmenu', this.#contextMenu),
      std.onElementEvent(element, 'wheel', this.#wheel, { passive: false }),
      std.onElementEvent(element, 'keydown', this.#keyDown),
      std.onElementEvent(element, 'keyup', this.#keyUp),
    );
  }

  unmount() {
    this.dispose();
  }

  readonly #pick = (e: PointerEvent) => {
    if (!(e.buttons & std.Buttons.LEFT) || this.#trackPointer) {
      return;
    }

    this.#trackPointer = true;
    this.#pointer = std.elementOffset(this.#element!, e);
    this.#element!.setPointerCapture(e.pointerId);
  };

  readonly #drag = (e: PointerEvent) => {
    if (!this.#trackPointer) {
      return;
    }

    const { x, y } = std.elementOffset(this.#element!, e);
    const dx = x - this.#pointer.x;
    const dy = y - this.#pointer.y;
    this.#pointer = { x, y };

    if (e.buttons & std.Buttons.LEFT) {
      this.#config.phi
        -= (dx * 2 * Math.PI * this.#config.rotationSpeed) / this.#element!.clientWidth;
      this.#config.theta
        += (dy * 2 * Math.PI * this.#config.rotationSpeed) / this.#element!.clientHeight;
    }
  };

  readonly #drop = (e: PointerEvent) => {
    if (this.#trackPointer && !(e.buttons & std.Buttons.LEFT)) {
      this.#element!.releasePointerCapture(e.pointerId);
      this.#trackPointer = false;
    }
  };

  readonly #contextMenu = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
  };

  readonly #wheel = (e: WheelEvent) => {
    const dy = e.deltaY > 0 ? 1 : -1;
    this.#config.radius += 0.05 * dy * this.#config.movementSpeed;
    e.stopPropagation();
    e.preventDefault();
  };

  readonly #keyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyW':
        this.#movement = -1;
        break;
      case 'KeyS':
        this.#movement = 1;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.#phiRotation = -1;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.#phiRotation = 1;
        break;
      case 'KeyE':
      case 'ArrowUp':
        this.#thetaRotation = 1;
        break;
      case 'KeyQ':
      case 'ArrowDown':
        this.#thetaRotation = -1;
        break;
      case 'Home':
        Object.assign(this.#config, this.#initializer);
        break;
      case 'End':
        this.#config.phi = -Math.PI / 2;
        this.#config.theta = 0;
        break;
      default:
        return;
    }
    e.stopImmediatePropagation();
    e.preventDefault();
  };

  readonly #keyUp = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'KeyW':
        this.#movement = 0;
        break;
      case 'KeyS':
        this.#movement = 0;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.#phiRotation = 0;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.#phiRotation = 0;
        break;
      case 'KeyE':
      case 'ArrowUp':
        this.#thetaRotation = 0;
        break;
      case 'KeyQ':
      case 'ArrowDown':
        this.#thetaRotation = 0;
        break;
      default:
        return;
    }
    e.stopImmediatePropagation();
    e.preventDefault();
  };
}
