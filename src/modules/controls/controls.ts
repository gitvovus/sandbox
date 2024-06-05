import { ref, shallowReactive, shallowRef } from 'vue';

import { Lorem } from '@/modules/lorem/model';
import { ViewModel } from '@/modules/view-model';

export class Controls extends ViewModel {
  readonly lorem = new Lorem(2);
  readonly paragraphs = [1, 2, 3, 4];

  // buttons
  readonly #showButtons = ref(false);
  readonly #selectedIndex = ref(3);
  readonly radioItems = shallowReactive(
    [...Array(4)].map((item, i) => ({
      name: `item #${i}`,
      value: i,
    })),
  );
  readonly #selectedRadio = shallowRef(this.radioItems[2]);
  readonly checkboxes = shallowReactive([false, true, false, false]);
  readonly #message = ref('nothing');

  // popup
  readonly #popup = ref(false);
  readonly #text = ref('text');

  // accordions
  readonly #expanded = ref(false);
  readonly #expandedGroup = ref<number | undefined>();

  // icons
  readonly #showIcons = ref(false);

  // range
  readonly #showRange = ref(false);
  readonly #rangeValue = ref(24);
  readonly rangeMin = 0;
  readonly rangeMax = 100;
  readonly rangeStep = 2;

  // input
  readonly #showInputs = ref(true);
  readonly #email = ref('email');
  readonly #password = ref('password');

  constructor() {
    super('controls-view');
  }

  get showButtons() {
    return this.#showButtons.value;
  }

  set showButtons(value) {
    this.#showButtons.value = value;
  }

  get selectedIndex() {
    return this.#selectedIndex.value;
  }

  set selectedIndex(value) {
    this.#selectedIndex.value = value;
  }

  get selectedRadio() {
    return this.#selectedRadio.value;
  }

  set selectedRadio(value) {
    this.#selectedRadio.value = value;
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

  get showIcons() {
    return this.#showIcons.value;
  }

  set showIcons(value) {
    this.#showIcons.value = value;
  }

  get showRange() {
    return this.#showRange.value;
  }

  set showRange(value) {
    this.#showRange.value = value;
  }

  get rangeValue() {
    return this.#rangeValue.value;
  }

  set rangeValue(value) {
    this.#rangeValue.value = value;
  }

  get showInputs() {
    return this.#showInputs.value;
  }

  set showInputs(value) {
    this.#showInputs.value = value;
  }

  get email() {
    return this.#email.value;
  }

  set email(value) {
    this.#email.value = value;
  }

  get password() {
    return this.#password.value;
  }

  set password(value) {
    this.#password.value = value;
  }
}
