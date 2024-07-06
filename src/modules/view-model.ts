export type ViewState = 'mini' | 'full';

export class ViewModel {
  readonly key = Symbol();
  readonly component: string;
  readonly button: string = 'view-button';

  constructor(component: string, button?: string) {
    this.component = component;
    if (button) {
      this.button = button;
    }
  }
}
