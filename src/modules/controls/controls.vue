<script setup lang="ts">
import { ref } from 'vue';
import { type Controls } from './controls';
defineProps<{ model: Controls }>();

const anchor = ref<HTMLElement>(undefined!);

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

const icons = ['check', 'close', 'lt', 'gt', 'up', 'down', 'menu', 'quad', 'dot'];
</script>

<template>
  <div class="scrollable surface view">
    <div class="flex m-2 gap-2 ai-center">
      <div class="flex gap-2">
        <!-- popup -->
        <ui-button
          v-model="model.popup"
          class="btn"
          :disabled="model.popup"
          toggle
        >
          Popup
        </ui-button>
        <div ref="anchor">
          <ui-popup v-slot="{ close }" v-model="model.popup" :anchor="anchor">
            <div class="popup-content surface shadow-small">
              <div class="flex gap-2">
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
              <div class="horizontal separator" />
              <div class="flex py-2 gap-2">
                <input v-model="model.text" type="text">
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
            </div>
          </ui-popup>
        </div>
        <ui-button class="btn" @click="model.showAll(true)">
          Show all
        </ui-button>
        <ui-button class="btn" @click="model.showAll(false)">
          Hide all
        </ui-button>
      </div>
    </div>

    <!-- buttons -->
    <ui-details v-model="model.showButtons">
      <template #header="{ expanded }">
        <div class="details-header">
          Buttons
          <div class="horizontal separator" />
          <ui-icon :class="['gt', { r90: expanded }]" />
        </div>
      </template>
      <template #content>
        <div class="flex col gap-2 p-4">
          <div>Push: {{ model.message }}</div>
          <div class="flex gap-2">
            <input v-model="model.text" type="text">
            <ui-button class="btn" @click="model.click('ok')">
              Ok
            </ui-button>
            <ui-button
              class="btn"
              no-focus
              tabindex="-1"
              @click="model.click('no-focus')"
            >
              no-focus
            </ui-button>
            <ui-button class="btn" @click="model.click('cancel')">
              Cancel
            </ui-button>
            <ui-button @click="model.click('unstyled')">
              Unstyled
            </ui-button>
            <ui-button
              class="btn"
              disabled
              @click="model.click('disabled')"
            >
              Disabled
            </ui-button>
          </div>
          <div class="pt-2">
            Radio (index): {{ model.selectedIndex }}
          </div>
          <div class="flex gap-2">
            <ui-button
              v-for="(item, i) in model.checkboxes"
              :key="`index[${i}]`"
              v-slot="{ checked }"
              v-model="model.selectedIndex"
              class="radio round"
              :toggle="[i]"
            >
              <div class="radio-frame">
                <ui-icon
                  class="dot"
                  :style="{ visibility: checked ? 'visible' : 'hidden' }"
                />
              </div>
              item {{ `#${i}` }}
            </ui-button>
          </div>
          <div class="pt-2">
            Radio (object): {
            name: {{ model.selectedRadio.name }},
            value: {{ model.selectedRadio.value }} }
          </div>
          <div class="flex gap-2">
            <ui-button
              v-for="(item, i) in model.radioItems"
              :key="`object[${i}]`"
              v-slot="{ checked }"
              v-model="model.selectedRadio"
              class="btn round"
              :toggle="[model.radioItems[i]]"
            >
              <div class="radio-frame">
                <ui-icon
                  class="dot"
                  :style="{ visibility: checked ? 'visible' : 'hidden' }"
                />
              </div>
              item {{ `#${i}` }}
            </ui-button>
          </div>
          <div class="pt-2">
            Checkbox: [
            <span v-for="(item, i) in model.checkboxes" :key="i + 300">&nbsp;{{ item }}</span>
            &nbsp;]
          </div>
          <div class="flex gap-2">
            <ui-button
              v-for="(item, i) in model.checkboxes"
              :key="`checkbox[${i}]`"
              v-slot="{ checked }"
              v-model="model.checkboxes[i]"
              class="cbx round"
              toggle
            >
              <div class="cbx-frame">
                <ui-icon
                  class="check"
                  :style="{ visibility: checked ? 'visible' : 'hidden' }"
                />
              </div>
              item {{ `#${i}` }}
            </ui-button>
          </div>
        </div>
      </template>
    </ui-details>

    <!-- dynamic details -->
    <ui-details v-model="model.showDetails">
      <template #header="{ expanded }">
        <div class="details-header">
          Details, dynamic
          <ui-button
            v-for="(item, i) in model.paragraphs"
            :key="i"
            v-model="model.lorem.paragraphs"
            v-click-stop
            class="btn small"
            :toggle="[item]"
          >
            {{ item }}
          </ui-button>
          <div class="horizontal separator" />
          <ui-icon :class="['gt', { r90: expanded }]" />
        </div>
      </template>
      <template #content>
        <div class="px-1">
          <lorem-view :model="model.lorem" />
        </div>
      </template>
    </ui-details>

    <!-- radio details -->
    <ui-details v-for="(item, i) in 3" :key="i" v-model="model.showRadioDetails" :toggle="[i]">
      <template #header="{ expanded }">
        <div class="details-header">
          Details, radio
          <div class="radio-frame">
            <ui-icon :class="['dot', { hidden: !expanded }]" />
          </div>
          <div class="horizontal separator" />
          <ui-icon :class="['gt', { r90: expanded }]" />
        </div>
      </template>
      <template #content>
        <div class="px-1">
          <lorem-view :paragraphs="1" />
        </div>
      </template>
    </ui-details>

    <!-- icons -->
    <ui-details v-model="model.showIcons">
      <template #header="{ expanded }">
        <div class="details-header">
          Icons
          <div class="horizontal separator" />
          <ui-icon :class="['gt', { r90: expanded }]" />
        </div>
      </template>
      <template #content>
        <div class="p-4">
          <div class="flex gap-2 my-2">
            <div v-for="icon in icons" :key="icon" class="flex gap-2">
              <div class="icon-content">
                <ui-icon :class="['f-72', `${icon}`]" />
                <div class="icon-name">
                  {{ icon }}
                </div>
              </div>
            </div>
          </div>
          <span>
            Inline
            <ui-icon v-for="icon in icons" :key="icon" :class="icon" />
            icons
          </span>
        </div>
      </template>
    </ui-details>

    <!-- range -->
    <ui-details v-model="model.showRanges">
      <template #header="{ expanded }">
        <div class="details-header">
          Range
          <div class="horizontal separator" />
          <ui-icon :class="['gt', { r90: expanded }]" />
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
          <div class="flex ai-center jc-center">
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
      <template #header="{ expanded }">
        <div class="details-header">
          Input
          <div class="horizontal separator" />
          <ui-icon :class="['gt', { r90: expanded }]" />
        </div>
      </template>
      <template #content>
        <div class="flex gap-2 p-4">
          <div class="flex col gap-2">
            <span> {{ str(model.email) }} </span>
            <ui-input
              v-model="model.email"
              type="text"
              label="e-mail"
              class="py-2"
              :input="'form-input'"
              :decorator="'form-decorator blue'"
            />
          </div>
          <div class="flex col gap-2">
            <span> {{ str(model.password) }} </span>
            <ui-input
              v-model="model.password"
              type="text"
              label="password"
              class="py-2"
              :input="'form-input'"
              :decorator="'form-decorator red'"
            />
          </div>
        </div>
      </template>
    </ui-details>
  </div>
