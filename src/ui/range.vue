<script setup lang="ts">
import { computed, ref } from 'vue';

import { useRange } from '@/lib/use';

// TODO: use defineModel
const props = withDefaults(defineProps<{
  modelValue: number;
  min?: number;
  max?: number;
  step?: number;
}>(), {
  min: 0,
  max: 100,
  step: 1,
});

const emit = defineEmits<{ 'update:modelValue': [number] }>();

const outer = ref();
const inner = ref();

const { horizontal } = useRange(outer, inner, props, emit);
const orientation = computed(() => (horizontal.value ? 'horizontal' : 'vertical'));
const percents = computed(() => (100 * (props.modelValue - props.min)) / (props.max - props.min));
</script>

<template>
  <div
    ref="outer"
    :class="['range-outer', orientation]"
    tabindex="0"
  >
    <div
      ref="inner"
      class="range-inner"
    >
      <div :class="['range-strip', orientation]">
        <div :class="['range-track', orientation]" />
        <div
          :class="['range-fill', orientation]"
          :style="
            horizontal
              ? { width: `calc(${percents}% + 2 * var(--track-r))` }
              : { height: `calc(${percents}% + 2 * var(--track-r))` }
          "
        />
        <div
          :class="['range-value', orientation]"
          :style="horizontal ? { left: `${percents}%` } : { bottom: `${percents}%` }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$p: 0.75em;
$v: 1em;
$tr: 2px;

.range-outer {
  --track-r: #{$tr};
  display: flex;
  &.horizontal {
    padding: 0 $p;
  }
  &.vertical {
    padding: $p 0;
  }
}

.range-inner {
  position: relative;
  flex-grow: 1;
}

.range-strip {
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

.range-track {
  position: absolute;
  left: -$tr;
  top: -$tr;
  right: -$tr;
  bottom: -$tr;
  border-radius: $tr;
  box-shadow: 0 0 $tr black inset;
}

.range-fill {
  position: absolute;
  border-radius: $tr;
  background-color: rgb(red, 0.25);
  left: -$tr;
  bottom: -$tr;
  transition: background-color var(--fast);
  &.horizontal {
    top: -$tr;
  }
  &.vertical {
    right: -$tr;
  }
}

.range-outer:hover .range-fill,
.range-outer:focus-within .range-fill {
  background-color: rgb(red, 0.5);
}

.range-value {
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
