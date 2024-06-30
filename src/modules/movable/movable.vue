<script setup lang="ts">
import { Movable } from './movable';
defineProps<{ model: Movable }>();
</script>

<template>
  <div class="movable-container view">
    <wrapper-view
      v-for="(item, i) in model.wrappers"
      :key="item.key"
      :model="item"
      :state="'mini'"
      class="view-wrapper"
    >
      <div v-if="i !== model.expanded" class="anchor right bottom p-2">
        <ui-button class="btn round iconic" @click="model.expand(i)">
          <ui-icon class="gt" />
        </ui-button>
      </div>
    </wrapper-view>
  </div>
</template>

<style lang="scss">
.movable-container {
  container-type: size;
  container-name: movable-container;
}

.view-wrapper {
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
    bottom var(--slow) ease-in-out,
    opacity var(--slow) ease-in-out;

  &.i0 {
    left: 30%;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  &.i1 {
    left: 0;
    top: 0;
    right: 70%;
    bottom: calc(200% / 3);
  }
  &.i2 {
    left: 0;
    top: calc(100% / 3);
    right: 70%;
    bottom: calc(100% / 3);
  }
  &.i3 {
    left: 0;
    top: calc(200% / 3);
    right: 70%;
    bottom: 0;
  }
  &.collapsed {
    z-index: 0;
  }
  &.bounce-one {
    animation: var(--slow) ease-in-out bounce-one;
  }
  &.bounce-two {
    animation: var(--slow) ease-in-out bounce-two;
  }
}

@container movable-container (aspect-ratio < 1.25) {
  .view-wrapper {
    &.i0 {
      left: 0;
      bottom: 30%;
    }
    &.i1 {
      top: 70%;
      right: calc(200% / 3);
      bottom: 0;
    }
    &.i2 {
      left: calc(100% / 3);
      top: 70%;
      right: calc(100% / 3);
      bottom: 0;
    }
    &.i3 {
      left: calc(200% / 3);
      top: 70%;
      right: 0;
    }
  }
}

@keyframes bounce-one {
  from { scale: 1; }
  50% { scale: 0.5; }
  to { scale: 1; }
}
@keyframes bounce-two {
  from { scale: 1; }
  50% { scale: 0.5; }
  to { scale: 1; }
}
</style>
