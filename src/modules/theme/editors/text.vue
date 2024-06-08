<script setup lang="ts">
import { ref } from 'vue';
import { type Text } from '../properties/text';

const { model } = defineProps<{ model: Text }>();

const input = ref();

function keydown(e: KeyboardEvent) {
  if (e.code === 'Enter') {
    // e.preventDefault();
    model.text = input.value.value;
  }
}
</script>

<template>
  <textarea
    ref="input"
    v-model.lazy="model.text"
    class="text-editor code"
    type="text"
    rows="5"
    maxlength="95"
    spellcheck="false"
    @keydown="keydown"
  />
</template>

<style lang="scss">
.text-editor {
  position: absolute;
  inset: 0;
  resize: none;
  background-color: rgb(0 0 0 / 0.1);
}
</style>
