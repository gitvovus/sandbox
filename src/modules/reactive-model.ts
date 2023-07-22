import { ref, shallowReactive, type Ref } from 'vue';

import { ViewModel } from '@/modules/view-model';

export class ReactiveItem {
  readonly key = Symbol();
  readonly #title = ref('');
  readonly #count = ref(0);

  constructor(title: string, value: number) {
    this.title = title;
    this.count = value;
  }

  get title() {
    return this.#title.value;
  }

  set title(value) {
    this.#title.value = value;
  }

  get count() {
    return this.#count.value;
  }

  set count(value) {
    this.#count.value = value;
  }
}

export class ReactiveModel extends ViewModel {
  mainItem = new ReactiveItem('main-item', 99);
  readonly items = shallowReactive<ReactiveItem[]>([]);
  readonly words = shallowReactive<string[]>([]);
  #gen = 10;

  readonly radioItems = [...Array(4)].map((item, i) => ({ name: `item #${i}` }));
  readonly #radioIndex = ref(0);

  constructor() {
    super('reactive-view');
  }

  get radioIndex() {
    return this.#radioIndex.value;
  }

  set radioIndex(value) {
    this.#radioIndex.value = value;
  }

  addItem() {
    this.items.push(new ReactiveItem(`item #${this.#gen}`, this.#gen));
    ++this.#gen;
  }

  addWord() {
    this.words.push(`word #${this.#gen}`);
    ++this.#gen;
  }

  deleteItem(toDelete: ReactiveItem) {
    this.items.splice(
      this.items.findIndex((item) => item === toDelete),
      1,
    );
  }

  deleteWord(toDelete: string) {
    this.words.splice(
      this.words.findIndex((item) => item === toDelete),
      1,
    );
  }

  replaceItem(toReplace: ReactiveItem) {
    // this.items.splice(this.items.findIndex(item => item === toReplace), 1, new ReactiveItem(`item #${this.#gen}`, this.#gen));
    this.items[this.items.findIndex((item) => item === toReplace)] = new ReactiveItem(`item #${this.#gen}`, this.#gen);
    ++this.#gen;
  }

  replaceWord(toReplace: string) {
    // this.words.splice(this.words.findIndex(item => item === toReplace), 1, `word #${this.#gen}`);
    this.words[this.words.findIndex((item) => item === toReplace)] = `word #${this.#gen}`;
    ++this.#gen;
  }
}
