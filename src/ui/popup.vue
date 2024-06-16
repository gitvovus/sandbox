<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
import { Disposable } from '@/lib/std';

const model = defineModel<boolean>({ required: true });
const root = ref<HTMLElement>();
const mounted = new Disposable();

onMounted(() => mounted.add(watchEffect(() => {
  if (!model.value) return;
  const element = root.value!;
  nextTick(() => element.focus());
})));

onBeforeUnmount(() => mounted.dispose());

function close() {
  model.value = false;
}

function focusout(e: FocusEvent) {
  const element = root.value!;
  let target = e.relatedTarget as HTMLElement | null;
  while (target) {
    if (target === element) {
      return;
    }
    target = target.parentElement;
  }
  close();
}
</script>

<template>
  <div
    ref="root"
    :class="['popup', { visible: model }]"
    tabindex="-1"
    @focusout="focusout"
  >
    <slot v-bind="{ close }" />
  </div>
</template>

<style lang="scss">
.popup {
  position: absolute;
  display: none;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgb(var(--surface));
  // border: 1px solid rgb(var(--border));
  box-shadow: var(--shadow-small);
  z-index: 1;
}

.popup.visible {
  display: block;
}
</style>
