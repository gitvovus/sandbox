<script setup lang="ts">
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watchEffect,
  type CSSProperties,
} from 'vue';
import { getFocusableChildren } from '@/lib/dom';
import { Disposable, onElementEvent } from '@/lib/std';

const show = defineModel<boolean>({ required: true });
const props = defineProps<{ anchor?: HTMLElement }>();

const root = ref<HTMLElement>(undefined!);
const style = ref<CSSProperties>({});
const mounted = new Disposable();

function checkVisibility() {
  const anchor = props.anchor;
  if (show.value) {
    if (anchor) {
      const { left: l, top: t } = anchor.getBoundingClientRect();
      style.value = {
        left: `${l}px`,
        top: `${t}px`,
      };
    }
    root.value.showPopover();
    nextTick(() => focusFirst());
  }
  else {
    root.value.hidePopover();
  }
}

function keyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') close();
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
  show.value = false;
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
    :style="style"
    popover="manual"
    tabindex="0"
    @focusout="focusout"
  >
    <slot v-bind="{ close }" />
  </div>
</template>
