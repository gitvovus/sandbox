import { createApp, type App } from 'vue';

import UiButton from '@/ui/button.vue';
import UiDialog from '@/ui/dialog.vue';
import UiSvgElement from '@/ui/svg-element.vue';

import AppView from '@/views/app-view.vue';
import ControlsView from '@/views/controls-view.vue';
import LayeredView from '@/views/layered-view.vue';
import LogoView from '@/views/logo-view.vue';
import LoremView from '@/views/lorem-view.vue';
import ReactiveView from '@/views/reactive-view.vue';
import ViewContainer from '@/views/view-container.vue';
import GearBoxView from '@/views/gear-box-view.vue';

import { AppModel } from '@/modules/app-model';

export class Application {
  readonly #app: App;

  constructor() {
    this.#app = createApp(AppView, { model: new AppModel() });
    this.#app
      // ui
      .component('ui-button', UiButton)
      .component('ui-dialog', UiDialog)
      .component('ui-svg-element', UiSvgElement)
      // views
      .component('controls-view', ControlsView)
      .component('layered-view', LayeredView)
      .component('logo-view', LogoView)
      .component('lorem-view', LoremView)
      .component('reactive-view', ReactiveView)
      .component('view-container', ViewContainer)
      .component('gear-box-view', GearBoxView);
  }

  run() {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    this.#app.mount('body');
  }
}
