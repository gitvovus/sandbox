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
      <svg viewBox="-26 -26 52 52">
        <path
          d="M 20,-22 c 4,0 4,0 4,4 v 16 c 0,4 0,4 -4,4 h -40 c -4,0 -4,0 -4,-4 v -16 c 0,-4 0,-4, 4,-4 z"
          fill="#00000040"
        />
        <path
          d="M -14,5 c 4,0 4,0 4,4 v 7 c 0,4 0,4 -4,4 h -6 c -4,0 -4,0 -4,-4 v -7 c 0,-4 0,-4, 4,-4 z"
          fill="#00000040"
        />
        <path
          d="M 3,5 c 4,0 4,0 4,4 v 7 c 0,4 0,4 -4,4 h -6 c -4,0 -4,0 -4,-4 v -7 c 0,-4 0,-4, 4,-4 z"
          fill="#00000040"
        />
        <path
          d="M 20,5 c 4,0 4,0 4,4 v 7 c 0,4 0,4 -4,4 h -6 c -4,0 -4,0 -4,-4 v -7 c 0,-4 0,-4, 4,-4 z"
          fill="#00000040"
        />
      </svg>
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