</template>

<style lang="scss">
$large: 8em;
$small: 1.5em;
.ranges {
  display: grid;
  grid-template-columns: $small $large;
  grid-template-rows: $large $small;
  padding: 1em;
  gap: 0.5em;
}
.v-range {
  width: $small;
  height: $large;
}
.h-range {
  width: $large;
  height: $small;
}

.details-header {
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 0.125em 0.5em;
  user-select: none;
}

.popup-content {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  max-width: 25em;
  max-height: 30em;
  padding: 0.5em;
  overflow-y: auto;
}

.icon-content {
  display: flex;
  flex-direction: column;
  background-color: rgb(0 0 0 / 0.125);
  border-radius: 8px;
  &:hover {
    color: rgb(var(--blue));
  }
}
.icon-name {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 0 0 8px 8px;
  background-color: rgb(255 255 255 / 0.125);
}
.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  border: 1px solid currentColor;
  border-radius: 50vh;
}

.btn.small {
  padding-inline: 0.5em;
  height: 1.25em;
}

.form-input {
  padding: 0.5em 0.75em 0.25em;
  box-shadow: none;
}

.form-decorator {
  margin-block-start: 0.25em;
  border: 1px solid currentColor;
  border-radius: var(--radius-small);
  background-color: rgb(var(--surface));
}
</style>
