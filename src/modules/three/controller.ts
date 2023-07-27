import * as tri from 'three';
import * as std from '@/lib/std';

export interface Options {
  phi: number;
  theta: number;
  radius: number;
  lookAt: tri.Vector3;
  zoom: number;
  minRadius: number;
  maxRadius: number;
  movementSpeed: number;
  rotationSpeed: number;
}

export class Controller implements std.IDisposable {
  lookAt = new tri.Vector3(0, 0, 0);
  radius = 6;
  phi = 0;
  theta = 0;
  zoom = 1;

  minRadius = 2;
  maxRadius = 10;
  movementSpeed = 10;
  rotationSpeed = 1;

  #element?: HTMLElement;
  #disposer = new std.Disposable();

  #minTheta = -1.5;
  #maxTheta = 1.5;
  #movement = 0;
  #phiRotation = 0;
  #thetaRotation = 0;

  #initializer: Partial<Options> = {};
  #lastUpdate = Date.now() * 0.001;
  #trackPointer = false;
  #pointer = { x: 0, y: 0 };
  #panX = new tri.Vector3();
  #panY = new tri.Vector3();

  constructor(options?: Partial<Options>) {
    Object.assign(this, options);
    Object.assign(this.#initializer, {
      phi: this.phi,
      theta: this.theta,
      radius: this.radius,
      lookAt: this.lookAt.clone(),
      zoom: this.zoom,
      minRadius: this.minRadius,
      maxRadius: this.maxRadius,
      movementSpeed: this.movementSpeed,
      rotationSpeed: this.rotationSpeed,
    });
  }

  dispose() {
    this.#disposer.dispose();
  }

  update(camera: tri.Camera) {
    const time = Date.now() * 0.001;
    const dt = time - this.#lastUpdate;
    this.#lastUpdate = time;

    this.radius += dt * this.#movement * this.movementSpeed;
    this.phi += dt * this.#phiRotation * this.rotationSpeed;
    this.theta += dt * this.#thetaRotation * this.rotationSpeed;

    this.radius = std.clamp(this.radius, this.minRadius, this.maxRadius);
    this.theta = std.clamp(this.theta, this.#minTheta, this.#maxTheta);

    const x = this.lookAt.x + this.radius * Math.cos(this.phi) * Math.cos(this.theta);
    const y = this.lookAt.y + this.radius * Math.sin(this.phi) * Math.cos(this.theta);
    const z = this.lookAt.z + this.radius * Math.sin(this.theta);

    camera.position.set(x, y, z);
    camera.lookAt(this.lookAt);
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#disposer.addDisposers(
      () => (this.#element = undefined),
      std.onElementEvent(element, 'pointerdown', this.#pick),
      std.onElementEvent(element, 'pointermove', this.#drag),
      std.onElementEvent(element, 'pointerup', this.#drop),
      std.onElementEvent(element, 'wheel', this.#wheel, { passive: false }),
      std.onElementEvent(element, 'keydown', this.#keyDown),
      std.onElementEvent(element, 'keyup', this.#keyUp),
    );
  }

  unmount() {
    this.dispose();
  }

  readonly #pick = (e: PointerEvent) => {
    if (!(e.buttons & 3) || this.#trackPointer) {
      return;
    }

    const cosPhi = Math.cos(this.phi);
    const sinPhi = Math.sin(this.phi);
    const cosTheta = Math.cos(this.theta);
    const sinTheta = Math.sin(this.theta);
    this.#panX.set(-sinPhi, cosPhi, 0).multiplyScalar(this.radius);
    this.#panY.set(-cosPhi * sinTheta, -sinPhi * sinTheta, cosTheta).multiplyScalar(this.radius);

    this.#trackPointer = true;
    const { x, y } = std.elementOffset(this.#element!, e);
    this.#pointer.x = x;
    this.#pointer.y = y;
    this.#element!.setPointerCapture(e.pointerId);
  };

  readonly #drag = (e: PointerEvent) => {
    if (!this.#trackPointer) {
      return;
    }

    const { x, y } = std.elementOffset(this.#element!, e);
    const dx = x - this.#pointer.x;
    const dy = y - this.#pointer.y;
    this.#pointer.x = x;
    this.#pointer.y = y;

    if (e.buttons & 1) {
      this.phi -= (dx * 2 * Math.PI * this.rotationSpeed) / this.#element!.clientWidth;
      this.theta += (dy * 2 * Math.PI * this.rotationSpeed) / this.#element!.clientHeight;
    } else if (e.buttons & 2) {
      const delta = this.#panX
        .clone()
        .multiplyScalar(dx / this.#element!.clientWidth)
        .add(this.#panY.clone().multiplyScalar(-dy / this.#element!.clientHeight));
      this.lookAt.sub(delta);
    }
  };

  readonly #drop = (e: PointerEvent) => {
    if (this.#trackPointer && !(e.buttons & 3)) {
      this.#element!.releasePointerCapture(e.pointerId);
      this.#trackPointer = false;
    }
  };

  readonly #wheel = (e: WheelEvent) => {
    const dy = e.deltaY > 0 ? 1 : -1;
    this.radius += 0.05 * dy * this.movementSpeed;
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
        Object.assign(this, this.#initializer);
        break;
      case 'End':
        this.phi = -Math.PI / 2;
        this.theta = 0;
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
