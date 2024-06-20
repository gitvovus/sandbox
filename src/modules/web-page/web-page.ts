import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Disposable, onElementEvent } from '@/lib/std';
import { ViewModel } from '@/modules/view-model';

export class WebPage extends ViewModel {
  readonly root = ref<HTMLElement>();
  readonly #mounted = new Disposable();
  readonly #text = ref('');

  constructor() {
    super('web-page-view');
  }

  use() {
    onMounted(() => this.mount());
    onBeforeUnmount(() => this.unmount());
  }

  mount() {
    this.#mounted.add(
      onElementEvent(this.root.value!, 'scroll', this.#scroll),
    );
  }

  unmount() {
    this.#mounted.dispose();
  }

  get text() {
    return this.#text.value;
  }

  set text(value) {
    this.#text.value = value;
  }

  readonly #scroll = (e: Event) => {
    this.text = (e.target as HTMLElement).scrollTop.toString();
  };
}
