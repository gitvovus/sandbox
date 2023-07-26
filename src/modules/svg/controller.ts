import { shallowReactive, watchEffect } from 'vue';

import * as re from '@/lib/reactive';
import * as std from '@/lib/std';
import * as svg from '@/lib/svg';

import { Animation } from '@/lib/animation';
import { Camera } from '@/modules/svg/camera';
import { time } from '@/lib/std';

export enum Gesture {
  NONE,
  DRAG,
  ROTATE,
}

export type ControllerConfig = {
  pan: boolean;
  zoom: boolean;
  rotate: boolean;
  minZoom: number;
  maxZoom: number;
};

export type ControllerOptions = Partial<ControllerConfig>;

const defaultConfig: ControllerConfig = {
  pan: true,
  zoom: true,
  rotate: true,
  minZoom: 0.25,
  maxZoom: 4,
};

export class Controller implements std.IDisposable {
  #config: ControllerConfig;
  #disposer = new std.Disposable();

  #cw = 0;
  #ch = 0;
  #vw = 2;
  #vh = 2;
  #viewBox = shallowReactive<svg.ViewBox>({ left: -1, top: -1, width: 2, height: 2 });

  #element?: HTMLElement;
  #root: re.Item;
  #scene: re.Item;
  #camera: Camera;
  #defaultCamera: Camera;

  #gesture = Gesture.NONE;
  #pickedOffset = { x: 0, y: 0 };
  #pickedPoint = new svg.Vector2(0, 0);
  #pickedPosition = new svg.Vector2(0, 0);
  #pickedRotation = 0;
  #pickedTransform = new svg.Matrix2x3(1, 0, 0, 1, 0, 0);

  #zoomAnimation = new Animation();
  #zoomStart = 0;
  #zoomDuration = 0.25;
  #zoomFrom = 0;
  #zoomTo = 0;
  #zoomPosition = new svg.Vector2(0, 0);

  #resetAnimation = new Animation();
  #resetStart = 0;
  #resetDuration = 0.25;
  #resetPosition = new svg.Vector2(0, 0);
  #resetRotation = 0;
  #resetZoom = 1;

  constructor(root: re.Item, scene: re.Item, camera: Camera, options?: ControllerOptions) {
    this.#config = Object.assign({ ...defaultConfig }, options);
    this.#root = root;
    this.#scene = scene;
    this.#camera = camera;
    this.#defaultCamera = camera.clone();
  }

  get viewBox() {
    return this.#viewBox;
  }

