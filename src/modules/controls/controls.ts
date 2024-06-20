import { ref, shallowReactive, shallowRef } from 'vue';

import { Lorem } from '@/modules/lorem/lorem';
import { ViewModel } from '@/modules/view-model';

export class Controls extends ViewModel {
  readonly lorem = new Lorem(2);
  readonly paragraphs = [1, 2, 3, 4];

  // buttons
  readonly #showButtons = ref(true);
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
  readonly #showDetails = ref(false);
  readonly #showRadioDetails = ref<number | undefined>();

  // icons
  readonly #showIcons = ref(false);

  // range
  readonly #showRanges = ref(false);
  readonly #rangeValue = ref(50);
  readonly rangeMin = 0;
  readonly rangeMax = 100;
  readonly rangeStep = 2;

  // input
  readonly #showInputs = ref(false);
  readonly #email = ref('email');
  readonly #password = ref('password');

  constructor() {
    super('controls-view');
  }

  showAll(value: boolean) {
    this.showButtons = value;
    this.showDetails = value;
    this.showRadioDetails = value ? 0 : undefined;
    this.showIcons = value;
    this.showRanges = value;
    this.showInputs = value;
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

  get showDetails() {
    return this.#showDetails.value;
  }

  set showDetails(value) {
    this.#showDetails.value = value;
  }

  get showRadioDetails() {
    return this.#showRadioDetails.value;
  }

  set showRadioDetails(value) {
    this.#showRadioDetails.value = value;
  }

  get showIcons() {
    return this.#showIcons.value;
  }

  set showIcons(value) {
    this.#showIcons.value = value;
  }

  get showRanges() {
    return this.#showRanges.value;
  }

  set showRanges(value) {
    this.#showRanges.value = value;
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
