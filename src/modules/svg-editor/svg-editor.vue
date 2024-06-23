<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { SvgEditor } from './svg-editor';

const { model } = defineProps<{ model: SvgEditor }>();
const root = ref();

onMounted(() => model.mount(root.value));
onBeforeUnmount(() => model.unmount());
</script>

<template>
  <div class="svg-editor view">
    <div ref="root" class="relative paper">
      <ui-item class="clip view" :model="model.root" />
    </div>
    <div class="svg-tools surface">
      <div class="svg-properties">
        <div class="svg-section">
          <div class="svg-section-header">
            blur
          </div>
          <div class="flex jc-between">
            <span class="svg-small">deviation</span>
            {{ (model.blur.attributes.stdDeviation as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.blur.attributes.stdDeviation"
            :min="0" :max="5" :step="0.1"
          />
        </div>

        <div class="svg-section">
          <div class="svg-section-header">
            distant light
          </div>
          <div class="flex jc-between">
            <span class="svg-small">azimuth</span>
            {{ (model.specDistantLight.attributes.azimuth as number).toFixed() }}
          </div>
          <ui-range
            v-model="model.specDistantLight.attributes.azimuth"
            :min="-180" :max="180"
          />
          <div class="flex jc-between">
            <span class="svg-small">elevation</span>
            {{ (model.specDistantLight.attributes.elevation as number).toFixed() }}
          </div>
          <ui-range
            v-model="model.specDistantLight.attributes.elevation"
            :min="10" :max="100"
          />
        </div>

        <div class="svg-section">
          <div class="svg-section-header">
            point light
          </div>
          <div class="flex jc-between">
            <span class="svg-small">x</span>
            {{ (model.pointLight.attributes.x as number).toFixed() }}
          </div>
          <ui-range
            v-model="model.pointLight.attributes.x"
            :min="-100" :max="100"
          />
          <div class="flex jc-between">
            <span class="svg-small">y</span>
            {{ (model.pointLight.attributes.y as number).toFixed() }}
          </div>
          <ui-range
            v-model="model.pointLight.attributes.y"
            :min="-100" :max="100"
          />
          <div class="flex jc-between">
            <span class="svg-small">z</span>
            {{ (model.pointLight.attributes.z as number).toFixed() }}
          </div>
          <ui-range
            v-model="model.pointLight.attributes.z"
            :min="-100" :max="100"
          />
        </div>

        <div class="svg-section">
          <div class="svg-section-header">
            specular
          </div>
          <div class="flex jc-between">
            <span class="svg-small">scale</span>
            {{ (model.specular.attributes.surfaceScale as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.specular.attributes.surfaceScale"
            :min="0.1" :max="5" :step="0.1"
          />
          <div class="flex jc-between">
            <span class="svg-small">const</span>
            {{ (model.specular.attributes.specularConstant as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.specular.attributes.specularConstant"
            :min="0" :max="5" :step="0.1"
          />
          <div class="flex jc-between">
            <span class="svg-small">exponent</span>
            {{ (model.specular.attributes.specularExponent as number).toFixed() }}
          </div>
          <ui-range
            v-model="model.specular.attributes.specularExponent"
            :min="2" :max="25"
          />
        </div>

        <div class="svg-section">
          <div class="svg-section-header">
            diffuse
          </div>
          <div class="flex jc-between">
            <span class="svg-small">scale</span>
            {{ (model.diffuse.attributes.surfaceScale as number).toFixed(1) }}
          </div>
          <ui-range
            v-model="model.diffuse.attributes.surfaceScale"
            :min="0.1" :max="5" :step="0.1"
          />
          <div class="flex jc-between">
            <span class="svg-small">const</span>
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
          <svg class="clip view" :viewBox="model.viewBox" :style="{ marginBlock: 'auto' }">
            <ui-item class="clip view" :model="model.content" />
          </svg>
        </div>

        <div class="svg-preview svg-zoom-50">
          <svg class="clip view" :viewBox="model.viewBox" :style="{ marginBlock: 'auto' }">
            <ui-item class="clip view" :model="model.content" />
          </svg>
        </div>

        <div class="svg-preview svg-zoom-25">
          <svg class="clip view" :viewBox="model.viewBox" :style="{ marginBlock: 'auto' }">
            <ui-item class="clip view" :model="model.content" />
          </svg>
        </div>
      </div>

      <div class="p-2">
        <ui-button class="btn" @click="model.test()">
          test
        </ui-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.svg-editor {
  display: grid;
  grid-template-columns: 1fr 20em;
  grid-template-rows: 1fr;
}
.svg-tools {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content minmax(5em, 1fr) min-content;
  overflow: auto;
}
.svg-properties {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  padding: 0.5em;
  overflow: auto;
}
.svg-section {
  display: grid;
  grid-template-columns: 7em 1fr;
  grid-auto-rows: min-content;
  padding: 0.5em;
  gap: 0.25em 0.5em;
  border-radius: var(--radius-small);
  background-color: rgb(255 255 255 / 0.1);
}
.svg-section-header {
  grid-column: 1 / 3;
  font-size: 13px;
  color: rgb(var(--orange));
}
.svg-small {
  opacity: 0.75;
  font-size: 13px;
}
.svg-previews {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 2fr 1fr;
}
.svg-preview {
  position: relative;
  overflow: hidden;
  margin-block: 0.25em;
}
.svg-zoom-50 {
  margin-inline: 25%;
}
.svg-zoom-25 {
  margin-inline: 37.5%;
}
.white {
  color: white;
}
</style>
