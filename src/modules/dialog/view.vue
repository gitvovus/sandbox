<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { Dialog, State } from './model';

const { model } = defineProps<{ model: Dialog }>();

const root = ref<HTMLDialogElement>();

onMounted(() => model.mount(root.value!));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <dialog
    ref="root"
    :class="['dialog', { show: [State.NON_MODAL, State.MODAL].includes(model.state) }]"
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
      <div :class="{ 'nn-resize': model.resizable }" />
      <div :class="{ 'ne-resize': model.resizable }" />
      <div :class="{ 'ww-resize': model.resizable }" />
      <div class="dialog-content">
        <slot />
      </div>
      <div :class="{ 'ee-resize': model.resizable }" />
      <div :class="{ 'sw-resize': model.resizable }" />
      <div :class="{ 'ss-resize': model.resizable }" />
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
  border-radius: var(--dlg-radius);
  z-index: var(--z-dlg);

  &::backdrop {
    background-color: rgb(0 0 0 / 0);
    transition: background-color var(--transition);
  }

  &.show::backdrop {
    background-color: rgb(0 0 0 / 0.25);
  }
}

.dialog-layout {
  display: grid;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: calc(-1 * var(--dlg-resize));
  grid-template-columns: calc(var(--dlg-resize) * 2) auto calc(var(--dlg-resize) * 2);
  grid-template-rows: calc(var(--dlg-resize) * 2) auto calc(var(--dlg-resize) * 2);
}
.dialog-content {
  box-shadow: var(--dlg-shadow);
  z-index: 1;
  margin: calc(-1 * var(--dlg-resize));
  border-radius: var(--dlg-radius);
  overflow: auto;
  cursor: auto;
}

.effect {
  transform: scale(0.5);
  opacity: 0;
  transition:
    transform var(--transition),
    opacity var(--transition);
}

.show.effect {
  transform: scale(1);
  opacity: 1;
}

.nw-resize {
  cursor: nw-resize;
}
.nn-resize {
  cursor: n-resize;
}
.ne-resize {
  cursor: ne-resize;
}
.ww-resize {
  cursor: w-resize;
}
.ee-resize {
  cursor: e-resize;
}
.sw-resize {
  cursor: sw-resize;
}
.ss-resize {
  cursor: s-resize;
}
.se-resize {
  cursor: se-resize;
}
</style>
