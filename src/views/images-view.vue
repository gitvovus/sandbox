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
    <div class="anchor top right flex column">
      <ui-range-styled
        :min="0"
        :max="model.images.length - 1"
        :step="1"
        v-model="model.selectedIndex"
      />
      <ui-range-styled :min="0" :max="200" :step="1" v-model="model.brightness" />
      <ui-range-styled :min="0" :max="200" :step="1" v-model="model.contrast" />
      <ui-range-styled :min="0" :max="100" :step="1" v-model="model.grayscale" />
    </div>
  </div>
</template>

<style></style>
