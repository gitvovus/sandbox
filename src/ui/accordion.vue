<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
import { type Disposer } from '@/lib/std';

const props = defineProps<{ expanded: boolean }>();
const root = ref<HTMLElement>();
const content = ref<HTMLElement>();

let disposer: Disposer | undefined;
let observer: ResizeObserver | undefined;

onMounted(() => {
  root.value!.classList.add('mounted');
  observer = new ResizeObserver(() => {
    root.value!.style.height = content.value!.scrollHeight + 'px';
  });
  disposer = watchEffect(() => apply(props.expanded));
});

onBeforeUnmount(() => {
  root.value!.classList.remove('mounted');
  observer!.disconnect();
  observer = undefined;
  disposer!();
  disposer = undefined;
});

function apply(expanded: boolean) {
  if (expanded) {
    observer!.observe(content.value!);
  } else {
    root.value!.style.height = '0px';
    observer!.unobserve(content.value!);
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
  overflow: hidden;
}

.accordion.mounted {
  transition: height var(--transition);
}

.accordion-content {
  display: flow-root;
}
</style>
