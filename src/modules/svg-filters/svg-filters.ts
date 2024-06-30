import { ref } from 'vue';
import { Vec } from '@/lib/bi';
import { Item, it } from '@/lib/reactive';
import { Disposable, mod } from '@/lib/std';
import { Camera } from '@/lib/svg/camera';
import { Controller } from '@/lib/svg/controller';
import { prettyGrid } from '@/lib/svg/utils';
import { ViewModel } from '@/modules/view-model';

class PointLight extends Item {
  readonly #azimuth = ref(0);
  readonly #elevation = ref(0);
  readonly #distance = ref(0);

  constructor() {
    super('fePointLight');
  }

  get azimuth() {
    return this.#azimuth.value;
  }

  set azimuth(value) {
    this.#azimuth.value = mod(value, 2 * Math.PI);
  }

  get elevation() {
    return this.#elevation.value;
  }

  set elevation(value) {
    value = mod(value, 2 * Math.PI);
    if (value < Math.PI) value += Math.PI;
    this.#elevation.value = value;
  }

  get distance() {
    return this.#distance.value;
  }

  set distance(value) {
    this.#distance.value = value;
  }

  get x() {
    return Math.cos(this.azimuth) * this.distance;
  }

  get y() {
    return Math.sin(this.azimuth) * this.distance;
  }

  get z() {
    return Math.sin(this.elevation) * this.distance;
  }
}
PointLight;

export class SvgFilters extends ViewModel {
  readonly #mounted = new Disposable();

  blur = it('feGaussianBlur', { in: 'SourceAplha', stdDeviation: 0.5, result: 'blur' });

  specPointLight = it('fePointLight', {
    x: -15,
    y: -20,
    z: 30,
  });

  specular = it('feSpecularLighting', {
    'in': 'blur',
    'result': 'spec',
    'surfaceScale': 0.4,
    'specularConstant': 1.4,
    'specularExponent': 16,
    'lighting-color': '#ffffff',
  }, [
    this.specPointLight,
  ]);

  diffPointLight = it('fePointLight', {
    x: 0,
    y: -10,
    z: 20,
  });

  diffuse = it('feDiffuseLighting', {
    'in': 'blur',
    'result': 'diff',
    'surfaceScale': 0.4,
    'diffuseConstant': 0.3,
    'lighting-color': '#ffffff',
  }, [
    this.diffPointLight,
  ]);

  compose = it('feComposite', {
    in: 'spec',
    in2: 'diff',
    result: 'composed',
    operator: 'arithmetic',
    k1: 0,
    k2: 0.5,
    k3: 0.5,
    k4: 0,
  });

  lit = it('feComposite', {
    in: 'SourceGraphic',
    in2: 'composed',
    result: 'lit',
    operator: 'arithmetic',
    k1: 2,
    k2: 0,
    k3: 0,
    k4: 0,
  });

  clip = it('feComposite', { in: 'lit', in2: 'SourceGraphic', operator: 'in' });

  filter = it('filter', { id: 'filter-light' }, [
    this.blur,
    this.specular,
    this.diffuse,
    this.compose,
    this.lit,
    this.clip,
  ]);

  readonly #defs = it('defs', [this.filter]);

  readonly #size = 47.6;
  readonly #camera = new Camera({ scale: new Vec(1, 1) });

  readonly #grid = it('g', [
    prettyGrid(this.#size / 2, this.#size / 4, 1, 1, '#00000018'),
    prettyGrid(this.#size / 2, this.#size / 4, 10, 1, '#00000040'),
  ]);

  readonly back = it('path', {
    d: 'M 0,-10 C 9,-10 10,-9 10,0 S 9,10 0,10 S -10,9 -10,0 S -9,-10 0,-10 z',
    fill: 'darkred',
  });

  readonly front = it('path', {
    d: `M 2,-7 v 5 h 5 v 4 h -5 v 5 h -4 v -5 h -5 v -4 h 5 v -5 z`,
    fill: 'orange',
  });

  readonly #content = it('g', {
    filter: `url(#${this.filter.attributes.id})`,
    class: 'filter-content',
  }, [
    this.back,
    this.front,
  ]);

  readonly root = it('svg', [
    this.#defs,
    this.#grid,
    this.#content,
  ]);

  readonly #controller = new Controller(
    this.root, this.#content, this.#camera,
    { width: this.#size, height: this.#size },
  );

  constructor() {
    super('svg-filters-view', 'svg-filters-button');
  }

  get content() {
    return this.#content;
  }

  get viewBox() {
    const v = this.#controller.viewBox;
    return `${v.left} ${v.top} ${v.width} ${v.height}`;
  }

  get transform() {
    return this.#content.attributes.transform;
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);
    this.#mounted.add(() => this.#controller.unmount());
  }

  unmount() {
    this.#mounted.dispose();
  }

  test() {}
}
