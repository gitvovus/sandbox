<script setup lang="ts">
import { LogoModel } from '@/modules/logo-model';

defineProps<{ model: LogoModel }>();
</script>

<template>
  <div class="logo-wrapper">
    <svg viewPort="0 0 64 64" viewBox="0 0 64 64" preserveAspectRatio="xMinYMin meet">
      <defs>
        <path id="test-shape" d="M 0,0 20,0 20,20 0,20z" />
        <use id="test-ref" href="#test-shape" />
        <clipPath id="test-clip">
          <use href="#test-ref" fill="white" />
        </clipPath>
        <mask id="test-mask">
          <use href="#test-ref" fill="white" />
        </mask>

        <path id="logo-yellow" d="M 24,12 32,52 56,36" />
        <path id="logo-blue" d="M 8,8 16,48 40,32" />
        <text id="logo">
          <tspan id="logo-title" class="logo-title" x="32" y="32">Demo</tspan>
          <tspan class="logo-ext">.app</tspan>
          <tspan id="logo-vue" class="logo-details" x="32" dy="1.5em">Vue.js</tspan>
          <tspan id="logo-three" class="logo-details" x="32" dy="1.5em">Three.js</tspan>
          <tspan id="logo-svg" class="logo-details" x="32" dy="1.5em">SVG</tspan>
        </text>
        <clipPath id="yellow-clip">
          <use href="#logo-yellow" />
        </clipPath>
        <clipPath id="blue-clip">
          <use href="#logo-blue" />
        </clipPath>
      </defs>
      <!-- ground -->
      <use href="#logo" fill="#00000018" x="6" y="6" />
      <use href="#logo-blue" fill="#0060a030" x="4" y="4" />
      <use href="#logo-yellow" fill="#f0600020" x="2" y="2" />
      <!-- yellow -->
      <use href="#logo-yellow" fill="#f06000c0" />
      <g clip-path="url(#yellow-clip)">
        <use href="#logo" x="4" y="4" fill="#00000020" />
        <use href="#logo-blue" x="2" y="2" fill="#0060a030" />
      </g>
      <!-- blue -->
      <use href="#logo-blue" fill="#0060a0c0" />
      <g clip-path="url(#blue-clip)">
        <use href="#logo" x="2" y="2" fill="#00000020" />
      </g>
      <use id="logo-title" href="#logo" fill="var(--tx)" />

      <!-- <use id="test-use" href="#test-ref" fill="darkred" />
      <g mask="url(#test-mask)">
        <circle cx="20" cy="20" r="15" fill="orange" />
      </g> -->

      <!-- <animate href="#logo-title" attributeName="x" values="128;32" dur="0.75s" fill="freeze" />
      <animate href="#logo-vue" attributeName="x" values="64;32" begin="0.5s" dur="0.5s" fill="freeze" />
      <animate href="#logo-three" attributeName="x" values="64;32" begin="0.75s" dur="0.5s" fill="freeze" />
      <animate href="#logo-svg" attributeName="x" values="64;32" begin="1.0s" dur="0.5s" fill="freeze" /> -->
    </svg>
  </div>
</template>

<style lang="scss">
.logo-wrapper {
  position: absolute;
  margin: 25vh 25vw;
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  user-select: none;
}

.logo-title {
  font-size: 12px;
  font-weight: bold;
  text-anchor: middle;
}

.logo-ext {
  font-size: 4px;
  font-weight: bold;
}

.logo-details {
  font-size: 3px;
}
</style>
