<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { type ViewState } from '@/modules/view-model';
import { SvgFilters } from './svg-filters';

const { model } = defineProps<{
  model: SvgFilters;
  state: ViewState;
}>();

const root = ref<HTMLElement>(undefined!);

onMounted(() => model.mount(root.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="svg-editor view" :class="{ out: state === 'mini' }">
    <div ref="root" class="relative paper">
      <ui-item class="clip view" :model="model.root" />
    </div>
    <div class="svg-editor-tools surface">
      <div class="properties">
        <div class="section">
          <div class="section-header">
            blur
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">deviation</span>
            {{ (model.blur.attributes.stdDeviation as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.blur.attributes.stdDeviation"
            :min="0" :max="5" :step="0.1"
          />
        </div>

        <div class="section">
          <div class="section-header">
            specular point light
          </div>
          <template v-for="i in ['x', 'y', 'z']" :key="i">
            <div class="flex jc-between">
              <span class="muted tiny">{{ i }}</span>
              {{ (model.specPointLight.attributes[i] as number).toFixed() }}
            </div>
            <ui-range
              v-model="model.specPointLight.attributes[i]"
              :min="-100" :max="100"
            />
          </template>
        </div>

        <div class="section">
          <div class="section-header">
            specular
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">scale</span>
            {{ (model.specular.attributes.surfaceScale as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.specular.attributes.surfaceScale"
            :min="0.1" :max="5" :step="0.1"
          />
          <div class="flex jc-between">
            <span class="muted tiny">const</span>
            {{ (model.specular.attributes.specularConstant as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.specular.attributes.specularConstant"
            :min="0" :max="5" :step="0.1"
          />
          <div class="flex jc-between">
            <span class="muted tiny">exponent</span>
            {{ (model.specular.attributes.specularExponent as number).toFixed() }}
          </div>
          <ui-range
            v-model="model.specular.attributes.specularExponent"
            :min="2" :max="25"
          />
        </div>

        <div class="section">
          <div class="section-header">
            diffuse point light
          </div>
          <template v-for="i in ['x', 'y', 'z']" :key="i">
            <div class="flex jc-between">
              <span class="muted tiny">{{ i }}</span>
              {{ (model.diffPointLight.attributes[i] as number).toFixed() }}
            </div>
            <ui-range
              v-model="model.diffPointLight.attributes[i]"
              :min="-100" :max="100"
            />
          </template>
        </div>

        <div class="section">
          <div class="section-header">
            diffuse
          </div>
          <div class="flex jc-between">
            <span class="muted tiny">scale</span>
            {{ (model.diffuse.attributes.surfaceScale as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.diffuse.attributes.surfaceScale"
            :min="0.1" :max="5" :step="0.1"
          />
          <div class="flex jc-between">
            <span class="muted tiny">const</span>
            {{ (model.diffuse.attributes.diffuseConstant as number).toFixed(2) }}
          </div>
          <ui-range
            v-model="model.diffuse.attributes.diffuseConstant"
            :min="0" :max="1" :step="0.01"
          />
        </div>
      </div>

      <div class="svg-previews">
        <div class="svg-preview">
          <svg class="view" :viewBox="model.viewBox" :style="{ marginBlock: 'auto' }">
            <ui-item :model="model.content" />
          </svg>
        </div>

        <div class="svg-preview svg-zoom-50">
          <svg class="view" :viewBox="model.viewBox" :style="{ marginBlock: 'auto' }">
            <ui-item :model="model.content" />
          </svg>
        </div>

        <div class="svg-preview svg-zoom-25">
          <svg class="view" :viewBox="model.viewBox" :style="{ marginBlock: 'auto' }">
            <ui-item :model="model.content" />
          </svg>
        </div>
      </div>
    </div>

    <transition name="delayed">
      <div v-if="state === 'mini'" />
      <div v-else class="view-header">
        <div class="view-title">
          filters
        </div>
        <div class="view-subtitle">
          light it up!
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
$tool-width: 18em;
.svg-editor {
  display: grid;
  grid-template-columns: 1fr $tool-width;
  grid-template-rows: 1fr;
  user-select: none;
  transition: right var(--fast) ease-in-out calc(var(--slow) - var(--fast));
  &.out {
    right: -#{$tool-width};
    transition-delay: 0s;
  }
}

.svg-editor-tools {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(10em, min-content) minmax(10em, 1fr);
  overflow: auto;
}

.svg-previews {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 2fr 1fr;
  overflow: hidden;
}
.svg-preview {
  position: relative;
  margin-block: 0.25em;
}
.svg-zoom-50 {
  margin-inline: 25%;
}
.svg-zoom-25 {
  margin-inline: 37.5%;
}
</style>
