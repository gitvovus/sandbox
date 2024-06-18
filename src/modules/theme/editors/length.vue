<script setup lang="ts">
import { Length } from '../properties/length';

defineProps<{ model: Length }>();
</script>

<template>
  <div class="flex gap-2">
    <input v-model.number="model.value" type="text" class="length-value">
    <input v-model="model.unit" type="text" class="length-unit">
  </div>
</template>

<style lang="scss">
.length-value {
  width: 5em;
}
.length-unit {
  width: 3em;
}
</style>
