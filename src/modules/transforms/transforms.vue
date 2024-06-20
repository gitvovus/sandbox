<script setup lang="ts">
import { Transforms } from './transforms';

defineProps<{ model: Transforms }>();
</script>

<template>
  <div class="transforms view flex ai-center jc-center">
    <div
      class="bg-red box-200 f-72"
      :style="{ transform: `${model.matrix3d}` }"
    >
      Text
    </div>
    <div class="transform-tools top right">
      p: {{ model.p }}
      <ui-range v-model="model.p" :min="200" :max="500" :step="10" />
      a: {{ model.a }}
      <ui-range v-model="model.a" :min="-180" :max="180" />
      z: {{ model.z }}
      <ui-range v-model="model.z" :min="-100" :max="100" />
    </div>
  </div>
</template>

<style lang="scss">
.transforms {
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 0.75);
}
.transform-tools {
  position: absolute;
  display: grid;
  grid-template-columns: 4em 10em;
  grid-auto-rows: min-content;
  margin: 0.5em;
  padding: 0.5em;
  row-gap: 0.5em;
  background-color: rgb(var(--btn-bg) / 0.1);
  border-radius: var(--radius-small);
}
.rrr {
  width: 8em;
  height: 1.5em;
}
</style>
