import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

import { ViewModel } from '@/modules/view-model';
import { Disposable, Mouse, clamp, onElementEvent } from '@/lib/std';

export class TestModel extends ViewModel {
  #x = ref(0);
  #y = ref(0);
  #hor = ref(true);

  constructor() {
    super('test-view');
  }

  get x() {
    return this.#x.value;
  }

  set x(value) {
    this.#x.value = value;
  }

  get y() {
    return this.#y.value;
  }

  set y(value) {
    this.#y.value = value;
  }

  get hor() {
    return this.#hor.value;
  }

  toggle() {
    this.#hor.value = !this.#hor.value;
  }
}

export function useClamp(outer: Ref<HTMLElement | undefined>, inner: Ref<HTMLElement | undefined>) {
  const x = ref(0);
  const y = ref(0);

  const preX = ref(0);
  const preY = ref(0);

  const sync = () => {
    x.value = preX.value;
    y.value = preY.value;
  };

  const update = (e: MouseEvent) => {
    const rect = inner.value!.getBoundingClientRect();
    preX.value = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    preY.value = clamp((e.clientY - rect.top) / rect.height, 0, 1);
  };

  const down = (e: PointerEvent) => {
    if (e.button !== Mouse.LEFT) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    sync();
  };

  const move = (e: PointerEvent) => {
    update(e);
    if ((e.currentTarget as HTMLElement)?.hasPointerCapture(e.pointerId)) {
      sync();
    }
  };

  const unmount = new Disposable();

  onMounted(() => {
    if (outer.value && inner.value) {
      unmount.add(
        onElementEvent(outer.value, 'pointerdown', down),
        onElementEvent(outer.value, 'pointermove', move),
      );
    }
  });

  onBeforeUnmount(() => unmount.dispose());

  return { x, y };
}

export function useResizer(
  el: Ref<HTMLElement | undefined>,
  callback: (width: number, height: number) => void,
) {
  const unmount = new Disposable();

  const resize = (entries: ResizeObserverEntry[]) => {
    const { width, height } = entries[0].contentRect;
    callback(width, height);
  };
  const resizer = new ResizeObserver(resize);

  onMounted(() => {
    if (el.value) {
      const value = el.value;
      resizer.observe(value);
      unmount.add(() => resizer.unobserve(value));
    }
  });

  onBeforeUnmount(() => unmount.dispose());
}

export function useHorizontal(el: Ref<HTMLElement | undefined>) {
  const horizontal = ref(true);
  const unmount = new Disposable();

  const resize = (entries: ResizeObserverEntry[]) => {
    const { width, height } = entries[0].contentRect;
    horizontal.value = width >= height;
  };
  const resizer = new ResizeObserver(resize);

  onMounted(() => {
    if (el.value) {
      const value = el.value;
      resizer.observe(value);
      unmount.add(() => resizer.unobserve(value));
    }
  });

  onBeforeUnmount(() => unmount.dispose());

  return horizontal;
}
