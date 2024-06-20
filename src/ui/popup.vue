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
// TODO: clarify 'use'
const props = withDefaults(
  defineProps<{
    anchor?: HTMLElement;
    use?: Record<string, string>;
  }>(), {
    anchor: undefined,
    use: () => ({
      left: 'left',
      top: 'top',
    }),
  });

const root = ref<HTMLElement>(undefined!);
const style = ref<CSSProperties>({});
const mounted = new Disposable();

function checkVisibility() {
  const anchor = props.anchor;
  if (show.value) {
    if (anchor) {
      const { top: t, left: l, width, height } = anchor.getBoundingClientRect();
      const r = l + width;
      const b = t + height;
      const m: Record<string, number> = {
        left: l,
        top: t,
        right: r,
        bottom: b,
        width,
        height,
      };
      const s: Record<string, string> = {};
      for (const key in props.use) {
        s[key] = `${m[props.use[key]]}px`;
      }
      style.value = s;
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
