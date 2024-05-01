<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import type { ImagesModel } from '@/modules/images-model';

const { model } = defineProps<{ model: ImagesModel }>();
const root = ref();

onMounted(() => {
  model.mount(root.value);
});

onBeforeUnmount(() => {
  model.unmount();
});
</script>

<template>
  <div class="view">
    <div class="overlay" ref="root">
      <ui-item class="overlay" :model="model.root" />
    </div>
    <div class="anchor top right flex">
      <ui-range-styled
        :min="0"
        :max="model.images.length - 1"
        :step="1"
        v-model="model.selectedIndex"
      ></ui-range-styled>
    </div>
  </div>
</template>

<style></style>
