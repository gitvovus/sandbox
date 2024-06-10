<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { type Bicubic } from './bicubic';

const props = defineProps<{ model: Bicubic }>();
const root = ref();
const canvas = ref();

onMounted(() => {
  props.model.mount(root.value, canvas.value);
});

onBeforeUnmount(() => {
  props.model.unmount();
});
</script>

<template>
  <div ref="root" class="view paper" tabindex="0">
    <canvas ref="canvas" class="three-viewport" />
    <slot />
  </div>
</template>
