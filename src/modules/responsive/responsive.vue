<script setup lang="ts">
import { ref } from 'vue';
import { useResizer } from '@/lib/use';
import { Responsive } from './responsive';

defineProps<{ model: Responsive }>();

const root = ref();
const width = ref(0);
const height = ref(0);

useResizer(root, (w, h) => {
  width.value = Math.round(w);
  height.value = Math.round(h);
});
</script>

<template>
  <div ref="root" class="scrollable responsive view">
    <code>
      {{ width }} &times; {{ height }}
    </code>
  </div>
</template>

<style lang="scss">
.responsive {
  border-top: 1px solid rgb(var(--line));
  border-bottom: 1px solid rgb(var(--line));
  padding: 0.5em;
}
</style>
