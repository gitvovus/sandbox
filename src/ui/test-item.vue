<script setup lang="ts">
import { computed, ref } from 'vue';

import { useRange } from '@/lib/use';

const prop = defineProps<{
  modelValue: number;
  min: number;
  max: number;
  step?: number;
}>();
const emit = defineEmits<{ 'update:modelValue': [value: number] }>();

const outer = ref();
const inner = ref();

const { horizontal } = useRange(outer, inner, prop, emit);
const orientation = computed(() => (horizontal.value ? 'horizontal' : 'vertical'));
const percents = computed(() => (100 * (prop.modelValue - prop.min)) / (prop.max - prop.min));
</script>

<template>
  <div :class="['test-range-outer', orientation]" tabindex="0" ref="outer">
    <div class="test-range-inner" ref="inner">
      <div :class="['test-range-strip', orientation]">
        <div :class="['test-range-track', orientation]"></div>
        <div
          :class="['test-range-fill', orientation]"
          :style="
            horizontal
              ? { width: `calc(${percents}% + 2 * var(--track-r))` }
              : { height: `calc(${percents}% + 2 * var(--track-r))` }
          "
        ></div>
        <div
          :class="['test-range-value', orientation]"
          :style="horizontal ? { left: `${percents}%` } : { bottom: `${percents}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$p: 1em;
$v: 1.25em;
$t: 0.25em;

.test-range-outer {
  --track-r: #{$t};
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 0.2);
  border-radius: 0.5em;
  transition: padding 1s;
  &.horizontal {
    padding: 0 $p;
  }
  &.vertical {
    padding: $p 0;
  }
}

.test-range-inner {
  position: relative;
  flex-grow: 1;
}

.test-range-strip {
  position: absolute;
  &.horizontal {
    left: 0;
    top: 50%;
    right: 0;
  }
  &.vertical {
    left: 50%;
    top: 0;
    bottom: 0;
  }
}

.test-range-track {
  position: absolute;
  left: -$t;
  top: -$t;
  right: -$t;
  bottom: -$t;
  border-radius: $t;
  box-shadow: 0 0 $t black inset;
}

.test-range-fill {
  position: absolute;
  border-radius: $t;
  background-color: rgb(red, 0.25);
  left: -$t;
  bottom: -$t;
  transition: background-color var(--transition);
  &.horizontal {
    top: -$t;
  }
  &.vertical {
    right: -$t;
  }
}

.test-range-outer:hover .test-range-fill,
.test-range-outer:focus-within .test-range-fill {
  background-color: rgb(red, 0.3125);
}

.test-range-value {
  position: absolute;
  width: $v;
  height: $v;
  border-radius: 50%;
  border: 2px solid orange;
  filter: drop-shadow(0 0 3px rgb(0 0 0 / 0.5));
  &.horizontal {
    transform: translate(-50%, -50%);
  }
  &.vertical {
    transform: translate(-50%, 50%);
  }
}
</style>
