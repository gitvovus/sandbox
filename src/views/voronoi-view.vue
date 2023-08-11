<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { VoronoiDemo } from '@/modules/voronoi-demo';

const { model } = defineProps<{ model: VoronoiDemo }>();
const root = ref();

onMounted(() => {
  model.mount(root.value);
});

onBeforeUnmount(() => {
  model.unmount();
});
</script>

<template>
  <div class="view" ref="root">
    <ui-item class="overlay" :model="model.root" />
    <div class="anchor top right flex">
      <!-- <ui-button class="button" @click.stop="model.start()">animate</ui-button>
      <ui-button class="button" @click.stop="model.stop()">stop</ui-button> -->
    </div>
  </div>
</template>

<style></style>
