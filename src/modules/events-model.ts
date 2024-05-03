import { Disposable, Mouse, clamp, onElementEvent } from '@/lib/std';
import { ViewModel } from '@/modules/view-model';
import { ref } from 'vue';

export class EventsModel extends ViewModel {
  #mounted = new Disposable();
  #range?: HTMLElement;
  #preX = ref(0);
  #preY = ref(0);
  #x = ref(0);
  #y = ref(0);

  #transitionState = ref(0);

  constructor() {
    super('events-view');
  }

  mount(clamp: HTMLElement, range: HTMLElement) {
    this.#range = range;

    this.#mounted.add(
      onElementEvent(clamp, 'click', this.#click),
      onElementEvent(clamp, 'pointerdown', this.#down),
      onElementEvent(clamp, 'pointermove', this.#move),
    );
  }

  unmount() {
    this.#mounted.dispose();
  }

  get preX() {
    return this.#preX.value;
  }

  get preY() {
    return this.#preY.value;
  }

  get x() {
    return this.#x.value;
  }

  get y() {
    return this.#y.value;
  }

  get transitionState() {
    return this.#transitionState.value;
  }

  set transitionState(value) {
    this.#transitionState.value = value;
  }

  #update(e: MouseEvent) {
    const rangeRect = this.#range!.getBoundingClientRect();
    this.#preX.value = clamp((e.clientX - rangeRect.left) / rangeRect.width, 0, 1);
    this.#preY.value = clamp((e.clientY - rangeRect.top) / rangeRect.height, 0, 1);
  }

  #sync() {
    this.#x.value = this.#preX.value;
    this.#y.value = this.#preY.value;
  }

  readonly #click = (e: MouseEvent) => {
    this.#update(e);
    this.#sync();
  };

  readonly #down = (e: PointerEvent) => {
    if (e.button !== Mouse.LEFT) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.#sync();
  };

  readonly #move = (e: PointerEvent) => {
    this.#update(e);
    if ((e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)) {
      this.#sync();
    }
  };
}
