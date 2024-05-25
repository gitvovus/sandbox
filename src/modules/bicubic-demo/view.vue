<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { type BicubicDemo } from '@/modules/bicubic-demo/model';

const props = defineProps<{ model: BicubicDemo }>();
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
  <div
    ref="root"
    class="view"
    tabindex="0"
  >
    <canvas
      ref="canvas"
      class="three-viewport"
    />
    <slot />
  </div>
</template>
