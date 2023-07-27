import * as tri from 'three';

import * as std from '@/lib/std';
import { Bicubic } from '@/modules/three/bicubic';
import { Mockup } from '@/modules/three/mockup';
import { ViewModel } from '@/modules/view-model';

export class ThreeModel extends ViewModel implements std.IDisposable {
  readonly #disposer = new std.Disposable();
  readonly #mounted = new std.Disposable();

  readonly #demo: Bicubic;
  readonly #scene: tri.Scene;
  readonly #camera: tri.PerspectiveCamera;
  #renderer!: tri.WebGLRenderer;

  #element?: HTMLElement;
  #width = 0;
  #height = 0;

  constructor() {
    super('three-view');

    this.#camera = new tri.PerspectiveCamera(30, 1, 0.1, 50);
    this.#camera.up.set(0, 0, 1);
    this.#camera.add(new tri.PointLight(0xa0a0a0));

    this.#scene = new tri.Scene();
    this.#scene.add(new tri.AmbientLight(0x404040));
    this.#scene.add(this.#camera);

    this.#demo = new Bicubic(this.#scene, this.#camera);

    this.#disposer.addDisposers(() => this.#demo.dispose());
  }

  dispose() {
    this.#mounted.dispose();
    this.#disposer.dispose();
  }

  mount(element: HTMLElement, canvas: HTMLCanvasElement) {
    this.#element = element;

    const bg = new tri.Color(0x384048);
    this.#renderer = new tri.WebGLRenderer({ canvas, antialias: true });
    this.#renderer.setClearColor(bg);
    this.#renderer.setPixelRatio(window.devicePixelRatio);
    this.#demo.mount(element);

    this.#mounted.addDisposers(std.onAnimationFrame(this.#render), () => {
      this.#demo.unmount();
      this.#element = undefined;
      this.#width = 0;
      this.#height = 0;
      this.#renderer.dispose();
    });
  }

  unmount() {
    this.#mounted.dispose();
  }

  readonly #render = () => {
    this.#resize();
    this.#demo.update();
    this.#renderer.render(this.#scene, this.#camera);
  };

  #resize() {
    const width = this.#element!.clientWidth;
    const height = this.#element!.clientHeight;

    if (width !== this.#width || height !== this.#height) {
      this.#width = width;
      this.#height = height;
      this.#renderer.setSize(width, height);
      this.#camera.aspect = width / height;
      this.#camera.updateProjectionMatrix();
    }
  }
}