  dispose(): void {
    this.#disposer.dispose();
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#disposer.addDisposers(
      () => (this.#element = undefined),
      () => this.#zoomAnimation.stop(),
      () => this.#resetAnimation.stop(),
      std.onElementEvent(element, 'dblclick', () => this.reset()),
      std.onElementEvent(element, 'pointerdown', this.#pick),
      std.onElementEvent(element, 'pointermove', this.#drag),
      std.onElementEvent(element, 'pointerup', this.#drop),
      std.onElementEvent(element, 'wheel', this.#wheel, { passive: false }),
      std.onAnimationFrame(this.#update),
      watchEffect(() => (this.#scene.attributes.transform = svg.toTransform(this.#camera.inverseTransform))),
    );
  }

  unmount() {
    this.dispose();
  }

  reset() {
    if (this.#resetAnimation.isActive()) return;
    this.#resetStart = time();
    this.#resetPosition = this.#camera.position;
    this.#resetRotation = this.#camera.rotation;
    if (this.#resetRotation > Math.PI) {
      this.#resetRotation -= 2 * Math.PI;
    }
    this.#resetZoom = this.#camera.scale.x / this.#defaultCamera.scale.x;
    this.#zoomAnimation.stop();
    this.#resetAnimation.start(this.#resetFrame);
  }

  resize(width: number, height: number) {
    this.#vw = width;
    this.#vh = height;
  }

  toCamera(e: MouseEvent) {
    const { x, y } = std.elementOffset(this.#element!, e);
    return new svg.Vector2(
      this.#viewBox.left + (this.#viewBox.width * x) / this.#cw,
      this.#viewBox.top + (this.#viewBox.height * y) / this.#ch,
    );
  }

  readonly #update = () => {
    const width = this.#element!.clientWidth;
    const height = this.#element!.clientHeight;
    if (width === this.#cw && height === this.#ch) {
      return;
    }

    this.#cw = width;
    this.#ch = height;
    if (width === 0 || height === 0) {
      return;
    }

    const widthScale = width / this.#vw;
    const heightScale = height / this.#vh;
    let w, h;
    if (widthScale < heightScale) {
      w = this.#vw;
      h = (this.#vh * heightScale) / widthScale;
    } else {
      w = (this.#vw * widthScale) / heightScale;
      h = this.#vh;
    }
    this.#viewBox = { left: -w / 2, top: -h / 2, width: w, height: h };
    this.#root.attributes.viewBox = svg.toViewBox(this.#viewBox);
  };

  #resetFrame = (dt: number) => {
    let k = (time() - this.#resetStart) / this.#resetDuration;
    if (k >= 1) {
      this.#resetAnimation.stop();
      k = 1;
    }
    this.#camera.position = new svg.Vector2(std.mix(this.#resetPosition.x, 0, k), std.mix(this.#resetPosition.y, 0, k));
    this.#camera.rotation = std.mix(this.#resetRotation, 0, k);
    const zoom = std.mix(this.#resetZoom, 1, k);
    const scale = this.#defaultCamera.scale;
    this.#camera.scale = new svg.Vector2(scale.x * zoom, scale.y * zoom);
  };

  #setZoom(zoom: number) {
    // this.#zoom = zoom;
    const scale = this.#defaultCamera.scale;
    const newScale = new svg.Vector2(scale.x * zoom, scale.y * zoom);
    const newCamera = new Camera({
      position: this.#camera.position,
      rotation: this.#camera.rotation,
      scale: newScale,
    });

    const oldPos = this.#camera.transform.transform(this.#zoomPosition);
    const newPos = newCamera.transform.transform(this.#zoomPosition);

    this.#camera.position = new svg.Vector2(
      this.#camera.position.x + oldPos.x - newPos.x,
      this.#camera.position.y + oldPos.y - newPos.y,
    );
    this.#camera.scale = newScale;
  }

  readonly #zoomFrame = (dt: number) => {
    let k = (std.time() - this.#zoomStart) / this.#zoomDuration;
    if (k >= 1) {
      k = 1;
      this.#zoomAnimation.stop();
    }
    const zoom = std.mix(this.#zoomFrom, this.#zoomTo, k);
    this.#setZoom(zoom);
  };

  readonly #pick = (e: PointerEvent) => {
    switch (e.button) {
      case std.Mouse.LEFT:
        if (!this.#config.pan) return;
        this.#gesture = Gesture.DRAG;
        break;
      case std.Mouse.RIGHT:
        if (!this.#config.rotate) return;
        this.#gesture = Gesture.ROTATE;
        break;
      default:
        return;
    }
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.#pickedOffset = std.elementOffset(this.#element!, e);
    this.#pickedPosition = this.#camera.position;
    this.#pickedRotation = this.#camera.rotation;
    this.#pickedTransform = this.#camera.transform;
    this.#pickedPoint = this.#pickedTransform.transform(this.toCamera(e));
  };

  readonly #drag = (e: PointerEvent) => {
    if (this.#gesture === Gesture.NONE) return;
    if (this.#gesture === Gesture.DRAG) {
      const point = this.#pickedTransform.transform(this.toCamera(e));
      const delta = new svg.Vector2(point.x - this.#pickedPoint.x, point.y - this.#pickedPoint.y);
      this.#camera.position = new svg.Vector2(this.#pickedPosition.x - delta.x, this.#pickedPosition.y - delta.y);
    } else {
      const offset = std.elementOffset(this.#element!, e);
      const delta = (2 * Math.PI * (offset.x - this.#pickedOffset.x)) / this.#element!.clientWidth;
      this.#camera.rotation = std.mod(this.#pickedRotation - delta, 2 * Math.PI);
    }
  };

  readonly #drop = (e: PointerEvent) => {
    if (this.#gesture === Gesture.NONE) return;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    this.#gesture = Gesture.NONE;
  };

  readonly #wheel = (e: WheelEvent) => {
    if (!this.#config.zoom) return;

    e.preventDefault();

    const k = e.deltaY < 0 ? 0.8 : 1.25;

    this.#zoomFrom = this.#camera.scale.x / this.#defaultCamera.scale.x;
    this.#zoomTo = std.clamp(k * this.#zoomFrom, this.#config.minZoom, this.#config.maxZoom);
    this.#zoomStart = std.time();
    this.#zoomPosition = this.toCamera(e);
    this.#zoomAnimation.stop();
    this.#resetAnimation.stop();
    this.#zoomAnimation.start(this.#zoomFrame);
  };
}
