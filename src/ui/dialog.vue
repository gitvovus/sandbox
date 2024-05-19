<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watchEffect } from 'vue';
import { Controller } from '@/ui/lib/dialog-controller';
import { Disposable } from '@/lib/std';
import { DialogModel, DialogState } from '@/modules/app-model';

type Props = {
  model: DialogModel;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
};

const props = defineProps<Props>();

const root = ref<HTMLDialogElement>();
const controller = new Controller(root);
const mounted = new Disposable();

onMounted(() => {
  if (props.left !== undefined) {
    controller.left = props.left;
  }
  if (props.top !== undefined) {
    controller.top = props.top;
  }
  if (props.width !== undefined) {
    controller.width = props.width;
  }
  if (props.height !== undefined) {
    controller.height = props.height;
  }
  mounted.add(
    controller.mount(),
    watchEffect(() => props.model.state !== DialogState.HIDDEN && controller.fit()),
    watchEffect(() => {
      switch (props.model.state) {
        case 0:
          root.value?.close();
          break;
        case 1:
          root.value?.show();
          break;
        case 2:
          root.value?.showModal();
          break;
      }
    }),
  );
});

onBeforeUnmount(() => mounted.dispose());
</script>

<template>
  <dialog
    ref="root"
    :class="['dialog', { show: model.state !== DialogState.HIDDEN }]"
    :style="{
      left: `${controller.left}px`,
      top: `${controller.top}px`,
      width: `${controller.width}px`,
      height: `${controller.height}px`,
    }"
  >
    <div class="dialog-layout">
      <div class="nw-resize"></div>
      <div class="nn-resize"></div>
      <div class="ne-resize"></div>
      <div class="ww-resize"></div>
      <div class="dialog-content">
        <slot />
      </div>
      <div class="ee-resize"></div>
      <div class="sw-resize"></div>
      <div class="ss-resize"></div>
      <div class="se-resize"></div>
    </div>
  </dialog>
</template>

<style lang="scss">
.dialog {
  border-radius: var(--dlg-radius);
  position: fixed;
  border: 1px solid darkred;
  background: transparent;
  z-index: var(--z-dlg);
  overflow: visible;

  &::backdrop {
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
  margin: calc(-var(--dlg-resize));
  border-radius: var(--dlg-radius);
  overflow: auto;
  cursor: auto;
}

.effect .dialog-content {
  transform: scale(0.5);
  opacity: 0;
  transition: all var(--transition);
}

.show.effect .dialog-content {
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
