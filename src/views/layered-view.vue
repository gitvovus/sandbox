<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import type { LayeredModel } from '@/modules/layered-model';

const props = defineProps<{ model: LayeredModel }>();
const root = ref();

onMounted(() => {
  props.model.mount(root.value);
});

onBeforeUnmount(() => {
  props.model.unmount();
});
</script>

<template>
  <div class="view" ref="root">
    <ui-svg-element class="overlay" :model="model.root" />
    <div class="top-left">
      <ui-button @click.stop="model.test()">Test</ui-button>
    </div>
  </div>
</template>
