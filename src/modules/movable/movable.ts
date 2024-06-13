import { ref } from 'vue';
import { ViewModel } from '@/modules/view-model';
import { Wrapper } from '@/modules/wrapper/wrapper';

export class Movable extends ViewModel {
  readonly wrappers: Wrapper[];
  readonly #expanded = ref(0);

  constructor(models: ViewModel[]) {
    super('movable-view');
    const classes = [
      ['expanded'],
      ['i0'],
      ['i1'],
      ['i2'],
    ];
    this.wrappers = models.map((item, i) => (new Wrapper(item, classes[i], 'mini')));
    this.wrappers[0].state = 'full';
  }

  get expanded() {
    return this.#expanded.value;
  }

  expand(index: number) {
    if (index === this.expanded) {
      return;
    }

    this.wrappers.forEach(item => item.removeClass('collapsed'));

    const itemToExpand = this.wrappers[index];
    const itemToCollapse = this.wrappers[this.expanded];

    itemToCollapse.setClasses(...itemToExpand.getClasses(), 'collapsed');
    itemToCollapse.state = 'mini';

    itemToExpand.setClasses('expanded');
    itemToExpand.state = 'full';

    this.#expanded.value = index;
  }
}
