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
