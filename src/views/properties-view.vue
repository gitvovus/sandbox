<script setup lang="ts">
import { type PropertiesModel } from '@/modules/properties-model';

defineProps<{ model: PropertiesModel }>();
</script>

<template>
  <div class="view">
    <div class="properties-view">
      <div>test</div>
      <div class="property-grid">
        <div>test</div>
        <div>test</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.properties-view {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 20%);
}
.property-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 100%;
  overflow: auto;
}
</style>
