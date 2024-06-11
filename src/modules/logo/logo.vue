<script setup lang="ts">
import { Logo } from './logo';

defineProps<{ model: Logo }>();
</script>

<template>
  <div class="logo">
    <svg viewBox="0 0 64 64">
      <defs>
        <path id="logo-yellow" d="M 24,12 32,52 56,36" />
        <path id="logo-blue" d="M 8,8 16,48 40,32" />
        <text id="logo">
          <tspan id="logo-title" class="logo-title" x="32" y="32">
            Demo
          </tspan>
          <tspan class="logo-ext">
            .app
          </tspan>
          <tspan id="logo-vue" class="logo-details" x="32" dy="1.5em">
            Vue.js
          </tspan>
          <tspan id="logo-three" class="logo-details" x="32" dy="1.5em">
            Three.js
          </tspan>
          <tspan id="logo-svg" class="logo-details" x="32" dy="1.5em">
            SVG
          </tspan>
        </text>
        <clipPath id="logo-yellow-clip">
          <use href="#logo-yellow" />
        </clipPath>
        <clipPath id="logo-blue-clip">
          <use href="#logo-blue" />
        </clipPath>
      </defs>

      <!-- ground -->
      <use href="#logo" fill="#00000018" x="6" y="6" />
      <use href="#logo-yellow" fill="#f0600020" x="2" y="2" />
      <use href="#logo-blue" fill="#0060a030" x="4" y="4" />

      <!-- yellow -->
      <use href="#logo-yellow" fill="#f06000c0" />
      <g clip-path="url(#logo-yellow-clip)">
        <use href="#logo" fill="#00000020" x="4" y="4" />
        <use href="#logo-blue" fill="#0060a030" x="2" y="2" />
      </g>

      <!-- blue -->
      <use href="#logo-blue" fill="#0060a0c0" />
      <g clip-path="url(#logo-blue-clip)">
        <use href="#logo" fill="#00000020" x="2" y="2" />
      </g>
      <use id="logo-title" href="#logo" fill="#d0d0d0" />

      <!-- <animate href="#logo-title" attributeName="x" values="128;32" dur="0.75s" fill="freeze" />
      <animate href="#logo-vue" attributeName="x" values="64;32" begin="0.5s" dur="0.5s" fill="freeze" />
      <animate href="#logo-three" attributeName="x" values="64;32" begin="0.75s" dur="0.5s" fill="freeze" />
      <animate href="#logo-svg" attributeName="x" values="64;32" begin="1.0s" dur="0.5s" fill="freeze" /> -->
    </svg>
  </div>
</template>

<style lang="scss">
.logo {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-family: Impact, Arial, sans-serif;
}

.logo-title {
  font-size: 12px;
  text-anchor: middle;
}

.logo-ext {
  font-size: 4px;
}

.logo-details {
  font-size: 3px;
}
</style>
