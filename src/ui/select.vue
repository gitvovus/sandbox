<script setup lang="ts">
import { ref } from 'vue';

const model = defineModel<any>();

const anchor = ref<HTMLElement>(undefined!);
const expanded = ref(false);

function toggle() {
  expanded.value = !expanded.value;
}

function selected(value: any) {
  return value === model.value;
}

function select(value: any) {
  model.value = value;
  expanded.value = false;
}
</script>

<template>
  <div ref="anchor" class="select">
    <slot name="button" v-bind="{ expanded, toggle }" class="relative" />
    <div class="relative">
      <ui-dropdown v-model="expanded" class="select-dropdown mt-1">
        <slot name="popup" v-bind="{ select, selected }" />
      </ui-dropdown>
    </div>
  </div>
</template>

<style lang="scss">
.select {
  display: flex;
  flex-direction: column;
}

.select-dropdown {
  left: 0;
  right: 0;
  background-color: rgb(var(--surface));
  box-shadow: var(--shadow-small);
}

// TODO: move
.slct {
  height: 2.25em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  background: rgb(var(--btn-bg) / 0.0625);
  border: 1px solid transparent;
  border-radius: var(--radius-small);
  user-select: none;
  padding-inline: 0.5em;
  transition:
    background-color var(--fast),
    border-color var(--fast),
    color var(--fast);
}

.slct[disabled] {
  opacity: 0.5;
  pointer-events: none;
}

.slct:focus {
  border-color: rgb(var(--btn-bg) / 0.25);
}

.slct[checked] {
  background-color: rgb(var(--btn-bg) / 0.125);
}

.slct:hover:not([checked]) {
  background-color: rgb(var(--btn-bg) / 0.125);
}

.slct:hover[checked] {
  background-color: rgb(var(--btn-bg) / 0.25);
}

.slct.round {
  border-radius: 50vh;
}
</style>
