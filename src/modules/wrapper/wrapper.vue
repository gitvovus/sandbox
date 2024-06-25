<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { type ViewState } from '@/modules/view-model';
import { Wrapper } from './wrapper';

const { model } = defineProps<{
  model: Wrapper;
  state: ViewState;
}>();

const root = ref<HTMLElement>(undefined!);

onMounted(() => model.mount(root.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div ref="root" :class="model.classes">
    <component :is="model.content.component" :model="model.content" :state="model.state" />
    <slot v-bind="{ state }" />
  </div>
</template>
