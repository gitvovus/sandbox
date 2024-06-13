<script setup lang="ts">
import { Movable } from './movable';
defineProps<{ model: Movable }>();
</script>

<template>
  <div class="view">
    <wrapper-view
      v-for="(item, i) in model.wrappers"
      :key="item.key"
      :model="item"
      :state="'mini'"
      class="movable"
    >
      <div v-if="i !== model.expanded" class="anchor right bottom p-05">
        <ui-button class="btn round iconic" @click="model.expand(i)">
          <ui-icon class="gt" />
        </ui-button>
      </div>
    </wrapper-view>
  </div>
</template>

<style lang="scss">
.movable {
  position: absolute;
  margin: 0.75em;
  overflow: hidden;
  border-radius: var(--radius-small);
  box-shadow: var(--shadow-small);
  z-index: 1;

  transition:
    left var(--slow) ease-in-out,
    top var(--slow) ease-in-out,
    right var(--slow) ease-in-out,
    bottom var(--slow) ease-in-out;

  &.i0 {
    left: 0;
    top: 0;
    right: 70%;
    bottom: calc(200% / 3);
    animation: var(--slow) ease-in-out bounce-from;
  }

  &.i1 {
    left: 0;
    top: calc(100% / 3);
    right: 70%;
    bottom: calc(100% / 3);
    animation: var(--slow) ease-in-out bounce-from;
  }

  &.i2 {
    left: 0;
    top: calc(200% / 3);
    right: 70%;
    bottom: 0;
    animation: var(--slow) ease-in-out bounce-from;
  }

  &.expanded {
    left: 30%;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    animation: var(--slow) ease-in-out bounce-to;
  }

  &.collapsed {
    z-index: 0;
  }
}

@keyframes bounce-from {
  from {
    scale: 1;
  }
  50% {
    scale: 0.5;
  }
  to {
    scale: 1;
  }
}
@keyframes bounce-to {
  from {
    scale: 1;
  }
  50% {
    scale: 0.5;
  }
  to {
    scale: 1;
  }
}
</style>
