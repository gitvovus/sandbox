<script setup lang="ts">
import { ref } from 'vue';
import { useHorizontal } from '@/modules/test-model';

const root = ref();
const horizontal = useHorizontal(root);
</script>

<template>
  <div class="hv" ref="root">
    <div class="rng" :class="horizontal ? 'h' : 'v'"></div>
  </div>
</template>

<style scoped lang="scss">
.rng {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
}

.h {
  border-color: darkgreen;
}

.v {
  border-color: darkred;
}

.hv {
  container: hv / size;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}
</style>
