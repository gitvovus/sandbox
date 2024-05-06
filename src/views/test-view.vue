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

onBeforeUnmount(() => unmount.dispose());
</script>

<template>
  <div class="view test-view">
    <div class="test-view-outer" ref="outer">
      <div class="test-view-inner" ref="inner">
        <div
          class="test-view-value"
          :style="{ left: `${model.x * 100}%`, top: `${model.y * 100}%` }"
        ></div>
      </div>
    </div>
    <div>
      <ui-button class="btn" @click="model.toggle()">toggle</ui-button>
    </div>
    <div class="test-view-ranges">
      <div
        v-for="i in 2"
        :key="i"
        class="test-view-range"
        :class="model.hor ? 'test-view-row' : 'test-view-col'"
      >
        <ui-test-item :model="model" :data-test="i"></ui-test-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.view.test-view {
  overflow: auto;
  border-radius: 0;
}

$w: 20em;
$h: 4em;

.test-view-outer {
  display: flex;
  background-color: rgba(0 0 0 / 0.2);
  margin: 1em;
  padding: 1em;
  width: $w;
  height: $w;
}

.test-view-inner {
  position: relative;
  background-color: rgba(0 0 0 / 0.2);
  width: 100%;
  height: 100%;
}

$d: 1em;

.test-view-value {
  position: absolute;
  width: $d;
  height: $d;
  border-radius: 0.5 * $d;
  background-color: darkred;
  transform: translate(-50%, -50%);
}

.test-view-ranges {
  display: flex;
  gap: 0.5em;
  margin: 1em auto 1em 1em;
}

.test-view-range {
  transition:
    width 1s,
    height 1s;
}

.test-view-row {
  width: $w;
  height: $h;
}

.test-view-col {
  width: $h;
  height: $w;
}
</style>
