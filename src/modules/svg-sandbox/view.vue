<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import type { SvgSandbox } from '@/modules/svg-sandbox/model';

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
  <div
    ref="root"
    class="view"
  >
    <ui-item
      class="overlay"
      :model="model.root"
    />
    <div class="anchor top right flex">
      <!-- <ui-button class="btn" @click.stop="model.start()">animate</ui-button>
      <ui-button class="btn" @click.stop="model.stop()">stop</ui-button> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
