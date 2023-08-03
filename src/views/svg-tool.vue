<script setup lang="ts">
import { computed, ref } from 'vue';
import { type SvgTool } from '@/modules/svg-tool';

defineProps<{ model: SvgTool }>();

const x = ref(0);
const y = ref(0);
const w = ref(64);
const h = ref(64);

// prettier-ignore
const cursors = [
  { id: 'current',     hotspot: { x: 0,  y: 0  } },
  { id: 'default',     hotspot: { x: 0,  y: 0  } },
  { id: 'move',        hotspot: { x: 13, y: 13 } },
  { id: 'horizontal',  hotspot: { x: 13, y: 13 } },
  { id: 'vertical',    hotspot: { x: 13, y: 13 } },
  { id: 'cross',       hotspot: { x: 13, y: 13 } },
  { id: 'rotate-2d',   hotspot: { x: 13, y: 10 } },
  { id: 'rotate-3d',   hotspot: { x: 12, y: 10 } },
  { id: 'zoom-in',     hotspot: { x: 9,  y: 9  } },
  { id: 'zoom-out',    hotspot: { x: 9,  y: 9  } },
  { id: 'not-allowed', hotspot: { x: 11, y: 11 } },
];

const index = ref(0);
const cursor = computed(() => cursors[index.value]);
</script>

<template>
  <div class="view svg-tool">
    <div class="header">
      <select v-model="index">
        <option v-for="(item, index) in cursors" :key="index" :value="index">{{ item.id }}</option>
      </select>
    </div>
    <div class="cursors-preview">
      <div class="backgrounds">
        <div v-for="color in ['white', 'grey', 'black']" :class="['case', color]" :key="color"></div>
      </div>
      <div v-for="item in cursors.slice(1)" :class="['case', `cursor-${item.id}`]" :key="item.id">{{ item.id }}</div>
    </div>
    <div :class="['preview', `cursor-${cursor.id}`]">
      <template v-for="size in [64, 32]">
        <div v-for="color in ['white', 'grey', 'black']" :class="['case', color]" :key="`${color}-${size}`">
          <svg :width="size" :height="size" :viewBox="`${x} ${y} ${w} ${h}`">
            <use :href="`#${cursor.id}`" />
          </svg>
        </div>
      </template>
    </div>
    <div class="editing">
      <svg :viewBox="`${x - 1} ${y - 1} ${w + 2} ${h + 2}`">
        <defs>
          <g id="current" class="tmp-cursor" opacity="1">
            <path
              d="
                M 1 1 L 2 1 24 23 22 25 15.5 25 19.6 33.2 C 20.7 35.4 14.7 38.4 13.7 36.4 L 9.25 27 L 3.25 33 L 1 33 z
              "
            />
          </g>
          <path
            id="default"
            class="svg-cursor"
            d="M 1 1 L 25 25 L 23 27 22.5 27 L 15.5 27 L 19.6 35.2 C 20.7 37.4 14.7 40.4 13.7 38.4 L 9.25 29 L 3.25 35 L 1 35 z"
          />
          <path
            id="move"
            class="svg-cursor"
            d="
                M 23 23 L 31 23 L 31 31 L 23 31 z
                M 1  27 L 11 17 L 13 17 L 13 23 L 19 23 L 19 31 L 13 31 L 13 37 L 11 37 z
                M 53 27 L 43 37 L 41 37 L 41 31 L 35 31 L 35 23 L 41 23 L 41 17 L 43 17 z
                M 27 1  L 37 11 L 37 13 L 31 13 L 31 19 L 23 19 L 23 13 L 17 13 L 17 11 z
                M 27 53 L 17 43 L 17 41 L 23 41 L 23 35 L 31 35 L 31 41 L 37 41 L 37 43 z
              "
          />
          <path
            id="horizontal"
            class="svg-cursor"
            d="
                M 23 23 L 31 23 L 31 31 L 23 31 z
                M 1  27 L 11 17 L 13 17 L 13 23 L 19 23 L 19 31 L 13 31 L 13 37 L 11 37 z
                M 53 27 L 43 37 L 41 37 L 41 31 L 35 31 L 35 23 L 41 23 L 41 17 L 43 17 z
              "
          />
          <path
            id="vertical"
            class="svg-cursor"
            d="
                M 23 23 L 31 23 L 31 31 L 23 31 z
                M 27 1  L 37 11 L 37 13 L 31 13 L 31 19 L 23 19 L 23 13 L 17 13 L 17 11 z
                M 27 53 L 17 43 L 17 41 L 23 41 L 23 35 L 31 35 L 31 41 L 37 41 L 37 43 z
              "
          />
          <path
            id="cross"
            class="svg-cursor"
            d="
                M 17 23 A 4 4 0 0 1 17 31 L 5 31  A 4 4 0 0 1 5 23 z
                M 31 17 A 4 4 0 0 1 23 17 L 23 5  A 4 4 0 0 1 31 5 z
                M 37 31 A 4 4 0 0 1 37 23 L 49 23 A 4 4 0 0 1 49 31 z
                M 23 37 A 4 4 0 0 1 31 37 L 31 49 A 4 4 0 0 1 23 49 z
              "
          />
          <path
            id="rotate-2d"
            class="svg-cursor"
            d="
                M 19 21 L 19 22 L 10 34 L 1 22  L 1  21 L 7  21 A 20 20 0 0 1 39 5  L 35.4 9.8  A 14 14 0 0 0 13 21 z
                M 35 21 L 35 20 L 44 8  L 53 20 L 53 21 L 47 21 A 20 20 0 0 1 15 37 L 18.6 32.2 A 14 14 0 0 0 41 21 z
              "
          />
          <g id="rotate-3d" class="svg-cursor">
            <path d="M 1 17 A 24 16 0 0 1 49 17 L 49 25 A 24 16 0 0 0 1 25 z" />
            <path d="M 49 25 A 24 16 0 0 1 39.4 37.8 L 39.4 29.8 A 24 16 0 0 0 49 17 z" />
            <path
              d="M 1 17 A 24 16 0 0 0 10.6 29.8 L 10.6 22.8 A 96 64 0 0 0 29 36 A 96 64 0 0 1 10.6 44.8 L 10.6 37.8 A 24 16 0 0 1 1 25 z"
            />
          </g>
          <path
            id="zoom-in"
            class="svg-cursor"
            fill-rule="evenodd"
            d="
                M 1 19 A 18 18 0 1 1 33.4 29.8 L 36 31 L 44 39 A 3.5 3.5 0 0 1 39 44 L 31 36 L 29.8 33.4 A 18 18 0 0 1 1 19 z
                M 6 19 A 13 13 0 0 0 32 19 A 13 13 0 0 0 6 19 z
                M 17 17 v -6 h 4 v 6 h 6 v 4 h -6 v 6 h -4 v -6 h -6 v -4 z
              "
          />
          <path
            id="zoom-out"
            class="svg-cursor"
            fill-rule="evenodd"
            d="
                M 1 19 A 18 18 0 1 1 33.4 29.8 L 36 31 L 44 39 A 3.5 3.5 0 0 1 39 44 L 31 36 L 29.8 33.4 A 18 18 0 0 1 1 19 z
                M 6 19 A 13 13 0 0 0 32 19 A 13 13 0 0 0 6 19 z
                M 11 17 h 16 v 4 h -16 z
              "
          />
          <path
            id="not-allowed"
            class="svg-cursor"
            fill-rule="evenodd"
            d="
                M 1 23 A 22 22 0 0 1 45 23 A 22 22 0 0 1 1 23 z
                M 10.2 32.6 A 16 16 0 0 1 32.6 10.2 z
                M 35.8 13.4 A 16 16 0 0 1 13.4 35.8 z
              "
          />

          <linearGradient id="svg-cursor-fill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: #ffffff" />
            <stop offset="100%" style="stop-color: #e0e0e0" />
          </linearGradient>

          <filter id="svg-cursor-shadow" x="-1" y="-1" width="3" height="3">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="5" dy="2" result="shadow" />
            <feFlood flood-color="black" flood-opacity="0.3" result="color" />
            <feComposite in="color" operator="in" in2="shadow" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <pattern id="svg-grid-fill" viewBox="-1 -1 2 2" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect x="-1" y="-1" width="1" height="1" fill="#c0c0c0" />
            <rect x="0" y="-1" width="1" height="1" fill="#a0a0a0" />
            <rect x="-1" y="0" width="1" height="1" fill="#a0a0a0" />
            <rect x="0" y="0" width="1" height="1" fill="#c0c0c0" />
          </pattern>
        </defs>
        <rect :x="x - 1" :y="y - 1" :width="w + 2" :height="h + 2" fill="url(#svg-grid-fill)" />
        <circle :cx="cursor.hotspot.x * 2 + 1" :cy="cursor.hotspot.y * 2 + 1" r="7" fill="green" />
        <circle :cx="cursor.hotspot.x * 2 + 1" :cy="cursor.hotspot.y * 2 + 1" r="5" fill="yellow" />
        <circle :cx="cursor.hotspot.x * 2 + 1" :cy="cursor.hotspot.y * 2 + 1" r="3" fill="red" />
        <use :href="`#${cursor.id}`" />
      </svg>
    </div>
  </div>
