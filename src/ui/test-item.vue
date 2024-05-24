<script setup lang="ts">
</script>

<template>
  <dialog
    ref="root"
    class="test-dialog"
  />
</template>

<style lang="scss">
.test-dialog {
  z-index: 10;
  position: fixed;
  inset: 0;
  margin: auto;
  width: 50%;
  height: 50%;
  border: 1px solid var(--view-border);
  border-radius: var(--view-border-radius);
  box-shadow: var(--view-shadow);
  background-color: var(--view-bg);
}
.test-dialog::backdrop {
  background-color: rgba(0 0 0 / 0.25);
}
</style>
