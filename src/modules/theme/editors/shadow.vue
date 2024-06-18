<script setup lang="ts">
import { Shadow } from '../properties/shadow';

defineProps<{ model: Shadow }>();
</script>

<template>
  <div class="shadow-editor">
    <span>dx</span>
    <length-editor :model="model.dx" />
    <span>dy</span>
    <length-editor :model="model.dy" />
    <span>blur</span>
    <length-editor :model="model.blur" />
    <span>spread</span>
    <length-editor :model="model.spread" />
    <span>color</span>
    <color-editor :model="model.color" />
    <span>inset</span>
    <ui-button v-model="model.inset" class="shadow-cbx" :toggle="['inset', '']">
      <div class="cbx-frame">
        <ui-icon :class="['check', { hidden: !model.inset }]" />
      </div>
    </ui-button>
  </div>
</template>

<style lang="scss">
.shadow-editor {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-auto-rows: min-content;
  gap: 0.125em 0.5em;
}
.shadow-cbx {
  display: flex;
}
</style>
