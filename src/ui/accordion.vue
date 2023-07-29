<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { onAnimationFrame, type Disposer } from '@/lib/std';

const props = defineProps<{ expanded: boolean }>();
const root = ref<HTMLElement>();
const content = ref<HTMLElement>();

let disposer: Disposer | undefined;

onMounted(() => {
  disposer = onAnimationFrame(() => expand(props.expanded));
});

onBeforeUnmount(() => {
  disposer && disposer();
  disposer = undefined;
});

function expand(expanded: boolean) {
  const element = root.value!;
  const height = expanded ? content.value!.scrollHeight + 'px' : '';
  if (element.style.height !== height) {
    element.style.height = height;
  }
}
</script>

<template>
  <div ref="root" class="accordion">
    <div ref="content" class="accordion-content">
      <slot />
    </div>
  </div>
</template>

<style>
.accordion {
  height: 0;
  overflow: hidden;
  transition: height var(--transition);
}

.accordion-content {
  border: 1px solid transparent;
}
</style>
