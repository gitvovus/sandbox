import { ref, type Ref } from 'vue';

import { ViewModel } from '@/modules/view-model';
import { SingleSelection } from '@/lib/ui-models';

export class TestData {
  readonly key = Symbol();
  #name: Ref<string>;
  #value: Ref<number>;

  constructor(name: string, value: number) {
    this.#name = ref(name);
    this.#value = ref(value);
  }

  get name() {
    return this.#name.value;
  }

  set name(value) {
    this.#name.value = value;
  }

  get value() {
    return this.#value.value;
  }

  set value(value) {
    this.#value.value = value;
  }
}

export class Sandbox extends ViewModel {
  readonly #data = [
    new TestData('one', 1),
    new TestData('two', 2),
    new TestData('three', 3),
    new TestData('four', 4),
    new TestData('five', 5),
  ];
  readonly single = new SingleSelection(this.#data);

  constructor() {
    super('sandbox-view');
  }

  test() {
    this.single.selectedItem = undefined;
  }
}
