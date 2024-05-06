<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useClamp, useHorizontal } from '@/modules/test-model';
import { Disposable } from '@/lib/std';

const { model } = defineProps<{ model: { x: number; y: number } }>();

const outer = ref();
const inner = ref();

const horizontal = useHorizontal(outer);
const { x, y } = useClamp(outer, inner);

const unmount = new Disposable();

onMounted(() => {
  unmount.add(
    watch([x, y], () => {
      if (horizontal.value) {
        model.x = x.value;
      } else {
        model.y = y.value;
      }
    }),
  );
});

onBeforeUnmount(() => unmount.dispose());
</script>

<template>
  <div :class="['range-outer', horizontal ? 'range-outer-h' : 'range-outer-v']" ref="outer">
    <div class="range-inner" ref="inner">
      <div
        class="range-value"
        :style="{ left: `${model.x * 100}%`, top: `${model.y * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
.range-outer {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 0.2);
  border-radius: 0.5em;
  transition: padding 1s;
}
.range-outer-h {
  padding: 0 1em;
}
.range-outer-v {
  padding: 1em 0;
}
.range-inner {
  position: relative;
  flex-grow: 1;
  background-color: rgba(0 0 0 / 0.2);
}

$d: 1em;
.range-value {
  position: absolute;
  width: $d;
  height: $d;
  border-radius: 0.5 * $d;
  background-color: darkred;
  transform: translate(-50%, -50%);
}
</style>
