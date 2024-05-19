<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watchEffect } from 'vue';
import { DialogModel } from '@/modules/app-model';
import { Disposable } from '@/lib/std';

const { model } = defineProps<{ model: DialogModel }>();

const root = ref<HTMLDialogElement>();
const mounted = new Disposable();

onMounted(() => {
  mounted.add(
    watchEffect(() => {
      switch (model.state) {
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
  <dialog class="test-dialog" ref="root">
    <ui-button class="btn" @click="model.close()">close</ui-button>
  </dialog>
</template>

<style lang="scss">
.test-dialog {
  z-index: 10;
  position: fixed;
  inset: 0;
  margin: auto;
  width: 50%;
  height: 50%;
  border: 1px solid var(--view-border);
  border-radius: var(--view-border-radius);
  box-shadow: var(--view-shadow);
  background-color: var(--view-bg);
}
.test-dialog::backdrop {
  background-color: rgba(0 0 0 / 0.25);
}
</style>
