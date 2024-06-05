<script setup lang="ts">
const model = defineModel<string>();

withDefaults(defineProps<{
  type?: string;
  title?: string;
}>(), {
  type: 'text',
  title: '',
});
</script>

<template>
  <div class="input-wrapper" :data-title="title">
    <input v-model="model" class="input-text" :type="type">
  </div>
</template>

<style lang="scss">
.input-wrapper {
  position: relative;
  background: var(--view-bg);
  padding: 0.5em;
  border-radius: 0.25em;
  color: orange;
  border: 1px solid currentColor;
  &::after {
    content: attr(data-title);
    position: absolute;
    left: 0.5em;
    top: -0.8em;
    background: inherit;
    font-size: smaller;
    padding: 0 3px;
  }
}
.input-text {
  border: none;
  background: unset;
  color: var(--tx);
}
</style>
