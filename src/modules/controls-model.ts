import { ref, shallowReactive, shallowRef } from 'vue';

import { LoremModel } from '@/modules/lorem-model';
import { ViewModel } from '@/modules/view-model';

export class ControlsModel extends ViewModel {
  readonly lorem = new LoremModel(2);
  readonly paragraphs = [1, 2, 3, 4];

  // buttons
  readonly #buttons = ref(false);
  readonly #index = ref(3);
  readonly items = shallowReactive(
    [...Array(4)].map((item, i) => ({
      name: `item #${i}`,
      value: i,
    })),
  );
  readonly #selectedItem = shallowRef(this.items[2]);
  readonly group = shallowReactive([false, true, false, false]);
  readonly #message = ref('nothing');

  // popup
  readonly #popup = ref(false);
  readonly #text = ref('text');

  // accordions
  readonly #expanded = ref(false);
  readonly #expandedGroup = ref<number | undefined>();

  constructor() {
    super('controls-view');
  }

  get buttons() {
    return this.#buttons.value;
  }

  set buttons(value) {
    this.#buttons.value = value;
  }

  get index() {
    return this.#index.value;
  }

  set index(value) {
    this.#index.value = value;
  }

  get selectedItem() {
    return this.#selectedItem.value;
  }

  set selectedItem(value) {
    this.#selectedItem.value = value;
  }

  get message() {
    return this.#message.value;
  }

  set message(value) {
    this.#message.value = value;
  }

  get popup() {
    return this.#popup.value;
  }

  set popup(value) {
    this.#popup.value = value;
  }

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }

  click(message: string) {
    this.message = message;
  }

  get expanded() {
    return this.#expanded.value;
  }

  set expanded(value) {
    this.#expanded.value = value;
  }

  get expandedGroup() {
    return this.#expandedGroup.value;
  }

  set expandedGroup(value) {
    this.#expandedGroup.value = value;
  }
}
