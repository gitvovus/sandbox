import * as tri from 'three';

import * as std from '@/lib/std';
import { ViewModel } from '@/modules/view-model';
import { Demo } from './lib/demo';

export class Bicubic extends ViewModel {
  readonly #disposer = new std.Disposable();
  readonly #mounted = new std.Disposable();

  readonly demo: Demo;
  readonly #scene: tri.Scene;
  readonly #camera: tri.PerspectiveCamera;
  #renderer!: tri.WebGLRenderer;

  #element?: HTMLElement;
  #width = 0;
  #height = 0;

  constructor() {
    super('bicubic-view', 'bicubic-button');

    this.#camera = new tri.PerspectiveCamera(30, 1, 0.1, 50);
    this.#camera.up.set(0, 0, 1);
    this.#camera.add(new tri.DirectionalLight(0xffffff, 1));

    this.#scene = new tri.Scene();
    this.#scene.add(new tri.AmbientLight(0x404040));
    this.#scene.add(this.#camera);

    this.demo = new Demo(this.#scene, this.#camera);

    this.#disposer.add(() => this.demo.dispose());
  }

  dispose() {
    this.#mounted.dispose();
    this.#disposer.dispose();
  }

  mount(element: HTMLElement, canvas: HTMLCanvasElement) {
    this.#element = element;
    this.#width = 0;
    this.#height = 0;

    const bg = new tri.Color(getComputedStyle(this.#element).backgroundColor);
    this.#renderer = new tri.WebGLRenderer({ canvas, antialias: true });
    this.#renderer.setClearColor(bg);
    this.#renderer.setPixelRatio(window.devicePixelRatio);
    this.demo.mount(element);

    this.#mounted.add(std.onAnimationFrame(this.#render), () => {
      this.demo.unmount();
      this.#renderer.dispose();
      this.#element = undefined;
    });
  }

  unmount() {
    this.#mounted.dispose();
  }

  readonly #render = () => {
    this.#resize();
    this.demo.update();
    this.#renderer.render(this.#scene, this.#camera);
  };

  #resize() {
    const width = this.#element!.clientWidth + 1;
    const height = this.#element!.clientHeight + 1;

    if (width !== this.#width || height !== this.#height) {
      this.#width = width;
      this.#height = height;
      this.#renderer.setSize(width, height);
      this.#camera.aspect = width / height;
      this.#camera.updateProjectionMatrix();
    }
  }
}
