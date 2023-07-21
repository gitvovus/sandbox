<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import type { SvgModel } from '@/modules/svg-model';

const props = defineProps<{ model: SvgModel }>();
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
    <div class="svg-view">
      <svg viewBox="-10 -10 20 20">
        <circle class="cir-ora" cx="0" cy="0" r="1" />
      </svg>
    </div>
    <!-- <ui-svg-element class="overlay" :model="model.root" /> -->
    <div class="top-left">
      <ui-button class="button" @click.stop="model.test()">Test</ui-button>
    </div>
  </div>
</template>

<style lang="scss">
.svg-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cir-ora {
  fill: orange;
}
</style>
