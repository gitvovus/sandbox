<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { type Bicubic } from './bicubic';

const { model } = defineProps<{ model: Bicubic }>();
const root = ref();
const canvas = ref();

onMounted(() => model.mount(root.value, canvas.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="view">
    <div ref="root" class="paper clip view" tabindex="0">
      <canvas ref="canvas" />
    </div>
  </div>
</template>
