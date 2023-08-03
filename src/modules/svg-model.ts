import { Item } from '@/lib/reactive';
import { Vec, length, normalize } from '@/lib/bi';
import { draw, grid, type DrawingOptions } from '@/modules/gear-box/drawings';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { ViewModel } from '@/modules/view-model';
import { Disposable } from '@/lib/std';
import { Animation } from '@/lib/animation';
import { Transformable } from '@/modules/svg/transformable';
import { Scene } from '@/modules/gear-box/scene';
import type { ShapeType } from '@/modules/gear-box/shapes';

class PathBuilder {
  #d: string[] = [];
  #f: (x: number) => string;
  #points = 0;

  constructor(decimalPoint = 3) {
    this.#f = (x: number) => x.toFixed(decimalPoint);
  }

  get() {
    return this.#d.join(' ');
  }

  reset() {
    this.#d = [];
    this.#points = 0;
    return this;
  }

  M(...numbers: number[]) {
    this.#d.push('M', ...numbers.map(this.#f));
    this.#points += numbers.length / 2;
    return this;
  }

  m(...numbers: number[]) {
    this.#d.push('m', ...numbers.map(this.#f));
    this.#points += numbers.length / 2;
    return this;
  }

  C(...numbers: number[]) {
    this.#d.push('C', ...numbers.map(this.#f));
    this.#points += numbers.length / 6; // TODO
    return this;
  }

  z() {
    this.#d.push('z');
    return this;
  }
}

const x = (r: number, a: number) => r * Math.cos(a);
const y = (r: number, a: number) => r * Math.sin(a);
const f = (n: number) => n.toFixed(3);
const v2 = (x: number, y: number) => new Vec(x, y);

export class SvgModel extends ViewModel {
  readonly #mounted = new Disposable();

  readonly #scene = new Scene('sm:', 29.8, 29.8, 3, 0.25, true);
  readonly #camera = new Camera({ scale: v2(1, -1) });
  readonly #controller = new Controller(this.#scene.root, this.#scene.content, this.#camera);

  readonly #rotation = new Animation();
  readonly #masks = new Map<number, Item>();
  readonly #shapes = new Map<number, Transformable>();
  readonly #refs = new Map<number, Transformable>();

  constructor() {
    super('svg-view');

    this.#createStatic();
    this.#createScene();
    this.#controller.resize(this.#scene.width, this.#scene.height);
  }

  get root() {
    return this.#scene.root;
  }

  start() {
    this.#rotation.start((dt) => {
      const delta = dt;
      this.#shapes.forEach((shape) => (shape.rotation += delta));
    });
  }

  stop() {
    this.#rotation.stop();
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);

    this.#mounted.addDisposers(
      () => this.stop(),
      () => this.#controller.unmount(),
    );
  }

  unmount() {
    this.#mounted.dispose();
  }

  #createStatic() {
    this.#scene.background.add(
      grid(this.#scene.width, this.#scene.height, 1, 1, '#00000010'),
      grid(this.#scene.width, this.#scene.height, 5, 1, '#00000040'),
    );
  }

  #createScene() {
    const items: DrawingOptions[] = [
      { radius: 2, innerRadius: 0.9, offset: 0, spokes: 4 },
      { radius: 3, innerRadius: 0.84, offset: Math.PI / 6, spokes: 3 },
      // { radius: 4, innerRadius: 0.78, offset: Math.PI / 4, spokes: 4 },
      // { radius: 5, innerRadius: 0.72, offset: Math.PI / 10, spokes: 5 },
    ];

    items.forEach((item) => {
      const r = item.radius;
      const x = -r - 1;
      const y = -r - 1;
      const width = 2 * (r + 1);
      const height = 2 * (r + 1);
      this.#createGearImage('gear', item).then((imageUrl) => {
        const mask = new Item('mask', { id: `sm:mask-${r}` });
        const image = new Item('image', { href: imageUrl, x, y, width, height });
        mask.add(image);
        this.#masks.set(r, mask);

        const shape = new Transformable('g', { id: `sm:gear-${r}`, class: `gear fill-${r}` });
        shape.add(new Item('rect', { mask: `url(#${mask.attributes.id})`, x, y, width, height }));
        shape.position = v2(4 - 2 * r, 2 * r - 4);
        this.#shapes.set(r, shape);

        const ref = new Transformable('use', { href: `#${shape.attributes.id}` });
        this.#refs.set(r, ref);

        this.#scene.addDefs(mask, shape);
        this.#scene.addToLayer(ref, r - 1);
      });
    });
  }

  async #createGearImage(type: ShapeType, options: DrawingOptions) {
    const r = options.radius;
    const width = 100 * (r + 1);
    const height = 100 * (r + 1);
    const data = [
      `<svg xmlns="http://www.w3.org/2000/svg">`,
      `<path fill="white" d="${draw(type, options)}" transform="translate(${r + 1} ${r + 1})"></path>`,
      '</svg>',
    ].join('');
    const svg = new Blob([data], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svg);

    const png: string = await new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      const img = new Image(width, height);
      img.src = url;
      img.onload = async () => {
        ctx!.drawImage(img, 0, 0, 2 * (r + 1), 2 * (r + 1), 0, 0, width, height);
        URL.revokeObjectURL(url);
        const dataUrl = canvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob();
        resolve(URL.createObjectURL(blob));
      };
    });

    return png;
  }
}
