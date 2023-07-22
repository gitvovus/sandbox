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
    <ui-svg-element class="overlay" :model="model.root" />
    <div class="anchor top left">
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

.morph {
  fill: orange;
}
</style>
