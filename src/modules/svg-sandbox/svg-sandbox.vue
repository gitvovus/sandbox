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
    <div class="tools top right">
      <ui-range v-model="model.rotation" class="h-range" :min="0" :max="6.28" :step="0.1" />
      <ui-button class="btn" @click="model.test()">
        test
      </ui-button>
    </div>
  </div>
</template>
