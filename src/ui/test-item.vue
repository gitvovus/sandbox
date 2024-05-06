<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useClamp, useHorizontal } from '@/modules/test-model';
import { Disposable } from '@/lib/std';

const { model } = defineProps<{ model: { x: number; y: number } }>();

const outer = ref();
const inner = ref();

const horizontal = useHorizontal(outer);
const { x, y } = useClamp(outer, inner);

const unmount = new Disposable();

const orientation = computed(() => (horizontal.value ? 'horizontal' : 'vertical'));

onMounted(() => {
  unmount.add(
    watch([x, y], () => {
      if (horizontal.value) {
        model.x = x.value;
      } else {
        model.y = 1 - y.value;
      }
    }),
  );
});

onBeforeUnmount(() => unmount.dispose());
</script>

<template>
  <div :class="['test-range-outer', orientation]" ref="outer">
    <div class="test-range-inner" ref="inner">
      <div :class="['test-range-strip', orientation]">
        <div :class="['test-range-track', orientation]"></div>
        <div
          :class="['test-range-fill', orientation]"
          :style="
            horizontal
              ? { width: `calc(${model.x * 100}% + 2 * var(--track-r))` }
              : { height: `calc(${model.y * 100}% + 2 * var(--track-r))` }
          "
        ></div>
        <div
          :class="['test-range-value', orientation]"
          :style="horizontal ? { left: `${model.x * 100}%` } : { bottom: `${model.y * 100}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$p: 1em;
$v: 1.5em;
$t: 0.25em;

.test-range-outer {
  --track-r: #{$t};
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 0.2);
  border-radius: 0.5em;
  transition: padding 1s;
  &.horizontal {
    padding: 0 $p;
  }
  &.vertical {
    padding: $p 0;
  }
}

.test-range-inner {
  position: relative;
  flex-grow: 1;
  background-color: rgba(0 0 0 / 0.2);
}

.test-range-strip {
  position: absolute;
  &.horizontal {
    left: 0;
    top: 50%;
    right: 0;
  }
  &.vertical {
    left: 50%;
    top: 0;
    bottom: 0;
  }
}

.test-range-track {
  position: absolute;
  left: calc(-1 * var(--track-r));
  top: calc(-1 * var(--track-r));
  right: calc(-1 * var(--track-r));
  bottom: calc(-1 * var(--track-r));
  border-radius: var(--track-r);
  box-shadow: 0 0 0.4em black inset;
}

.test-range-fill {
  position: absolute;
  border-radius: var(--track-r);
  background-color: rgb(darkred, 0.25);
  left: calc(-1 * var(--track-r));
  bottom: calc(-1 * var(--track-r));
  &.horizontal {
    top: calc(-1 * var(--track-r));
  }
  &.vertical {
    right: calc(-1 * var(--track-r));
  }
}

.test-range-value {
  position: absolute;
  width: $v;
  height: $v;
  border-radius: 50%;
  border: 2px solid orange;
  filter: drop-shadow(0 0 3px rgb(0 0 0 / 0.5));
  &.horizontal {
    transform: translate(-50%, -50%);
  }
  &.vertical {
    transform: translate(-50%, 50%);
  }
}
</style>
