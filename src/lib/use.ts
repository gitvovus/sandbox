import { computed, onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue';

import { Disposable, Mouse, clamp, mix, onElementEvent } from '@/lib/std';

export function useResizer(
  el: Ref<HTMLElement | undefined>,
  callback: (width: number, height: number) => void,
) {
  const mounted = new Disposable();

  const resize = (entries: ResizeObserverEntry[]) => {
    const { width, height } = entries[0].contentRect;
    callback(width, height);
  };
  const resizer = new ResizeObserver(resize);

  onMounted(() => {
    if (el.value) {
      const value = el.value;
      resizer.observe(value);
      mounted.add(() => resizer.unobserve(value));
    }
  });

  onBeforeUnmount(() => mounted.dispose());
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

  const mounted = new Disposable();

  onMounted(() => {
    if (outer.value && inner.value) {
      mounted.add(
        onElementEvent(outer.value, 'pointerdown', down),
        onElementEvent(outer.value, 'pointermove', move),
      );
    }
  });

  onBeforeUnmount(() => mounted.dispose());

  return { x, y };
}

export function useHorizontal(el: Ref<HTMLElement | undefined>) {
  const horizontal = ref(true);
  const mounted = new Disposable();

  const resize = (entries: ResizeObserverEntry[]) => {
    const { width, height } = entries[0].contentRect;
    horizontal.value = width >= height;
  };
  const resizer = new ResizeObserver(resize);

  onMounted(() => {
    if (el.value) {
      const value = el.value;
      resizer.observe(value);
      mounted.add(() => resizer.unobserve(value));
    }
  });

  onBeforeUnmount(() => mounted.dispose());

  return horizontal;
}

export function useRange(
  outer: Ref<HTMLElement | undefined>,
  inner: Ref<HTMLElement | undefined>,
  props: { modelValue: number; min: number; max: number; step: number },
  emit: (e: 'update:modelValue', value: number) => void,
) {
  const { x, y } = useClamp(outer, inner);
  const horizontal = useHorizontal(outer);

  const percents = computed(() => {
    const range = props.max - props.min;
    const value = 100 * (props.modelValue - props.min);
    return range > 0 ? value / range : 0;
  });

  function toRange(normalized: number) {
    let value = mix(props.min, props.max, normalized);
    const steps = Math.round((value - props.min) / props.step);
    value = clamp(props.min + steps * props.step, props.min, props.max);
    return value;
  }

  function update(normalized: number) {
    emit('update:modelValue', toRange(normalized));
  }

  const mounted = new Disposable();

  onMounted(() => {
    mounted.add(
      watch([x, y], () => {
        if (horizontal.value) {
          update(x.value);
        }
        else {
          update(1 - y.value);
        }
      }),
    );
    if (outer.value) {
      mounted.add(
        onElementEvent(outer.value, 'keydown', (e: KeyboardEvent) => {
          const step = props.step || 1;
          let value: number;
          switch (e.code) {
            case 'ArrowLeft':
            case 'ArrowDown':
              value = Math.max(props.min, props.modelValue - step);
              break;
            case 'ArrowRight':
            case 'ArrowUp':
              value = Math.min(props.max, props.modelValue + step);
              break;
            case 'Home':
              value = props.min;
              break;
            case 'End':
              value = props.max;
              break;
            default:
              return;
          }
          e.stopPropagation();
          if (value !== props.modelValue) {
            emit('update:modelValue', value);
          }
        }),
      );
    }
  });

  onBeforeUnmount(() => mounted.dispose());

  return { horizontal, percents };
}
