import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Disposable } from '@/lib/std';
import { ViewModel } from '@/modules/view-model';

export class WebPage extends ViewModel {
  readonly root = ref<HTMLElement>();
  readonly #mounted = new Disposable();
  readonly #menu = ref(false);

  constructor() {
    super('web-page-view');
  }

  use() {
    onMounted(() => this.mount());
    onBeforeUnmount(() => this.unmount());
  }

  mount() {}

  unmount() {
    this.#mounted.dispose();
  }

  get menu() {
    return this.#menu.value;
  }

  set menu(value) {
    this.#menu.value = value;
  }
}
