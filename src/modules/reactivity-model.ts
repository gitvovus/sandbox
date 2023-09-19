import { ViewModel } from '@/modules/view-model';
import { ref, shallowReactive } from 'vue';

export class FlatITem {
  key = Symbol();
  name: string;
  count: number;

  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;
  }
}

export class RefItem {
  key = Symbol();
  #name = ref('');
  #count = ref(0);

  constructor(name: string, count: number) {
    this.name = name;
    this.count = count;
  }

  get name() {
    return this.#name.value;
  }

  set name(value) {
    this.#name.value = value;
  }

  get count() {
    return this.#count.value;
  }

  set count(value) {
    this.#count.value = value;
  }
}

export class ReactivityModel extends ViewModel {
  flatArray = shallowReactive<FlatITem[]>([]);
  refArray = shallowReactive<RefItem[]>([]);

  constructor() {
    super('reactivity-view');

    const n = 5;
    for (let i = 0; i < n; ++i) {
      this.flatArray.push(new FlatITem(`name #${i}`, i));
      this.refArray.push(new RefItem(`name #${i}`, i));
    }
  }
}
