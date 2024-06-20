<script setup lang="ts">
import { Transforms } from './transforms';

defineProps<{ model: Transforms }>(); // perspective(${model.p}px)
</script>

<template>
  <div class="transforms view flex ai-center jc-center">
    <div
      class="bg-red box-200 f-72"
      :style="{ transform: `${model.matrix3d} translateZ(100px)` }"
    >
      Text
    </div>
    <div class="tools col top right gap-2 ai-center">
      <div class="flex gap-2">
        <div>
          p: {{ model.p }}
        </div>
        <div>
          a: {{ model.a }}
        </div>
      </div>
      <div class="flex gap-2">
        <ui-range v-model="model.p" class="rrr" :min="200" :max="500" :step="10" />
        <ui-range v-model="model.a" class="rrr" :min="-180" :max="180" />
      </div>
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
.rrr {
  width: 8em;
  height: 1.5em;
}
</style>
