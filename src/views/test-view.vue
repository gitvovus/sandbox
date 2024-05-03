<script setup lang="ts">
import { Disposable } from '@/lib/std';
import { TestModel, useClamp } from '@/modules/test-model';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const { model } = defineProps<{ model: TestModel }>();

const outer = ref();
const inner = ref();

const { x, y } = useClamp(outer, inner);

const unmount = new Disposable();

onMounted(() => {
  unmount.add(
    watch([x, y], () => {
      model.x = x.value;
      model.y = y.value;
    }),
  );
});

onBeforeUnmount(() => {
  unmount.dispose();
});
</script>

<template>
  <div class="view test-view">
    <div class="outer" ref="outer">
      <div class="inner" ref="inner">
        <div class="value" :style="{ left: `${model.x * 100}%`, top: `${model.y * 100}%` }"></div>
      </div>
    </div>
    <div>
      <ui-button class="btn" @click="model.toggle()">toggle</ui-button>
    </div>
    <div class="flex darker m-1" :class="model.hor ? 'row-' : 'col-'">
      <ui-test-item></ui-test-item>
      <ui-test-item></ui-test-item>
      <ui-test-item></ui-test-item>
      <ui-test-item></ui-test-item>
    </div>
  </div>
</template>

<style scoped lang="scss">
.view.test-view {
  overflow: auto;
  border-radius: 0;
}

$s: 18em;
$m: 3em;

.outer {
  position: relative;
  background-color: rgba(0 0 0 / 0.2);
  margin: 1em;
  width: $s;
  height: $s;
}

.inner {
  position: absolute;
  background-color: rgba(0 0 0 / 0.2);
  left: $m;
  top: $m;
  right: $m;
  bottom: $m;

  &:hover {
    background-color: rgba(0 0 0 / 0.3);
  }
}

$d: 1em;

.value {
  position: absolute;
  width: $d;
  height: $d;
  border-radius: 0.5 * $d;
  background-color: darkred;
  transform: translate(-50%, -50%);
}

.darker {
  background-color: rgba(0 0 0 / 0.2);
}

.row- {
  height: 2em;
}

.col- {
  width: 8em;
  height: 8em;
}
</style>
