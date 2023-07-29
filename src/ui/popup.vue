<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch, type WatchStopHandle } from 'vue';

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(['update:modelValue']);
const root = ref<HTMLElement>();

let unwatch: WatchStopHandle | undefined;

onMounted(() => {
  unwatch = watch(() => props.modelValue, update, { immediate: true });
});

onBeforeUnmount(() => {
  unwatch && unwatch();
  unwatch = undefined;
});

const update = (visible: boolean) => {
  if (!visible) return;
  const element = root.value!;
  nextTick(() => element.focus());
};

function click(e: Event) {
  let target = e.target as HTMLElement | null;
  while (target && target !== e.currentTarget) {
    if (target.classList.contains('action')) {
      emit('update:modelValue', false);
      return;
    }
    target = target.parentElement;
  }
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
  emit('update:modelValue', false);
}
</script>

<template>
  <div ref="root" :class="['popup', { show: modelValue }]" @click="click" @focusout="focusout" tabindex="-1">
    <slot />
  </div>
</template>

<style lang="scss">
@use '@/style/vars' as *;

.popup {
  position: fixed;
  display: none;
  overflow: auto;
  background-color: var(--bg);
  border: 1px solid rgba(white, 0.0625);
  box-shadow: $popup-shadow;
  z-index: 1;
  &.show {
    display: block;
  }
}
</style>
