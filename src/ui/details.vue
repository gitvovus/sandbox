<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: any;
  toggle?: undefined | '' | [any] | [any, any];
}>();

const emit = defineEmits<{
  'update:modelValue': [any];
}>();

const expanded = computed(() => {
  const toggle = props.toggle;
  if (toggle === undefined || toggle === '') {
    return !!props.modelValue;
  }
  else if (toggle.length === 1) {
    return props.modelValue === toggle[0];
  }
  else if (toggle.length === 2) {
    return props.modelValue === toggle[1];
  }
  return undefined;
});

function click(e: Event) {
  const toggle = props.toggle;
  if (toggle === undefined || toggle === '') {
    emit('update:modelValue', !props.modelValue);
  }
  else if (toggle.length === 1) {
    emit('update:modelValue', props.modelValue === toggle[0] ? undefined : toggle[0]);
  }
  else if (toggle.length === 2) {
    emit('update:modelValue', props.modelValue === toggle[0] ? toggle[1] : toggle[0]);
  }
}
</script>

<template>
  <div>
    <div @click="click">
      <slot name="header" :expanded="expanded" />
    </div>
    <ui-collapse :expanded="expanded">
      <slot name="content" />
    </ui-collapse>
  </div>
</template>
