<script setup lang="ts">
import { type Color } from '../properties/color';

const { model } = defineProps<{ model: Color }>();
</script>

<template>
  <div class="color-editor">
    <ui-range v-model="model.r" class="color-range" :min="0" :max="255" />
    <ui-range v-model="model.g" class="color-range" :min="0" :max="255" />
    <ui-range v-model="model.b" class="color-range" :min="0" :max="255" />
    <ui-range v-model="model.a" class="color-range" :min="0" :max="1" :step="0.01" />
    <div>{{ model.toRgb() }}</div>
    <div>{{ model.toHex() }}</div>
  </div>
</template>

<style lang="scss">
.color-editor {
  display: flex;
  flex-direction: column;
  padding: 0.25em;
  gap: 0.125em;
}
.color-range {
  width: 12em;
  height: 2em;
}
</style>
