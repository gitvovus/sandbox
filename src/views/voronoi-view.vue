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
      <input type="text" class="mini-input" v-model="model.text" />
      <ui-button class="button" no-focus tabindex="-1" @click="model.add()">add</ui-button>
      <ui-button class="button" no-focus tabindex="-1" @click="model.remove()">remove</ui-button>
      <ui-button class="button" no-focus tabindex="-1" @click="model.step()">step</ui-button>
    </div>
  </div>
</template>

<style>
.node-text {
  fill: white;
  font-size: 0.2em;
}
.mini-input {
  align-self: center;
  width: 5em;
}
</style>
