import { Vec } from '@/lib/bi';
import { Item, fromSource, type Attributes } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/lib/svg/camera';
import { Controller } from '@/lib/svg/controller';
import { prettyGrid } from '@/lib/svg/utils';
import { ViewModel } from '@/modules/view-model';

import iconUrl from '@/assets/icons/lt.svg';

function it(tag: string, data?: string | Attributes | Item[], children?: Item[]) {
  return new Item(tag, data, children);
}

export class SvgEditor extends ViewModel {
  readonly #mounted = new Disposable();

  blur = it('feGaussianBlur', { in: 'SourceAplha', stdDeviation: 2, result: 'blur' });

  pointLight = it('fePointLight', {
    x: 0,
    y: -20,
    z: 30,
  });

  specDistantLight = it('feDistantLight', {
    azimuth: -115,
    elevation: 40,
  });

  specular = it('feSpecularLighting', {
    'in': 'blur',
    'result': 'spec',
    'surfaceScale': 1,
    'specularConstant': 1.4,
    'specularExponent': 16,
    'lighting-color': '#800000',
  }, [
    this.pointLight,
  ]);

  diffDistantLight = it('feDistantLight', {
    azimuth: -115,
    elevation: 40,
  });
  diffuse = it('feDiffuseLighting', {
    'in': 'blur',
    'result': 'diff',
    'surfaceScale': 2,
    'diffuseConstant': 0.1,
    'lighting-color': '#707070',
  }, [
    this.diffDistantLight,
  ]);

  compose = it('feComposite', {
    in: 'spec',
    in2: 'diff',
    result: 'composed',
    operator: 'arithmetic',
    k1: 0,
    k2: 1,
    k3: 1,
    k4: 0,
  });

  lit = it('feComposite', {
    in: 'SourceAlpha',
    in2: 'spec',
    result: 'lit',
    operator: 'arithmetic',
    k1: 0,
    k2: 1,
    k3: 1,
    k4: 0,
  });
  clip = it('feComposite', { in: 'lit', in2: 'SourceAlpha', operator: 'in' });

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

  readonly #content = it('g', {
    filter: `url(#${this.filter.attributes.id})`,
  }, [
    this.back,
  ]);

  readonly root = it('svg', [
    this.#defs,
    this.#grid,
    this.#content,
  ]);

  #icon?: Item;

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

  async test() {
    try {
      const r = await fetch(iconUrl);
      const b = await r.blob();
      const t = await b.text();
      const icon = fromSource(t)?.items[0];
      if (icon) {
        let index = -1;
        if (this.#icon) {
          index = this.#icon.index;
          this.#content.remove(this.#icon);
        }
        icon.attributes.fill = 'grey';
        this.#content.add(icon);
        icon.index = index;
        this.#icon = icon;
      }
    }
    catch (e) {
      console.log(e);
    }
  }
}
