<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue';
import { Disposable } from '@/lib/std';

const props = defineProps<{ expanded: boolean }>();
const root = ref<HTMLElement>();
const content = ref<HTMLElement>();

const mounted = new Disposable();
let resizer: ResizeObserver | undefined;

onMounted(() => {
  root.value!.classList.add('mounted');
  resizer = new ResizeObserver(() => {
    root.value!.style.height = content.value!.scrollHeight + 'px';
  });
  mounted.add(watchEffect(() => apply(props.expanded)));
});

onBeforeUnmount(() => {
  root.value!.classList.remove('mounted');
  resizer!.disconnect();
  resizer = undefined;
  mounted.dispose();
});

function apply(expanded: boolean) {
  if (expanded) {
    resizer!.observe(content.value!);
  }
  else {
    root.value!.style.height = '0px';
    resizer!.unobserve(content.value!);
  }
}
</script>

<template>
  <div
    ref="root"
    class="collapse"
  >
    <div
      ref="content"
      class="collapse-content"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.collapse {
  overflow: hidden;
}

.collapse.mounted {
  transition: height var(--transition);
}

.collapse-content {
  display: flow-root;
}
</style>
