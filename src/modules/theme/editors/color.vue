<script setup lang="ts">
import { type Color } from '../properties/color';

const { model } = defineProps<{ model: Color }>();
</script>

<template>
  <div class="color-editor">
    r
    <ui-range v-model="model.r" class="color-range" :min="0" :max="255" />
    g
    <ui-range v-model="model.g" class="color-range" :min="0" :max="255" />
    b
    <ui-range v-model="model.b" class="color-range" :min="0" :max="255" />
    a
    <ui-range v-model="model.a" class="color-range" :min="0" :max="1" :step="0.01" />
  </div>
</template>

<style lang="scss">
.color-editor {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-auto-rows: min-content;
  gap: 0.125em;
}
.color-range {
  width: 12em;
  height: 1.5em;
}
</style>
