import { Vec } from '@/lib/bi';
import { Item, type Attributes } from '@/lib/reactive';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { Scene } from '@/modules/gear-box/scene';
import { ViewModel } from '@/modules/view-model';

export class LayeredModel extends ViewModel {
  readonly #scene = new Scene('lm', 20, 20, 4, 0.25);
  readonly #camera = new Camera({ scale: new Vec(1, -1) });
  readonly #controller = new Controller(this.#scene.root, this.#scene.content, this.#camera);

  constructor() {
    super('layered-view');
    this.#createScene();
    this.#controller.resize(this.#scene.width, this.#scene.height);
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);
  }

  unmount() {
    this.#controller.unmount();
  }

  get root() {
    return this.#scene.root;
  }

  test() {
    this.#scene.remove('#tri-blu');
    this.#scene.removeDef('tri-blu');
  }

  #createScene() {
    const rec = new Item('path', { id: 'rec', d: 'M -5,2 -5,-2 5,-2 5,2' });
    const tri = new Item('path', { id: 'tri', d: 'M -3,2 0,-4 3,2' });

    const recRed = this.#use(rec, { id: 'rec-red', y: -2.5 });
    const recBlu = this.#use(rec, { id: 'rec-blu', y: 2.5 });

    const triOra = this.#use(tri, { id: 'tri-ora', x: 1, y: -1 });
    const triBlu = this.#use(tri, { id: 'tri-blu', x: 1, y: 2 });
    const triRed = this.#use(tri, { id: 'tri-red', x: -1, y: 1 });

    this.#scene.addDefs(rec, tri, recRed, recBlu, triOra, triBlu, triRed);

    this.#scene.addToGround(this.#use(recRed, { fill: '#702020' }));
    this.#scene.addToGround(this.#use(recBlu, { fill: '#183868' }));
    this.#scene.addToLayer(this.#use(triOra, { fill: '#c06000' }), 1);
    this.#scene.addToLayer(this.#use(triBlu, { fill: '#406080' }), 2);
    this.#scene.addToLayer(this.#use(triRed, { fill: '#e04000' }), 3);

    this.#createStatic();
  }

  #use(item: Item, attributes?: Attributes) {
    return new Item('use', { href: `#${item.attributes.id}`, ...attributes });
  }

  #createStatic() {
    [-5, 0, 5].forEach((i) =>
      this.#scene.background.add(
        new Item('path', {
          d: `M-10 ${i}h20`,
          stroke: '#00000040',
          'stroke-width': 1,
          'vector-effect': 'non-scaling-stroke',
        }),
        new Item('path', {
          d: `M${i} -10v20`,
          stroke: '#00000040',
          'stroke-width': 1,
          'vector-effect': 'non-scaling-stroke',
        }),
      ),
    );
  }
}
