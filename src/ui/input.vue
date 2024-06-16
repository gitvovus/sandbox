<script setup lang="ts">
const model = defineModel<string>();

type Class = string | object | Class[];

withDefaults(defineProps<{
  type?: string;
  label?: string;
  input?: Class;
  decorator?: Class;
}>(), {
  type: 'text',
  label: '',
  input: '',
  decorator: '',
});
</script>

<template>
  <div class="input">
    <div :class="['input-decorator', decorator]" :label="label" />
    <input v-model="model" :type="type" :class="input">
  </div>
</template>

<style lang="scss">
.input {
  position: relative;
  & input {
    position: relative;
  }
}
.input-decorator {
  position: absolute;
  inset: 0;
  &::after {
    content: attr(label);
    position: absolute;
    left: 0.5em;
    top: -0.75em;
    background-color: inherit;
    font-size: 12px;
    padding-inline: 0.25em;
  }
}
</style>
