<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { SvgSandbox } from './svg-sandbox';

const { model } = defineProps<{ model: SvgSandbox }>();
const root = ref();

onMounted(() => model.mount(root.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="view">
    <div ref="root" class="paper clip view">
      <ui-item class="clip view" :model="model.root" />
    </div>
    <div class="top right anchor flex col p-2 gap-2">
      <ui-button class="btn" @click="model.test()">
        test
      </ui-button>
    </div>
  </div>
</template>

<style lang="scss">
</style>
