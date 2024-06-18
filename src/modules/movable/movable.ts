import { ref } from 'vue';
import { ViewModel } from '@/modules/view-model';
import { Wrapper } from '@/modules/wrapper/wrapper';

export class Movable extends ViewModel {
  readonly wrappers: Wrapper[];
  readonly #expanded = ref(0);
  readonly #idx = new Map<Wrapper, number>();

  constructor(models: ViewModel[]) {
    super('movable-view');
    const classes = [
      ['bounce-one', 'i0'],
      ['bounce-one', 'i1'],
      ['bounce-one', 'i2'],
      ['bounce-one', 'i3'],
    ];
    this.wrappers = models.map((item, i) => (new Wrapper(item, classes[i], 'mini')));
    this.wrappers[0].state = 'full';
    this.wrappers.forEach((item, i) => this.#idx.set(item, i));
  }

  get expanded() {
    return this.#expanded.value;
  }

  expand(index: number) {
    if (index === this.expanded) {
      return;
    }

    this.wrappers.forEach(item => item.removeClass('collapsed'));

    // swap indices, swap related classes, update wrapper-to-index mapping
    const itemToExpand = this.wrappers[index];
    const itemToCollapse = this.wrappers[this.expanded];
    const itemToExpandIdx = this.#idx.get(itemToExpand)!;
    const itemToCollapseIdx = this.#idx.get(itemToCollapse)!;

    itemToExpand.toggleClass(`i${itemToExpandIdx}`, `i${itemToCollapseIdx}`);
    itemToCollapse.toggleClass(`i${itemToExpandIdx}`, `i${itemToCollapseIdx}`);

    this.#idx.set(itemToExpand, itemToCollapseIdx);
    this.#idx.set(itemToCollapse, itemToExpandIdx);

    itemToCollapse.addClass('collapsed');
    itemToCollapse.toggleClass('bounce-one', 'bounce-two');
    itemToCollapse.state = 'mini';

    itemToExpand.addClass('expanded');
    itemToExpand.toggleClass('bounce-one', 'bounce-two');
    itemToExpand.state = 'full';

    this.#expanded.value = index;
  }

  bounce() {
    this.wrappers.forEach(item => item.toggleClass('bounce-one', 'bounce-two'));
  }
}
