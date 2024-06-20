<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
import { Disposable, onElementEvent } from '@/lib/std';
import { getFocusableChildren } from '@/lib/dom';
import { useArrowNavigation } from '@/lib/use';

const visible = defineModel<boolean>({ required: true });

const mounted = new Disposable();

const root = ref<HTMLElement>(undefined!);
useArrowNavigation(root, { cycle: true });

function checkVisibility() {
  if (visible.value) {
    nextTick(() => focusFirst());
  }
}

function keyDown(e: KeyboardEvent) {
  switch (e.key) {
    case 'Escape':
      close();
      break;
    default:
      return;
  }
  e.stopPropagation();
  e.preventDefault();
}

function focusFirst() {
  const children = getFocusableChildren(root.value);
  children[0]?.focus();
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

function close() {
  visible.value = false;
}

onMounted(() => {
  mounted.add(
    watchEffect(() => checkVisibility()),
    onElementEvent(root.value, 'keydown', e => keyDown(e)),
  );
});

onBeforeUnmount(() => mounted.dispose());
</script>

<template>
  <div
    ref="root"
    :class="['dropdown', { none: !visible }]"
    tabindex="0"
    @focusout="focusout"
  >
    <slot v-bind="{ close }" />
  </div>
</template>

<style lang="scss">
.dropdown {
  position: absolute;
  overflow: auto;
  z-index: 1;
}
</style>
