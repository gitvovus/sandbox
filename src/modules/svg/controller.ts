import { ref, watchEffect } from 'vue';

import * as re from '@/lib/reactive';
import * as std from '@/lib/std';
import * as svg from '@/lib/svg';

import { Camera } from '@/modules/svg/camera';

export enum Gesture {
  NONE,
  DRAG,
  ROTATE,
}

export class Controller extends std.Disposable {
  #width = ref(2);
  #height = ref(2);
  #referenceWidth = ref(2);
  #referenceHeight = ref(2);
  #viewBox: svg.ViewBox = { left: -1, top: -1, width: 2, height: 2 };

  #element?: HTMLElement;
  #root: re.ReactiveNode;
  #scene: re.ReactiveNode;
  #camera: Camera;
  #defaultCamera: Camera;

  #gesture = Gesture.NONE;
  #pickedOffset = { x: 0, y: 0 };
  #pickedPoint = new svg.Vector2(0, 0);
  #pickedPosition = new svg.Vector2(0, 0);
  #pickedRotation = 0;
  #pickedTransform = new svg.Matrix2x3(1, 0, 0, 1, 0, 0);

  constructor(root: re.ReactiveNode, scene: re.ReactiveNode, camera: Camera) {
    super();
    this.#root = root;
    this.#scene = scene;
    this.#camera = camera;
    this.#defaultCamera = camera.clone();
  }

  get width() {
    return this.#width.value;
  }

  set width(value) {
    this.#width.value = value;
  }

  get height() {
    return this.#height.value;
  }

  set height(value) {
    this.#height.value = value;
  }

  get referenceWidth() {
    return this.#referenceWidth.value;
  }

  set referenceWidth(value) {
    this.#referenceWidth.value = value;
  }

  get referenceHeight() {
    return this.#referenceHeight.value;
  }

  set referenceHeight(value) {
    this.#referenceHeight.value = value;
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.addDisposers(
      std.onElementEvent(element, 'dblclick', () => this.reset()),
      std.onElementEvent(element, 'pointerdown', this.#pick),
      std.onElementEvent(element, 'pointermove', this.#drag),
      std.onElementEvent(element, 'pointerup', this.#drop),
      std.onElementEvent(element, 'wheel', this.#wheel, { passive: false }),
      std.onAnimationFrame(this.#updateViewBox),
      watchEffect(() => {
        this.#scene.attributes.transform = svg.toTransform(this.#camera.inverseTransform);
      }),
      () => {
        this.#element = undefined;
      },
    );
  }

  unmount() {
    this.dispose();
  }

  reset() {
    this.#camera.position = this.#defaultCamera.position;
    this.#camera.rotation = this.#defaultCamera.rotation;
    this.#camera.scale = this.#defaultCamera.scale;
  }

  setReferenceSize(width: number, height: number) {
    this.referenceWidth = width;
    this.referenceHeight = height;
  }

  toCamera(e: MouseEvent) {
    const { x, y } = std.elementOffset(this.#element!, e);
    return new svg.Vector2(
      this.#viewBox.left + (this.#viewBox.width * x) / this.width,
      this.#viewBox.top + (this.#viewBox.height * y) / this.height,
    );
  }

  readonly #updateViewBox = () => {
    const width = this.#element!.clientWidth;
    const height = this.#element!.clientHeight;
    if (width === this.width && height === this.height) {
      return;
    }

    this.width = width;
    this.height = height;
    if (width === 0 || height === 0) {
      return;
    }

    const widthScale = width / this.referenceWidth;
    const heightScale = height / this.referenceHeight;
    let w, h;
    if (widthScale < heightScale) {
      w = this.referenceWidth;
      h = (this.referenceHeight * heightScale) / widthScale;
    } else {
      w = (this.referenceWidth * widthScale) / heightScale;
      h = this.referenceHeight;
    }
    this.#viewBox = { left: -w / 2, top: -h / 2, width: w, height: h };
    this.#root.attributes.viewBox = svg.toViewBox(this.#viewBox);
  };

  readonly #pick = (e: PointerEvent) => {
    switch (e.button) {
      case std.Mouse.LEFT:
        this.#gesture = Gesture.DRAG;
        break;
      case std.Mouse.RIGHT:
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
    if (this.#gesture === Gesture.NONE) {
      return;
    }
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
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    this.#gesture = Gesture.NONE;
  };

  readonly #wheel = (e: WheelEvent) => {
    e.preventDefault();

    const k = e.deltaY < 0 ? 7 / 8 : 8 / 7;
    const zoom = std.clamp(Math.abs(this.#camera.scale.x * k), 0.25, 4) / Math.abs(this.#camera.scale.x);
    const newScale = new svg.Vector2(this.#camera.scale.x * zoom, this.#camera.scale.y * zoom);

    const newCamera = new Camera({
      position: this.#camera.position,
      rotation: this.#camera.rotation,
      scale: newScale,
    });

    const cameraPos = this.toCamera(e);
    const oldPos = this.#camera.transform.transform(cameraPos);
    const newPos = newCamera.transform.transform(cameraPos);

    this.#camera.position = new svg.Vector2(
      this.#camera.position.x + oldPos.x - newPos.x,
      this.#camera.position.y + oldPos.y - newPos.y,
    );
    this.#camera.scale = newScale;
  };
}
