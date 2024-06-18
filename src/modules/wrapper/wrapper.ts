import { ref, shallowReactive, type ShallowReactive } from 'vue';
import { ViewModel, type ViewState } from '@/modules/view-model';

export class Wrapper extends ViewModel {
  readonly content: ViewModel;
  readonly classes: ShallowReactive<string[]>;
  readonly #state = ref<ViewState>('full');

  constructor(content: ViewModel, classes: string[] = [], state: ViewState = 'full') {
    super('wrapper-view');
    this.content = content;
    this.classes = shallowReactive(classes);
    this.state = state;
  }

  get state() {
    return this.#state.value;
  }

  set state(value) {
    this.#state.value = value;
  }

  getClasses() {
    return [...this.classes];
  }

  setClasses(...classes: string[]) {
    this.classes.splice(0, this.classes.length, ...classes);
  }

  addClass(name: string) {
    if (!this.classes.includes(name)) {
      this.classes.push(name);
    }
  }

  removeClass(name: string) {
    const index = this.classes.findIndex(item => item === name);
    if (index !== -1) {
      this.classes.splice(index, 1);
    }
  }

  toggleClass(a: string, b: string) {
    if (this.classes.findIndex(item => item === a) === -1) {
      this.addClass(a);
      this.removeClass(b);
    }
    else {
      this.removeClass(a);
      this.addClass(b);
    }
  }
}
