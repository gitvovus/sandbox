<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Logo } from './logo';

const { model } = defineProps<{ model: Logo }>();

const root = ref<HTMLElement>(undefined!);

onMounted(() => model.mount(root.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div ref="root" class="logo ff-header fw-header" @dblclick="model.animate()">
    <ui-item :model="model.root" />
  </div>
</template>

<style lang="scss">
.logo {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>
