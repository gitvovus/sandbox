export type ViewState = 'mini' | 'full';

export class ViewModel {
  readonly component: string;
  readonly key = Symbol();

  constructor(component: string) {
    this.component = component;
  }
}
