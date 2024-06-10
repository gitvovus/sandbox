<script setup lang="ts">
import { ref } from 'vue';
import { useResizer } from '@/lib/use';
import { Responsive } from './responsive';

const { model } = defineProps<{ model: Responsive }>();
const root = ref();

useResizer(root, (width, height) => {
  model.width = Math.round(width);
  model.height = Math.round(height);
});
</script>

<template>
  <div ref="root" class="responsive-view">
    <code>
      {{ model.width }} &times; {{ model.height }}
    </code>
  </div>
</template>

<style lang="scss">
.responsive-view {
  position: absolute;
  inset: 0;
  border-top: 1px solid rgb(var(--line));
  border-bottom: 1px solid rgb(var(--line));
  padding: 0.5em;
}
</style>
