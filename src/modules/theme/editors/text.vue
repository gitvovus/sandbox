<script setup lang="ts">
import { ref } from 'vue';
import { type Text } from '../properties/text';

const { model } = defineProps<{ model: Text }>();

const input = ref();

function keydown(e: KeyboardEvent) {
  if (e.code === 'Enter') {
    e.preventDefault();
    model.text = input.value.value;
  }
}
</script>

<template>
  <textarea
    ref="input"
    v-model.lazy="model.text"
    class="code no-resize"
    type="text"
    rows="2"
    cols="48"
    maxlength="95"
    spellcheck="false"
    @keydown="keydown"
  />
</template>
