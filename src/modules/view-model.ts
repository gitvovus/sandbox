export class ViewModel {
  readonly component: string;
  readonly key = Symbol();

  constructor(component: string) {
    this.component = component;
  }
}
