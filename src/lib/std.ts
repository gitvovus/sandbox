export function assert(assertion: any, message?: any) {
  if (!assertion) {
    console.log(message);
    debugger;
  }
}

export function time() {
  return 0.001 * Date.now();
}

export function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}

export function mix(a: number, b: number, x: number) {
  return a + (b - a) * x;
}

export function mod(a: number, b: number) {
  let x = a % b;
  if (x < 0) {
    x += b;
  }
  return x;
}

export function step(a: number, x: number) {
  return x < a ? 0 : 1;
}

export function smoothStep(a: number, b: number, x: number) {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

export interface Point {
  x: number;
  y: number;
}

export enum Mouse {
  LEFT = 0,
  MIDDLE = 1,
  RIGHT = 2,
  BACK = 3,
  FORWARD = 4,
}

/**
 * HTMLElement.addEventListener wrapper.
 * @param type event type.
 * @param handler event handler.
 * @param options event options.
 * @returns function that will remove handler when called.
 */
export function onElementEvent<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  type: K,
  handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  element.addEventListener(type, handler, options);
  return () => element.removeEventListener(type, handler, options);
}

/**
 * Window.addEventListener wrapper.
 * @param type event type.
 * @param handler event handler.
 * @param options event options.
 * @returns function that will remove handler when called.
 */
export function onWindowEvent<K extends keyof WindowEventMap>(
  type: K,
  handler: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  window.addEventListener(type, handler, options);
  return () => window.removeEventListener(type, handler, options);
}

/**
 * Returns coordinates of MouseEvent (clientX, clientY) relative to given element.
 * @param element element.
 * @param e event.
 * @returns coordinates as { x, y }.
 */
export function elementOffset(element: Element, e: MouseEvent): { x: number; y: number } {
  const rect = element.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

/**
 * Calls given callback every animation frame.
 * @param callback callback to call.
 * @param fireImmediately if true then additionally immediately calls callback.
 * @returns function that should be called to stop per-frame calls.
 */
export function onAnimationFrame(callback: () => void, fireImmediately = true) {
  let handle = 0;
  const frameHandler = () => {
    handle = window.requestAnimationFrame(frameHandler);
    callback();
  };
  if (fireImmediately) {
    callback();
  }
  handle = window.requestAnimationFrame(frameHandler);
  return () => window.cancelAnimationFrame(handle);
}

export type Vector2Elements = [number, number];
export type Matrix2x3Elements = [number, number, number, number, number, number];

export class Vector2 {
  readonly elements: Vector2Elements;

  constructor(...elements: Vector2Elements) {
    this.elements = elements;
  }

  get x() {
    return this.elements[0];
  }

  set x(value) {
    this.elements[0] = value;
  }

  get y() {
    return this.elements[1];
  }

  set y(value) {
    this.elements[1] = value;
  }

  clone() {
    return new Vector2(...this.elements);
  }
}

export function squareDistance(a: Vector2, b: Vector2) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

export function distance(a: Vector2, b: Vector2) {
  return Math.sqrt(squareDistance(a, b));
}

export function squareLength(v: Vector2) {
  return v.x * v.x + v.y * v.y;
}

export function length(v: Vector2) {
  return Math.sqrt(squareLength(v));
}

export class Matrix2x3 {
  static translation(x: number, y: number) {
    return new Matrix2x3(1, 0, 0, 1, x, y);
  }

  static rotation(angle: number) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    return new Matrix2x3(cos, sin, -sin, cos, 0, 0);
  }

  static scale(x: number, y: number) {
    return new Matrix2x3(x, 0, 0, y, 0, 0);
  }

  static inverse(matrix: Matrix2x3) {
    const m = matrix.elements;
    const k = 1 / (m[0] * m[3] - m[1] * m[2]);
    return new Matrix2x3(
      m[3] * k,
      -m[1] * k,
      -m[2] * k,
      m[0] * k,
      (m[2] * m[5] - m[3] * m[4]) * k,
      (m[1] * m[4] - m[0] * m[5]) * k,
    );
  }

  readonly elements: Matrix2x3Elements;

  constructor(...elements: Matrix2x3Elements) {
    this.elements = elements;
  }

  clone() {
    return new Matrix2x3(...this.elements);
  }

  multiply(m: Matrix2x3) {
    const a = this.elements;
    const b = m.elements;
    return new Matrix2x3(
      a[0] * b[0] + a[2] * b[1],
      a[1] * b[0] + a[3] * b[1],
      a[0] * b[2] + a[2] * b[3],
      a[1] * b[2] + a[3] * b[3],
      a[0] * b[4] + a[2] * b[5] + a[4],
      a[1] * b[4] + a[3] * b[5] + a[5],
    );
  }

  transform(vector: Vector2) {
    const m = this.elements;
    const v = vector.elements;
    return new Vector2(m[0] * v[0] + m[2] * v[1] + m[4], m[1] * v[0] + m[3] * v[1] + m[5]);
  }
}

export type Disposer = () => void;

export interface IDisposable {
  dispose(): void;
}

export class Disposable implements IDisposable {
  readonly #disposers: Disposer[] = [];

  dispose() {
    this.#disposers.forEach((disposer) => disposer());
    this.#disposers.length = 0;
  }

  addDisposers(...disposers: Disposer[]) {
    this.#disposers.push(...disposers);
  }
}
