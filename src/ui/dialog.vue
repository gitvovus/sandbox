<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { Controller } from '@/ui/lib/dialog-controller';

type Props = {
  show: boolean;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
};

const props = defineProps<Props>();

const root = ref();
const controller = new Controller();
let unmount: () => void;

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
  controller.mount(root.value);
  unmount = watch(
    () => props.show,
    (show) => {
      if (show) controller.fit();
    },
  );
});

onBeforeUnmount(() => {
  unmount();
  controller.unmount();
});
</script>

<template>
  <div
    ref="root"
    :class="['dialog', { show }]"
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
  </div>
</template>

<style>
.dialog {
  border-radius: var(--dlg-radius);
  position: fixed;
  visibility: hidden;
  z-index: var(--z-dlg);
}

.dialog.show {
  visibility: visible;
}

.dialog-layout {
  display: grid;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: calc(-var(--dlg-resize));
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
