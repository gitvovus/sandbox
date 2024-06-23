import { createApp, type App } from 'vue';

import { AppModel } from '@/modules/app/app-model';

// ui componnents
import UiButton from '@/ui/button.vue';
import UiCollapse from '@/ui/collapse.vue';
import UiDetails from '@/ui/details.vue';
import UiDialog from '@/ui/dialog.vue';
import UiDropdown from '@/ui/dropdown.vue';
import UiHotkey from '@/ui/hotkey.vue';
import UiIcon from '@/ui/icon.vue';
import UiInput from '@/ui/input.vue';
import UiItem from '@/ui/item.vue';
import UiPopup from '@/ui/popup.vue';
import UiRange from '@/ui/range.vue';
import UiSelect from '@/ui/select.vue';
import UiTestItem from '@/ui/test-item.vue';
import UiZoom from '@/ui/zoom.vue';

// directives
import { vClickStop } from '@/ui/directives';

// property editors
import ColorEditor from '@/modules/theme/editors/color.vue';
import LengthEditor from '@/modules/theme/editors/length.vue';
import TextEditor from '@/modules/theme/editors/text.vue';
import ShadowEditor from '@/modules/theme/editors/shadow.vue';
import VarEditor from '@/modules/theme/editors/var.vue';

// views
import AppView from '@/modules/app/app-view.vue';
import BicubicView from '@/modules/bicubic/bicubic.vue';
import BinaryTreeView from '@/modules/binary-tree/binary-tree.vue';
import ControlsView from '@/modules/controls/controls.vue';
import FlowersView from '@/modules/flowers/flowers.vue';
import GearsView from '@/modules/gears/gears.vue';
import LogoView from '@/modules/logo/logo.vue';
import LoremView from '@/modules/lorem/lorem.vue';
import MovableView from '@/modules/movable/movable.vue';
import SandboxView from '@/modules/sandbox/sandbox.vue';
import SvgEditorView from '@/modules/svg-editor/svg-editor.vue';
import SvgSandboxView from '@/modules/svg-sandbox/svg-sandbox.vue';
import ThemeView from '@/modules/theme/theme.vue';
import TransformsView from '@/modules/transforms/transforms.vue';
import WebPageView from '@/modules/web-page/web-page.vue';
import WrapperView from '@/modules/wrapper/wrapper.vue';

// utils
import { CloneItem } from '@/ui/utils';

// test
import { TestContainer, TestHeader, TestItem } from '@/modules/sandbox/sandbox';

export class Application {
  readonly #appModel = new AppModel();
  readonly #vue: App;

  constructor() {
    this.#vue = createApp(AppView, { model: this.#appModel });
    this.#vue
      // ui
      .component('ui-button', UiButton)
      .component('ui-collapse', UiCollapse)
      .component('ui-details', UiDetails)
      .component('ui-dialog', UiDialog)
      .component('ui-dropdown', UiDropdown)
      .component('ui-hotkey', UiHotkey)
      .component('ui-icon', UiIcon)
      .component('ui-input', UiInput)
      .component('ui-item', UiItem)
      .component('ui-popup', UiPopup)
      .component('ui-range', UiRange)
      .component('ui-select', UiSelect)
      .component('ui-test-item', UiTestItem)
      .component('ui-zoom', UiZoom)
      // utils
      .component('clone-item', CloneItem)
      // directives
      .directive('click-stop', vClickStop)
      // views
      .component('bicubic-view', BicubicView)
      .component('binary-tree-view', BinaryTreeView)
      .component('controls-view', ControlsView)
      .component('flowers-view', FlowersView)
      .component('gears-view', GearsView)
      .component('logo-view', LogoView)
      .component('lorem-view', LoremView)
      .component('movable-view', MovableView)
      .component('sandbox-view', SandboxView)
      .component('svg-editor-view', SvgEditorView)
      .component('svg-sandbox-view', SvgSandboxView)
      .component('theme-view', ThemeView)
      .component('transforms-view', TransformsView)
      .component('web-page-view', WebPageView)
      .component('wrapper-view', WrapperView)
      // properties
      .component('color-editor', ColorEditor)
      .component('length-editor', LengthEditor)
      .component('text-editor', TextEditor)
      .component('shadow-editor', ShadowEditor)
      .component('var-editor', VarEditor)
      // test
      .component('test-container', TestContainer)
      .component('test-header', TestHeader)
      .component('test-item', TestItem);
  }

  run() {
    this.#vue.mount('body');
  }
}
