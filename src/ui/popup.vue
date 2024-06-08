<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch, type WatchStopHandle } from 'vue';

// TODO: use defineModel
const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ 'update:modelValue': [boolean] }>();
const root = ref<HTMLElement>();

let unwatch: WatchStopHandle | undefined;

onMounted(() => {
  unwatch = watch(() => props.modelValue, update, { immediate: true });
});

onBeforeUnmount(() => {
  unwatch?.();
  unwatch = undefined;
});

const update = (visible: boolean) => {
  if (!visible) return;
  const element = root.value!;
  nextTick(() => element.focus());
};

function close() {
  emit('update:modelValue', false);
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
    :class="['popup', { show: modelValue }]"
    tabindex="-1"
    @focusout="focusout"
  >
    <slot v-bind="{ close }" />
  </div>
</template>

<style lang="scss">
.popup {
  position: fixed;
  display: none;
  overflow: auto;
  background-color: var(--bg-primary);
  border: 1px solid rgb(255 255 255 / 0.0625);
  box-shadow: var(--shadow-small);
  z-index: 1;
}

.popup.show {
  display: block;
}
</style>
