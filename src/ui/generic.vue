<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type ReactiveNode } from '@/lib/reactive';

const props = defineProps<{ model: ReactiveNode }>();
const root = ref();

onMounted(() => {
  props.model.mount(root.value);
});

onBeforeUnmount(() => {
  props.model.unmount();
});
</script>

<template>
  <template v-if="model.tag !== '#text'">
    <component ref="root" :is="model.tag" v-bind="model.attributes">
      <ui-svg-element v-for="item in model.items" :key="item.key" :model="item" />
    </component>
  </template>
  <template v-else>
    {{ model.text }}
  </template>
</template>
