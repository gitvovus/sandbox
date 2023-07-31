<script setup lang="ts"></script>

<template>
  <div class="icon"></div>
</template>

<style>
.icon {
  background-color: currentColor;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  mask-position: center;
  mask-repeat: no-repeat;
  transition: transform var(--transition);
}

.r90 {
  transform: rotate(90deg);
}

.r180 {
  transform: rotate(180deg);
}

.r270 {
  transform: rotate(270deg);
}

.r-90 {
  transform: rotate(-90deg);
}

.r-180 {
  transform: rotate(-180deg);
}

.r-270 {
  transform: rotate(-270deg);
}

.icon-down {
  mask-image: url('@/assets/down.svg');
}

.icon-gt {
  mask-image: url('@/assets/gt.svg');
}

.icon-lt {
  mask-image: url('@/assets/lt.svg');
}

.icon-up {
  mask-image: url('@/assets/up.svg');
}
</style>
