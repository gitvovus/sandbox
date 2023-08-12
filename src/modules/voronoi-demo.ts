import { ref } from 'vue';

import { Vec } from '@/lib/bi';
import { Item } from '@/lib/reactive';
import { Disposable } from '@/lib/std';
import { find, insert, printTree, remove, type Node, type Tree, height } from '@/lib/tree';
import { Camera } from '@/modules/svg/camera';
import { Controller } from '@/modules/svg/controller';
import { grid } from '@/modules/svg/utils';
import { ViewModel } from '@/modules/view-model';

const v = (x: number, y: number) => new Vec(x, y);
const less = (a: number, b: number) => a < b;

export class VoronoiDemo extends ViewModel {
  readonly root = new Item('svg');

  readonly #mounted = new Disposable();
  readonly #content = new Item('g');
  readonly #size = 100;
  readonly #camera = new Camera();
  readonly #controller = new Controller(this.root, this.#content, this.#camera);
  readonly #tree: Tree<number> = { less };
  readonly #treeVisual = new Item('g');

  readonly #text = ref('');

  constructor() {
    super('voronoi-view');
    this.#createStatic();
    this.#controller.resize(this.#size, this.#size);

    // this.#testRemove([2, 1, 3, 4], 1);
    // this.#testRemove([3, 2, 4, 1], 4);
    // this.#testRemove([2, 1, 4, 3, 5], 5);
    // this.#testRemove([2, 1, 4, 3, 5], 4);

    [2, 1, 4, 3, 5].forEach((value) => insert(this.#tree, value));
    // remove(this.#tree, find(this.#tree, 4));
    this.#visualize(this.#tree);
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
    insert(this.#tree, Number.parseInt(this.text));
    this.#visualize(this.#tree);
  }

  remove() {
    remove(this.#tree, find(this.#tree, Number.parseInt(this.text)));
    this.#visualize(this.#tree);
  }

  #createStatic() {
    this.root.add(this.#content);
    this.#content.add(
      grid(this.#size - 5, this.#size - 5, 5, 1, '#00000018'),
      grid(this.#size - 5, this.#size - 5, 25, 1, '#00000040'),
      this.#treeVisual,
    );
  }

  #testRemove(values: number[], valueToRemove: number) {
    const tree: Tree<number> = { less: (a: number, b: number) => a < b };
    values.forEach((value) => insert(tree, value));

    this.#print(tree, 'initial:');

    remove(tree, find(tree, valueToRemove));
    this.#print(tree, `removed (${valueToRemove}):`);
  }

  #print(tree: Tree<number>, title: string) {
    const print: string[] = [title];
    printTree('root', tree.root, 0, (prefix, level, node) => {
      const tab = '| ';
      let indent = '';
      for (let i = 0; i < level; ++i) {
        indent += tab;
      }
      print.push(`${indent}${prefix}: value = ${node.value}, balance = ${node.balance}`);
    });
    console.log(print.join('\n'));
  }

  #visualize(tree: Tree<number>) {
    this.#treeVisual.clear();
    const h = height(tree.root);
    if (h === 0) return;

    const dy = h > 1 ? this.#size / 3 / (h - 1) : 0;
    const y0 = (-dy * h) / 2;
    const x0 = 0;
    const dx = this.#size / 2;

    this.#node(tree.root, x0, y0, dx, dy);
  }

  #node(node: Node<number> | undefined, x: number, y: number, dx: number, dy: number) {
    if (!node) return;

    const r = 5;

    const valueText = new Item('#text');
    valueText.text = `${node.value}`;
    const valueSpan = new Item('tspan', { x: 0 });
    valueSpan.add(valueText);

    const balanceText = new Item('#text');
    balanceText.text = `[${node.balance}]`;
    const balanceSpan = new Item('tspan', { x: 0, dy: '1em' });
    balanceSpan.add(balanceText);

    const text = new Item('text', { x: 0, y: 0, 'text-anchor': 'middle', class: 'node-text' });
    text.add(valueSpan, balanceSpan);

    const g = new Item('g', { transform: `translate(${x} ${y})` });
    if (node.parent) {
      const d = Math.sqrt(dx * dx + dy * dy);
      const k = Math.max((d - r) / d, 0.1);
      const x2 = node === node.parent.left ? dx : -dx;
      g.add(new Item('line', { x1: 0, y1: 0, x2: x2 * k, y2: -dy * k, stroke: 'black' }));
    }
    g.add(new Item('circle', { r, fill: 'darkred' }), text);

    this.#treeVisual.add(g);

    this.#node(node.left, x - dx / 2, y + dy, dx / 2, dy);
    this.#node(node.right, x + dx / 2, y + dy, dx / 2, dy);
  }
}
