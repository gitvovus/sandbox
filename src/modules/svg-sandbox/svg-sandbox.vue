<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { SvgSandbox } from './svg-sandbox';

const { model } = defineProps<{ model: SvgSandbox }>();
const root = ref();

onMounted(() => {
  model.mount(root.value);
});

onBeforeUnmount(() => {
  model.unmount();
});
</script>

<template>
  <div class="view">
    <div ref="root" class="paper clip view">
      <ui-item class="clip view" :model="model.root" />
    </div>
  </div>
</template>
