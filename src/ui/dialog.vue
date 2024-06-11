<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { Dialog, State } from './lib/dialog';

const { model } = defineProps<{ model: Dialog }>();

const root = ref<HTMLDialogElement>();

onMounted(() => model.mount(root.value!));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <dialog
    ref="root"
    class="dialog dialog-animation"
    :class="{ visible: [State.NON_MODAL, State.MODAL].includes(model.state) }"
    :style="[
      model.draggable
        ? {
          left: `${model.left}px`,
          top: `${model.top}px`,
        }
        : {},
      model.resizable
        ? {
          width: `${model.width}px`,
          height: `${model.height}px`,
        }
        : {},
    ]"
  >
    <div class="dialog-layout">
      <div :class="{ 'nw-resize': model.resizable }" />
      <div :class="{ 'n-resize': model.resizable }" />
      <div :class="{ 'ne-resize': model.resizable }" />
      <div :class="{ 'w-resize': model.resizable }" />
      <div class="dialog-content">
        <slot />
      </div>
      <div :class="{ 'e-resize': model.resizable }" />
      <div :class="{ 'sw-resize': model.resizable }" />
      <div :class="{ 's-resize': model.resizable }" />
      <div :class="{ 'se-resize': model.resizable }" />
    </div>
  </dialog>
</template>

<style lang="scss">
.dialog {
  position: fixed;
  inset: unset;
  border: unset;
  background: unset;
  overflow: unset;
  border-radius: var(--radius-small);
  z-index: var(--z-dlg);

  &::backdrop {
    background-color: rgb(0 0 0 / 0);
    transition: background-color var(--fast);
  }

  &.visible::backdrop {
    background-color: rgb(0 0 0 / 0.25);
  }
}

.dialog-layout {
  display: grid;
  position: absolute;
  inset: 0;
  margin: calc(-1 * var(--radius-medium));
  grid-template-columns: calc(var(--radius-medium) * 2) auto calc(var(--radius-medium) * 2);
  grid-template-rows: calc(var(--radius-medium) * 2) auto calc(var(--radius-medium) * 2);
}

.dialog-content {
  box-shadow: var(--shadow-large);
  z-index: 1;
  margin: calc(-1 * var(--radius-medium));
  border-radius: var(--radius-small);
  overflow: hidden;
  cursor: auto;
}

.dialog-animation {
  transform: scale(0.5);
  opacity: 0;
  transition: transform var(--fast), opacity var(--fast);

  &.visible {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
