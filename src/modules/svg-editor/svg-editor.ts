import { Vec } from '@/lib/bi';
import { Item, type Attributes } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/lib/svg/camera';
import { Controller } from '@/lib/svg/controller';
import { prettyGrid } from '@/lib/svg/utils';
import { ViewModel } from '@/modules/view-model';

// import iconUrl from '@/assets/icons/lt.svg';

function it(tag: string, data?: string | Attributes | Item[], children?: Item[]) {
  return new Item(tag, data, children);
}

export class SvgEditor extends ViewModel {
  readonly #mounted = new Disposable();

  blur = it('feGaussianBlur', { in: 'SourceAplha', stdDeviation: 2, result: 'blur' });

  specPointLight = it('fePointLight', {
    x: -15,
    y: -20,
    z: 30,
  });

  specular = it('feSpecularLighting', {
    'in': 'blur',
    'result': 'spec',
    'surfaceScale': 2,
    'specularConstant': 1.4,
    'specularExponent': 16,
    'lighting-color': '#ffffff',
  }, [
    this.specPointLight,
  ]);

  diffPointLight = it('fePointLight', {
    x: -15,
    y: -20,
    z: 30,
  });

  diffuse = it('feDiffuseLighting', {
    'in': 'blur',
    'result': 'diff',
    'surfaceScale': 2,
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

  filter = new Item('filter', { id: 'lightjs' }, [
    this.blur,
    this.specular,
    this.diffuse,
    this.compose,
    this.lit,
    this.clip,
  ]);

  readonly #defs = it('defs', [this.filter]);

  readonly #size = 23.8;
  readonly #camera = new Camera({ scale: new Vec(1, 1) });

  readonly #grid = it('g', [
    prettyGrid(this.#size / 2, this.#size / 4, 1, 1, '#00000018'),
    prettyGrid(this.#size / 2, this.#size / 4, 5, 1, '#00000040'),
  ]);

  readonly back = it('path', {
    d: 'M 0,-10 C 8,-10 10,-8 10,0 S 8,10 0,10 S -10,8 -10,0 S -8,-10 0,-10 z',
    fill: 'darkred',
  });

  readonly front = it('path', {
    d: `
    M 1 19 A 18 18 0 1 1 33.4 29.8 L 36 31 L 44 39
    A 3.5 3.5 0 0 1 39 44 L 31 36 L 29.8 33.4 A 18 18 0 0 1 1 19 z
    M 6 19 A 13 13 0 0 0 32 19 A 13 13 0 0 0 6 19 z`,
    fill: 'orange',
    transform: 'scale(0.25) translate(-24 -24)',
  });

  readonly #content = it('g', {
    filter: `url(#${this.filter.attributes.id})`,
  }, [
    this.back,
    this.front,
  ]);

  readonly root = it('svg', [
    this.#defs,
    this.#grid,
    this.#content,
  ]);

  // #icon?: Item;

  readonly #controller = new Controller(
    this.root, this.#content, this.#camera,
    { width: this.#size, height: this.#size },
  );

  constructor() {
    super('svg-editor-view');
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

  test() {
    // try {
    //   const r = await fetch(iconUrl);
    //   const b = await r.blob();
    //   const t = await b.text();
    //   const icon = fromSource(t)?.items[0];
    //   if (icon) {
    //     let index = -1;
    //     if (this.#icon) {
    //       index = this.#icon.index;
    //       this.#content.remove(this.#icon);
    //     }
    //     icon.attributes.fill = 'grey';
    //     this.#content.add(icon);
    //     icon.index = index;
    //     this.#icon = icon;
    //   }
    // }
    // catch (e) {
    //   console.log(e);
    // }
  }
}
