export interface IViewModel {
  readonly component: string;
  readonly key: symbol;
}

export class ViewModel implements IViewModel {
  readonly component: string;
  readonly key = Symbol();

  constructor(component: string) {
    this.component = component;
  }
}
