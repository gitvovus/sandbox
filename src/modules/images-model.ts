import { ref, shallowReactive, watchEffect } from 'vue';

import { Vec } from '@/lib/bi';
import * as img from '@/lib/images';
import { Item, fromSource } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { ViewModel } from '@/modules/view-model';
import * as msg from '@/modules/workers/messages';

import Worker from '@/modules/workers/image-generator?worker';

import source from '@/assets/images-view/scene.svg?raw';

export class ImageData {
  width: number;
  height: number;
  #source = ref('');

  constructor(width: number, height: number, source: string) {
    this.width = width;
    this.height = height;
    this.source = source;
  }

  get source() {
    return this.#source.value;
  }

  set source(value) {
    this.#source.value = value;
  }
}

export class ImagesModel extends Disposable implements ViewModel {
  static readonly #imagesCount = 11;
  readonly component = 'images-view';
  readonly key = Symbol();

  readonly images = shallowReactive(
    [...Array(ImagesModel.#imagesCount)].map(() => new ImageData(0, 0, '')),
  );
  readonly root: Item;

  #selectedIndex = ref(0);

  readonly #camera = new Camera({ scale: new Vec(1, 1) });
  readonly #controller: Controller;

  #grayscaleFilter: Item;
  #brightnessFilter: Item;
  #contrastFilter: Item;
  #grayscale = ref(0);
  #brightness = ref(0);
  #contrast = ref(0);

  #worker = new Worker();
  #mounted = new Disposable();

  public constructor() {
    super();

    this.root = fromSource(source)!;
    const scene = this.root.find('scene')!;
    this.#controller = new Controller(this.root, scene, this.#camera);
    this.#controller.resize(500, 500);

    this.#grayscaleFilter = this.root.find('image-grayscale')!;
    this.#brightnessFilter = this.root.find('image-brightness')!;
    this.#contrastFilter = this.root.find('image-contrast')!;

    this.grayscale = 0;
    this.brightness = 100;
    this.contrast = 100;

    const image = this.root.find('image')!;
    this.add(
      () => this.#worker.terminate(),
      watchEffect(() => {
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

    this.#createImages();
  }

  first() {
    this.selectedIndex = 0;
  }

  last() {
    this.selectedIndex = this.images.length - 1;
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
    // prettier-ignore
    this.#grayscaleFilter.attributes.values = [
      0.2126 + 0.7874 * v, 0.7152 - 0.7152 * v, 0.0722 - 0.0722 * v, 0, 0,
      0.2126 - 0.2126 * v, 0.7152 + 0.2848 * v, 0.0722 - 0.0722 * v, 0, 0,
      0.2126 - 0.2126 * v, 0.7152 - 0.7152 * v, 0.0722 + 0.9278 * v, 0, 0,
      0, 0, 0, 1, 0,
    ].map((x) => x.toFixed(4)).join(' ');
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

  mount(element: HTMLElement) {
    this.#controller.mount(element);
    this.#mounted.add(() => this.#controller.unmount());
  }

  unmount() {
    this.#mounted.dispose();
  }

  #createImages() {
    const radius = 200;
    const petals = 7;

    this.#worker.onmessage = (e: MessageEvent) => {
      const data: msg.FlowerResponse = e.data;
      this.images[data.id] = new ImageData(
        data.radius * 2,
        data.radius * 2,
        img.fromImageBitmap(data.image),
      );
    };

    this.images.forEach((value, index, array) => {
      this.#worker.postMessage({
        type: 'flower',
        id: index,
        radius,
        petals,
        t: index / (array.length - 1),
      });
    });
  }
}
