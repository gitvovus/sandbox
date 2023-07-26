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
    <ui-item class="overlay" :model="model.root" />
    <div class="anchor bottom right">
      <ui-button class="button" @click.stop="model.test()">Test</ui-button>
    </div>
  </div>
</template>

<style lang="scss">
.gradient-green {
  fill: url('#gradient-green');
}
.gradient-yellow {
  fill: url('#gradient-yellow');
}
.gradient-red {
  fill: url('#gradient-red');
}
</style>
