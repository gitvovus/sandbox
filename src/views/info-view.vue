<script setup lang="ts">
import type { InfoModel } from '@/modules/info-model';

defineProps<{ model: InfoModel }>();
</script>

<template>
  <div>
    <div class="info-grid">
      <template v-for="(value, key) in model.data" :key="key">
        <div>{{ key }}</div>
        <div>{{ value }}</div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.info-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.25em;
}
</style>
