<script setup lang="ts">
import { type Controls } from './controls';
defineProps<{ model: Controls }>();

function str(s?: string) {
  if (s === undefined) {
    return '<undefined>';
  }
  else if (s === '') {
    return '<empty>';
  }
  else {
    return s;
  }
}
</script>

<template>
  <div class="view controls-view">
    <!-- popup -->
    <div>
      <ui-button
        v-model="model.popup"
        class="btn m-btn"
        :disabled="model.popup"
        toggle
      >
        Popup
      </ui-button>
      <div class="popup-anchor">
        <ui-popup
          v-slot="{ close }"
          v-model="model.popup"
          class="popup-content"
        >
          <lorem-view :paragraphs="1" />
          <div class="flex gap-05">
            <ui-button
              class="btn round"
              @click="() => { close(); model.click('ok'); }"
            >
              Ok
            </ui-button>
            <ui-button
              class="btn round"
              @click="() => { close(); model.click('cancel'); }"
            >
              Cancel
            </ui-button>
          </div>
          <div class="h-separator" />
          <div class="details-header">
            <input
              v-model="model.text"
              type="text"
              class="input"
            >
            <ui-button
              v-for="(item, i) in model.paragraphs"
              :key="i"
              v-model="model.lorem.paragraphs"
              class="btn round"
              :toggle="[item]"
            >
              {{ item }}
            </ui-button>
          </div>
          <lorem-view :model="model.lorem" />
        </ui-popup>
      </div>
    </div>

    <!-- buttons -->
    <ui-details v-model="model.showButtons">
      <template #header="{expanded}">
        <div class="details-header">
          Buttons
          <div class="flex-right">
            <ui-icon :class="['icon-gt', { r90: expanded }]" />
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex col gap-05 p-1">
          <div class="flex gap-05">
            <input
              type="text"
              value="text"
              class="input"
              style="width: 100px"
            >
            <ui-button
              class="btn"
              @click="model.click('focusable')"
            >
              focusable
            </ui-button>
            <ui-button
              class="btn"
              no-focus
              tabindex="-1"
              @click="model.click('non-focusable')"
            >
              non-focusable
            </ui-button>
            <ui-button
              class="btn"
              @click="model.click('focusable')"
            >
              focusable
            </ui-button>
          </div>
          <div>
            Radio (index): {{ model.selectedIndex }}
          </div>
          <div class="flex gap-05">
            <ui-button
              v-for="(item, i) in model.checkboxes"
              :key="`index[${i}]`"
              v-model="model.selectedIndex"
              class="btn round"
              :toggle="[i]"
            >
              {{ `#${i}` }}
            </ui-button>
          </div>
          <div>
            Radio (object): { name: {{ model.selectedRadio.name }}, value:
            {{ model.selectedRadio.value }} }
          </div>
          <div class="flex gap-05">
            <ui-button
              v-for="(item, i) in model.radioItems"
              :key="`object[${i}]`"
              v-model="model.selectedRadio"
              class="btn round"
              :toggle="[model.radioItems[i]]"
            >
              {{ `#${i}` }}
            </ui-button>
          </div>
          <div>
            Checkbox: [&nbsp;<span
              v-for="(item, i) in model.checkboxes"
              :key="i + 300"
            >{{ item }}&nbsp;</span>]
          </div>
          <div class="flex gap-05">
            <ui-button
              v-for="(item, i) in model.checkboxes"
              :key="`checkbox[${i}]`"
              v-model="model.checkboxes[i]"
              class="btn round"
              toggle
            >
              {{ `#${i}` }}
            </ui-button>
          </div>
          <div>Push: {{ model.message }}</div>
          <div class="flex gap-05">
            <ui-button @click="model.click('unstyled')">
              Unstyled
            </ui-button>
            <ui-button
              class="btn"
              @click="model.click('ok')"
            >
              Ok
            </ui-button>
            <ui-button
              class="btn"
              @click="model.click('cancel')"
            >
              Cancel
            </ui-button>
            <ui-button
              class="btn"
              disabled
              @click="model.click('disabled')"
            >
              Disabled
            </ui-button>
            <ui-button
              v-model="model.selectedRadio"
              class="btn"
              :toggle="[model.radioItems[0]]"
              disabled
            >
              Disabled
            </ui-button>
          </div>
        </div>
      </template>
    </ui-details>

    <!-- dynamic content -->
    <ui-details v-model="model.expanded">
      <template #header="{expanded}">
        <div class="details-header">
          Expand, paragraphs
          <ui-button
            v-for="(item, i) in model.paragraphs"
            :key="i"
            v-model="model.lorem.paragraphs"
            v-click-stop
            class="btn round small"
            :toggle="[item]"
          >
            {{ item }}
          </ui-button>
          <div class="flex-right">
            <ui-icon :class="['icon-gt', { r90: expanded }]" />
          </div>
        </div>
      </template>
      <template #content>
        <div class="p-1">
          <lorem-view :model="model.lorem" />
        </div>
      </template>
    </ui-details>

    <!-- radio details -->
    <ui-details v-for="(item, i) in 3" :key="i" v-model="model.expandedGroup" :toggle="[i]">
      <template #header="{expanded}">
        <div class="details-header">
          Expand (radio #{{ i }})
          <div class="flex-right">
            <ui-icon :class="['icon-gt', { r90: expanded }]" />
          </div>
        </div>
      </template>
      <template #content>
        <div class="p-1">
          <lorem-view :paragraphs="1" />
        </div>
      </template>
    </ui-details>

    <!-- icons -->
    <ui-details v-model="model.showIcons">
      <template #header="{expanded}">
        <div class="details-header">
          Icons
          <div class="flex-right">
            <ui-icon :class="['icon-gt', { r90: expanded }]" />
          </div>
        </div>
      </template>
      <template #content>
        <div class="p-1">
          <div class="icons">
            <div v-for="item in ['lt', 'gt', 'up', 'down']" :key="item" class="icon-content">
              <ui-icon :class="`icon-${item}`" />
            </div>
          </div>
          <div v-for="i in 4" :key="i" class="inline-icons" :style="{fontSize: `${i}em`}">
            <span>
              Inline
              <ui-icon class="inline icon-lt" />
              <ui-icon class="inline icon-gt" />
              <ui-icon class="inline icon-quad" />
              <ui-icon class="inline icon-up" />
              <ui-icon class="inline icon-down" />
              icons
            </span>
          </div>
        </div>
      </template>
    </ui-details>

    <!-- range -->
    <ui-details v-model="model.showRange">
      <template #header="{expanded}">
        <div class="details-header">
          Range
          <div class="flex-right">
            <ui-icon :class="['icon-gt', { r90: expanded }]" />
          </div>
        </div>
      </template>
      <template #content>
        <div class="ranges">
          <ui-range
            v-model="model.rangeValue"
            class="v-range"
            :min="model.rangeMin"
            :max="model.rangeMax"
            :step="model.rangeStep"
          />
          <span />
          <div class="flex align-center justify-center">
            {{ model.rangeValue }}
          </div>
          <ui-range
            v-model="model.rangeValue"
            class="h-range"
            :min="model.rangeMin"
            :max="model.rangeMax"
            :step="model.rangeStep"
          />
        </div>
      </template>
    </ui-details>

    <!-- inputs -->
    <ui-details v-model="model.showInputs">
      <template #header="{expanded}">
        <div class="details-header">
          Input
          <div class="flex-right">
            <ui-icon :class="['icon-gt', { r90: expanded }]" />
          </div>
        </div>
      </template>
      <template #content>
        <div class="flex col gap-05 p-1 align-start">
          <span> {{ str(model.email) }} </span>
          <ui-input v-model="model.email" type="email" title="e-mail" />
          <span> {{ str(model.password) }} </span>
          <ui-input v-model="model.password" type="password" title="Password" />
        </div>
      </template>
    </ui-details>
  </div>
</template>

<style lang="scss">
$w: 12em;
$h: 2em;
.ranges {
  display: grid;
  grid-template-columns: $h $w;
  grid-template-rows: $w $h;
  padding: 1em;
  gap: 0.5em;
}
.v-range {
  width: $h;
  height: $w;
  background-color: darkslategrey;
}
.h-range {
  width: 12em;
  height: 2em;
  background-color: darkslategrey;
}

.inline-icons {
  font-size: 4em;
  background-color: darkslategrey;
  padding: 0 1rem;
}

.inline.icon {
  display: inline flow-root;
  margin-bottom: -0.2em;
}

.view.controls-view {
  overflow: auto;
}

.details-header {
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 0.125em 0.5em;
  background-color: var(--bg);
}

.popup-anchor {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

.popup-content {
  max-width: 25em;
  max-height: 30em;
  padding: 0 0.5em;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  padding: 1em;
  gap: 0.5em;
}

.icon-content {
  width: 64px;
  height: 64px;
  color: green;
  font-size: 64px;
  background-color: rgb(0 0 0 / 0.25);
  border-radius: 0.25rem;
}

.icon-content:hover {
  color: red;
}

.btn.small {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
