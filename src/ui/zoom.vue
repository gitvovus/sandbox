<script setup lang="ts">
import { computed } from 'vue';
const props = withDefaults(defineProps<{ scale: number }>(), { scale: 1 });
const inset = computed(() => `${50 - 50 / props.scale}%`);
</script>

<template>
  <div class="absolute" :style="{ inset, scale }">
    <slot />
  </div>
</template>