</template>

<style>
.svg-tool {
  background-color: grey;
  display: grid;
  grid-template-rows: 2.5em minmax(0, 1fr);
  grid-template-columns: 240px 1fr auto;
  grid-template-areas:
    'l h r'
    'l c r';
}

.header {
  grid-area: h;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header select {
  border: none;
  margin: 0;
}
.editing {
  grid-area: c;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.cursors-preview {
  grid-area: l;
  position: absolute;
  left: 0;
  top: 0;
  right: 0.5em;
  bottom: 0;
  display: flex;
  flex-direction: column;
  color: black;
}
.cursors-preview .case {
  flex: 1 1 0;
  padding: 5px;
  font-size: 0.75em;
  z-index: 1;
  border-top: 1px solid darkred;
}
.cursors-preview .backgrounds {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
}

.preview {
  grid-area: r;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.preview .case {
  flex: 1 1 0;
  width: 80px;
  border-radius: var(--r);
  box-shadow: 0 0 5px rgb(0 0 0 / 0.5);
  margin: 0.25em 0.5em;
  padding: 0.5em;
}

.tmp-cursor {
  stroke: black;
  stroke-width: 1.75;
  stroke-linejoin: round;
  fill: url(#svg-cursor-fill);
  filter: url(#svg-cursor-shadow);
}
.svg-cursor {
  stroke: black;
  stroke-width: 1.75;
  stroke-linejoin: round;
  fill: url(#svg-cursor-fill);
  filter: url(#svg-cursor-shadow);
}

.white {
  background-color: white;
}
.grey {
  background-color: grey;
}
.black {
  background-color: black;
}
</style>
