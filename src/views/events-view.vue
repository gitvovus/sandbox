<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { type EventsModel } from '@/modules/events-model';

const { model } = defineProps<{ model: EventsModel }>();
const outer = ref();
const inner = ref();

onMounted(() => model.mount(outer.value, inner.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="view p-1">
    <div class="outer" ref="outer">
      <div class="inner" ref="inner">
        <div class="track"></div>
        <div class="run" :style="{ width: `calc(100px + ${model.x * 100}%)` }"></div>
        <div class="pre-x" :style="{ left: `${model.preX * 100}%` }"></div>
        <div class="pre-y" :style="{ top: `${model.preY * 100}%` }"></div>
        <div class="thumb" :style="{ left: `${model.x * 100}%` }"></div>
      </div>
    </div>
    <br />
    <pre>
      x: {{ model.preX.toFixed(2) }}<br>
      y: {{ model.preY.toFixed(2) }}<br>
    </pre>
    <div class="root">
      <div class="path">
        <div :class="['ani', ['init', 'move'][model.transitionState]]"></div>
      </div>
    </div>
    <ui-button class="btn" @click="model.transitionState = 0">start</ui-button>
    <ui-button class="btn" @click="model.transitionState = 1">end</ui-button>
  </div>
</template>

<style scoped lang="scss">
$dt: 1s;

.root {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 1em;
  background-color: rgb(black, 0.25);
}

.path {
  position: absolute;
  left: 100px;
  top: 50%;
  right: 100px;
}

.ani {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 1em;
  background-color: rgb(red, 0.25);
  left: 0;
  transform: translate(-50%, -50%) rotate(0) scale(1);
  transition:
    left $dt,
    transform $dt;

  &.init {
    left: 0;
  }

  &.move {
    left: 100%;
    transform: translate(-50%, -50%) rotate(400deg) scale(2);
  }
}

.outer {
  width: 500px;
  height: 200px;
  padding: 50px 100px;
  border-radius: 1em;
  background-color: rgb(0 0 0 / 0.25);
  user-select: none;
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.track {
  position: absolute;
  left: -50px;
  right: -50px;
  top: 0;
  bottom: 0;
  background-color: rgb(255 255 255 / 0.25);
  border-radius: 100vh;
}

.run {
  position: absolute;
  left: -50px;
  top: 0;
  bottom: 0;
  background-color: rgb(255 0 0 / 0.25);
  border-radius: 100vh;
}

.thumb {
  position: absolute;
  top: 50%;
  width: 150px;
  height: 150px;
  border-radius: 100vh;
  border: 5px solid orange;
  filter: drop-shadow(0 0 5px rgb(0 0 0 / 0.5));
  transform: translate(-50%, -50%);
}

.pre-x {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: darkred;
}

.pre-y {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background-color: darkred;
}

pre {
  line-height: 0.8em;
}
</style>
