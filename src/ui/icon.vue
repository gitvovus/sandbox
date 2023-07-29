<script setup lang="ts"></script>

<template>
  <div class="icon"></div>
</template>

<style lang="scss">
.icon {
  background-color: var(--tx);
  width: 100%;
  height: 100%;
  vertical-align: middle;
  mask-position: center;
  mask-repeat: no-repeat;
  transform: rotate(0);
  transition: transform var(--transition);
}

.icon.rotated {
  transform: rotate(180deg);
}

.icon.expand {
  transform: rotate(-90deg);
}

.icon.collapse {
  transform: rotate(90deg);
}

.icon-gt {
  mask-image: url('@/assets/gt.svg');
}

.icon-lt {
  mask-image: url('@/assets/lt.svg');
}
</style>
