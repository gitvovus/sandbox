<script setup lang="ts">
import { Disposable } from '@/lib/std';
import { useClamp } from '@/lib/use';
import { TestModel } from '@/modules/test-model';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

const { model } = defineProps<{ model: TestModel }>();

const outer = ref();
const inner = ref();

const { x, y } = useClamp(outer, inner);

const mounted = new Disposable();

onMounted(() => {
  mounted.add(
    watch([x, y], () => {
      model.x = x.value;
      model.y = 1 - y.value;
    }),
  );
});

onBeforeUnmount(() => mounted.dispose());
</script>

<template>
  <div class="view test-view">
    <div class="test-view-grid">
      <div class="test-view-outer" ref="outer">
        <div class="test-view-inner" ref="inner">
          <div
            class="test-view-value"
            :style="{ left: `${model.x * 100}%`, bottom: `${model.y * 100}%` }"
          ></div>
        </div>
      </div>
      <ui-test-item v-model="model.y" :min="0" :max="1" :step="0.1" />
      <div class="test-view-range" :class="model.horizontal ? 'test-view-row' : 'test-view-col'">
        <ui-test-item v-if="model.horizontal" v-model="model.x" :min="0" :max="1" :step="0.1" />
        <ui-test-item v-else v-model="model.y" :min="0" :max="1" :step="0.1" />
      </div>
      <ui-test-item v-model="model.x" :min="0" :max="1" :step="0.1" />
      <br />
      <div>
        <ui-button class="btn" @click="model.toggle()">toggle</ui-button>
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
$h: 2em;
$v: 1.25em;

.test-view-grid {
  display: grid;
  margin: 1em;
  gap: 1em;
  grid-template-columns: $w $h $w;
  grid-template-rows: $w $h;
}

.test-view-outer {
  display: flex;
  background-color: rgba(0 0 0 / 0.2);
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

.test-view-value {
  position: absolute;
  width: $v;
  height: $v;
  border-radius: 50vh;
  border: 2px solid orange;
  filter: drop-shadow(0 0 3px rgb(0 0 0 / 0.5));
  transform: translate(-50%, 50%);
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
