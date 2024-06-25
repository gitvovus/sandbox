import { ref } from 'vue';

import { Item } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { Camera } from '@/lib/svg/camera';
import { Controller } from '@/lib/svg/controller';
import { comb, prettyGrid } from '@/lib/svg/utils';
import { type Node, Tree, height } from '@/lib/tree';
import { ViewModel } from '@/modules/view-model';

const less = (a: number, b: number) => a < b;

export class BinaryTree extends ViewModel {
  readonly #mounted = new Disposable();
  readonly #size = 22.5;

  readonly #branches = new Item('g');
  readonly #leaves = new Item('g');
  readonly #content = new Item('g', [
    prettyGrid(this.#size / 2, this.#size / 4, 1, 1, '#00000018'),
    prettyGrid(this.#size / 2, this.#size / 4, 5, 1, '#00000040'),
    this.#branches,
    this.#leaves,
  ]);
  readonly root = new Item('svg', [this.#content]);

  readonly #camera = new Camera();
  readonly #controller = new Controller(
    this.root, this.#content, this.#camera,
    { width: this.#size, height: this.#size },
  );

  readonly #tree = new Tree<number>(less);
  readonly #text = ref('');

  constructor() {
    super('binary-tree-view');
    [...Array(7)].forEach((item, i) => this.#tree.insert(i + 1));
    this.#drawTree(this.#tree);
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

  #drawTree(tree: Tree<number>) {
    this.#branches.clear();
    this.#leaves.clear();

    const h = height(tree.root);
    if (h === 0) return;

    const dy = h > 1 ? (this.#size * 2) / 3 / (h - 1) : 0;
    const y0 = -(dy * (h - 1)) / 2;
    const x0 = 0;
    const dx = this.#size / 2;

    this.#drawNode(tree.root, x0, y0, dx, dy);
  }

  #drawNode(node: Node<number> | undefined, x: number, y: number, dx: number, dy: number) {
    if (!node) return;

    const nodeR = 0.5;
    const left = '\u2190';
    const right = '\u2192';
    const balanced = '\u2022';

    const valueText = new Item('#text');
    valueText.text = `${node.value}`;
    const valueSpan = new Item('tspan', { x: 0, y: 0 });
    valueSpan.add(valueText);

    const balanceText = new Item('#text');
    balanceText.text = node.balance < 0 ? left : node.balance > 0 ? right : balanced;
    const balanceSpan = new Item('tspan', { x: 0, dy: '0.875em' });
    balanceSpan.add(balanceText);

    const text = new Item('text', { 'x': 0, 'y': 0, 'text-anchor': 'middle', 'class': 'tree-text' });
    text.add(valueSpan, balanceSpan);

    if (node.parent) {
      const x2 = node === node.parent.left ? dx : -dx;
      this.#branches.add(new Item('line', {
        class: 'tree-branch', x1: 0, y1: 0, x2: x2, y2: -dy,
        transform: `translate(${x} ${y})`,
      }));
    }
    const g = new Item('g', { transform: `translate(${x} ${y})` });
    g.add(comb(nodeR, { class: 'tree-leaf' }), text);
    this.#leaves.add(g);

    this.#drawNode(node.left, x - dx / 2, y + dy, dx / 2, dy);
    this.#drawNode(node.right, x + dx / 2, y + dy, dx / 2, dy);
  }
}
