<script setup lang="ts">
import { type ViewState } from '@/modules/view-model';
import { Wrapper } from './wrapper';

defineProps<{
  model: Wrapper;
  state: ViewState;
}>();
</script>

<template>
  <div :class="model.classes">
    <component :is="model.content.component" :model="model.content" :state="model.state" />
    <slot v-bind="{ state }" />
  </div>
</template>
