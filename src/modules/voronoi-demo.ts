import { ref } from 'vue';

import { Vec } from '@/lib/bi';
import { Item } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { type Node, Tree, height, minimum } from '@/lib/tree';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { grid } from '@/modules/svg/utils';
import { ViewModel } from '@/modules/view-model';
import { Diagram, Seg, testDiagram, type SiteSegment } from '@/modules/voronoi/diagram';

const less = (a: number, b: number) => a < b;

export class VoronoiDemo extends ViewModel {
  readonly root = new Item('svg');

  readonly #mounted = new Disposable();
  readonly #content = new Item('g');
  readonly #size = 20;
  readonly #camera = new Camera({ scale: new Vec(1, -1) });
  readonly #controller = new Controller(this.root, this.#content, this.#camera);
  readonly #tree = new Tree<number>(less);
  readonly #treeVisual = new Item('g');
  readonly #diagramVisual = new Item('g');

  readonly #text = ref('');

  #at = 0;
  #resolveStep?: () => void;

  readonly diagram = testDiagram;

  constructor() {
    super('voronoi-view');
    this.#createStatic();
    this.#controller.resize(this.#size, this.#size);

    this.#drawTree(this.#tree);
    this.diagram.solve(this.#stepCallback);
  }

  mount(element: HTMLElement) {
    this.#controller.mount(element);
    this.#mounted.add(() => this.#controller.unmount());
  }

  unmount() {
    this.#mounted.dispose();
  }

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }

  add() {
    const value = Number.parseFloat(this.text);
    if (!isNaN(value)) {
      this.#tree.insert(value);
      this.#drawTree(this.#tree);
    }
    this.text = '';
  }

  remove() {
    const value = Number.parseFloat(this.text);
    if (!isNaN(value)) {
      this.#tree.remove(this.#tree.find(value));
      this.#drawTree(this.#tree);
    }
    this.text = '';
  }

  step() {
    if (this.#resolveStep) {
      // this.#drawDiagram(this.#at);
      this.#resolveStep();
      this.#resolveStep = undefined;
    }
  }

  #stepCallback = async (at: number) => {
    this.#at = at;
    this.#drawDiagram(this.#at);
    return new Promise<void>((resolve) => {
      this.#resolveStep = resolve;
    });
  };

  #createStatic() {
    this.root.add(this.#content);
    this.#content.add(
      grid(this.#size, this.#size, 1, 1, '#00000018'),
      grid(this.#size, this.#size, 10, 1, '#00000030'),
      this.#treeVisual,
      this.#diagramVisual,
    );
  }

  #drawDiagram(at: number) {
    this.#diagramVisual.clear();
    this.diagram.sites.forEach((site) => {
      this.#diagramVisual.add(new Item('circle', { cx: site.x, cy: site.y, r: 0.2, fill: 'gray' }));
    });
    this.#drawBeach(at);
  }

  #drawBeach(at: number) {
    const minY = this.diagram.minY;
    for (let node = minimum(this.diagram.beach.root); node; node = node.value.next) {
      const left = node.value.left;
      const right = node.value.right;
      if (node.value.type === Seg.SITE) {
        this.#drawParabola(<SiteSegment>node.value, at);
      } else {
        this.#diagramVisual.add(
          new Item('line', {
            x1: left.x,
            y1: minY,
            x2: right.x,
            y2: minY,
            stroke: 'orange',
            'vector-effect': 'non-scaling-stroke',
          }),
        );
      }
    }
  }

  #drawParabola(seg: SiteSegment, at: number) {
    const steps = 30;
    const site = seg.site;
    const left = seg.left;
    const right = seg.right;
    const d = (right.x - left.x) / steps;

    if (left.x === right.x) {
      this.#diagramVisual.add(
        new Item('line', {
          x1: site.x,
          y1: site.y,
          x2: site.x,
          y2: this.diagram.minY,
          stroke: 'cyan',
          'vector-effect': 'non-scaling-stroke',
        }),
      );
      return;
    }

    let x1 = left.x;
    const dx = seg.site.x - x1;
    let y1 = (at * at - site.y * site.y - dx * dx) / (2 * (at - site.y));

    for (let i = 1; i <= steps; ++i) {
      const x2 = left.x + d * i;
      const dx = seg.site.x - x2;
      const y2 = (at * at - site.y * site.y - dx * dx) / (2 * (at - site.y));

      this.#diagramVisual.add(
        new Item('line', {
          x1,
          y1,
          x2,
          y2,
          stroke: 'cyan',
          'vector-effect': 'non-scaling-stroke',
        }),
      );
      x1 = x2;
      y1 = y2;
    }
  }

  #drawTree(tree: Tree<number>) {
    this.#treeVisual.clear();
    const h = height(tree.root);
    if (h === 0) return;

    const dy = h > 1 ? (this.#size * 2) / 3 / (h - 1) : 0;
    const y0 = (dy * (h - 1)) / 2;
    const x0 = 0;
    const dx = this.#size / 2;

    this.#drawNode(tree.root, x0, y0, dx, dy);
  }

  #drawNode(node: Node<number> | undefined, x: number, y: number, dx: number, dy: number) {
    if (!node) return;

    const r = 4;

    const valueText = new Item('#text');
    valueText.text = `${node.value}`;
    const valueSpan = new Item('tspan', { x: 0, y: '-0.125em' });
    valueSpan.add(valueText);

    const balanceText = new Item('#text');
    balanceText.text = node.balance < 0 ? '\u21D0' : node.balance === 0 ? '' : '\u21D2';
    const balanceSpan = new Item('tspan', { x: 0, dy: '1em' });
    balanceSpan.add(balanceText);

    const text = new Item('text', { x: 0, y: 0, 'text-anchor': 'middle', class: 'node-text' });
    text.add(valueSpan, balanceSpan);

    const g = new Item('g', { transform: `translate(${x} ${y}) scale(1 -1)` });
    if (node.parent) {
      const d = Math.sqrt(dx * dx + dy * dy);
      const k = Math.max((d - r) / d, 0.1);
      const x2 = node === node.parent.left ? dx : -dx;
      g.add(new Item('line', { x1: 0, y1: 0, x2: x2 * k, y2: -dy * k, stroke: 'black' }));
    }
    g.add(new Item('circle', { r, fill: 'darkred' }), text);

    this.#treeVisual.add(g);

    this.#drawNode(node.left, x - dx / 2, y - dy, dx / 2, dy);
    this.#drawNode(node.right, x + dx / 2, y - dy, dx / 2, dy);
  }
}
