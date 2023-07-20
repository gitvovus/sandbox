<script setup lang="ts">
import { type ViewContainer } from '@/modules/view-container';

defineProps<{ model: ViewContainer }>();
</script>

<template>
  <div :class="[...model.classes]">
    <component :is="model.content.component" :model="model.content" />
    <slot />
  </div>
</template>
