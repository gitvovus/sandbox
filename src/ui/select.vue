<script setup lang="ts">
import { ref } from 'vue';

const model = defineModel<any>();

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
  <div class="select">
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
</style>
