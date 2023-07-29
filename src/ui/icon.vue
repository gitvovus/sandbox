<script setup lang="ts"></script>

<template>
  <div class="icon"></div>
</template>

<style lang="scss">
@use '@/style/vars' as *;
@use '@/style/icons' as *;

.icon {
  background-color: var(--tx);
  width: 100%;
  height: 100%;
  vertical-align: middle;
  mask-position: center;
  mask-repeat: no-repeat;
  transform: rotate(0);
  transition: transform $transition;
  &.rotated {
    transform: rotate(180deg);
  }
}
</style>
