<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { Logo } from './logo';

const { model } = defineProps<{ model: Logo }>();
onMounted(() => model.mount());
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="logo" @dblclick="model.animate()">
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
  font-family: Impact;
}
</style>
