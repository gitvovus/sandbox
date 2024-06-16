<script setup lang="ts">
import { computed } from 'vue';

const model = defineModel<any>();
const props = defineProps<{
  toggle?: undefined | '' | [any] | [any, any];
}>();

const expanded = computed(() => {
  const toggle = props.toggle;
  if (toggle === undefined || toggle === '') {
    return !!model.value;
  }
  else if (toggle.length === 1) {
    return model.value === toggle[0];
  }
  else if (toggle.length === 2) {
    return model.value === toggle[1];
  }
  return undefined;
});

function click(e: Event) {
  const toggle = props.toggle;
  if (toggle === undefined || toggle === '') {
    model.value = !model.value;
  }
  else if (toggle.length === 1) {
    model.value = model.value === toggle[0] ? undefined : toggle[0];
  }
  else if (toggle.length === 2) {
    model.value = model.value === toggle[0] ? toggle[1] : toggle[0];
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
