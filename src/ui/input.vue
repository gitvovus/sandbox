<script setup lang="ts">
const model = defineModel<string>();

withDefaults(defineProps<{
  type?: string;
  label?: string;
}>(), {
  type: 'text',
  label: '',
});
</script>

<template>
  <div class="input-wrapper" :data-label="label">
    <input v-model="model" class="input-text" :type="type">
  </div>
</template>

<style lang="scss">
.input-wrapper {
  position: relative;
  padding: 0.5em;
  border-radius: 0.25em;
  color: inherit;
  border: 1px solid currentColor;
  &::after {
    content: attr(data-label);
    position: absolute;
    left: 0.5em;
    top: -0.8em;
    background-color: inherit;
    font-size: smaller;
    padding: 0 3px;
  }
}
.input-text {
  border: none;
  background: unset;
  color: var(--tx-primary);
}
</style>
