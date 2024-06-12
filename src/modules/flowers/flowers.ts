import { ref, shallowReactive, watchEffect } from 'vue';

import { Vec } from '@/lib/bi';
import * as img from '@/lib/images';
import { Item, fromSource } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/lib/svg/camera';
import { Controller } from '@/lib/svg/controller';
import { prettyGrid } from '@/lib/svg/utils';
import { ViewModel } from '@/modules/view-model';

import * as msg from './lib/messages';
import Worker from './lib/worker?worker';

import scene from '@/assets/flowers/scene.svg?raw';

export class ImageData {
  readonly width: number;
  readonly height: number;
  readonly source: string;

  constructor(width: number, height: number, source: string) {
    this.width = width;
    this.height = height;
    this.source = source;
  }
}

export class Flowers extends ViewModel {
  readonly images = shallowReactive<ImageData[]>([]);
  readonly root: Item;

  #selectedIndex = ref(0);

  readonly #size = 500;
  readonly #camera = new Camera({ scale: new Vec(1, 1) });
  readonly #controller: Controller;

  readonly radiusMin = 100;
  readonly radiusMax = 500;
  readonly radiusStep = 50;
  readonly #radius = ref(250);

  readonly petalsMin = 3;
  readonly petalsMax = 11;
  readonly #petals = ref(7);

  readonly imagesMin = 10;
  readonly imagesMax = 100;
  readonly #count = ref(25);

  #grayscaleFilter: Item;
  #brightnessFilter: Item;
  #contrastFilter: Item;
  #grayscale = ref(0);
  #brightness = ref(0);
  #contrast = ref(0);

  #worker = new Worker();
  #disposer = new Disposable();
  #mounted = new Disposable();

  constructor() {
    super('flowers-view');

    this.root = fromSource(scene)!;
    const content = this.root.find('images-content')!;
    this.#controller = new Controller(this.root, content, this.#camera);
    this.#controller.resize(this.#size, this.#size);

    this.#grayscaleFilter = this.root.find('image-grayscale')!;
    this.#brightnessFilter = this.root.find('image-brightness')!;
    this.#contrastFilter = this.root.find('image-contrast')!;

    this.grayscale = 0;
    this.brightness = 100;
    this.contrast = 100;

    this.#worker.onmessage = (e: MessageEvent) => {
      const data: msg.FlowerResponse = e.data;
      this.images[data.id] = new ImageData(
        data.radius * 2,
        data.radius * 2,
        img.fromImageBitmap(data.image),
      );
    };

    const image = this.root.find('image')!;
    this.#disposer.add(
      () => this.#worker.terminate(),
      watchEffect(() => {
        if (this.selectedIndex >= this.images.length) {
          return;
        }
        const item = this.images[this.selectedIndex];
        Object.assign(image.attributes, {
          x: -item.width / 2,
          y: -item.height / 2,
          width: item.width,
          height: item.height,
          href: item.source,
        });
      }),
    );

    this.#createStatic();
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);
    this.#mounted.add(() => this.#controller.unmount());
  }

  unmount() {
    this.#mounted.dispose();
  }

  get selectedIndex() {
    return this.#selectedIndex.value;
  }

  set selectedIndex(value) {
    this.#selectedIndex.value = value;
  }

  get grayscale() {
    return this.#grayscale.value;
  }

  set grayscale(value) {
    this.#grayscale.value = value;
    const v = 1 - 0.01 * value;
    this.#grayscaleFilter.attributes.values = [
      0.2126 + 0.7874 * v, 0.7152 - 0.7152 * v, 0.0722 - 0.0722 * v, 0, 0,
      0.2126 - 0.2126 * v, 0.7152 + 0.2848 * v, 0.0722 - 0.0722 * v, 0, 0,
      0.2126 - 0.2126 * v, 0.7152 - 0.7152 * v, 0.0722 + 0.9278 * v, 0, 0,
      0, 0, 0, 1, 0,
    ].map(x => x.toFixed(4)).join(' ');
  }

  get brightness() {
    return this.#brightness.value;
  }

  set brightness(value) {
    this.#brightness.value = value;
    const s = 0.01 * value;
    for (const channel of this.#brightnessFilter.items) {
      channel.attributes.slope = s;
    }
  }

  get contrast() {
    return this.#contrast.value;
  }

  set contrast(value) {
    this.#contrast.value = value;
    const s = 0.01 * value;
    const i = 0.5 * (1 - s);
    for (const channel of this.#contrastFilter.items) {
      channel.attributes.slope = s;
      channel.attributes.intercept = i;
    }
  }

  get radius() {
    return this.#radius.value;
  }

  set radius(value) {
    this.#radius.value = value;
  }

  get petals() {
    return this.#petals.value;
  }

  set petals(value) {
    this.#petals.value = value;
  }

  get count() {
    return this.#count.value;
  }

  set count(value) {
    this.#count.value = value;
  }

  generate() {
    this.selectedIndex = 0;
    this.images.length = 0;
    for (let i = 0; i < this.count; ++i) {
      this.images.push(new ImageData(0, 0, ''));
      this.#worker.postMessage({
        type: 'flower',
        id: i,
        radius: this.radius,
        petals: this.petals,
        t: i / (this.count - 1),
      });
    }
  }

  #createStatic() {
    const back = this.root.find('images-back')!;
    const step = Math.round(this.#size / 250) * 10;
    back.add(
      prettyGrid(this.#size / 2, this.#size / 4, step, 1, '#00000018'),
      prettyGrid(this.#size / 2, this.#size / 4, step * 5, 1, '#00000040'),
    );
  }
}
