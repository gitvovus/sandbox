export interface Property {
  readonly key: symbol;
  readonly name: string;
  readonly component: string;
  readonly children: Property[];
  toCss(): string;
  save(): void;
  load(): void;
}

export class PropertyBase implements Property {
  readonly key = Symbol();
  readonly component: string;
  readonly name: string;
  readonly children = [];

  constructor(component: string, name: string) {
    this.component = component;
    this.name = name;
  }

  toCss() { return ''; }
  save() {}
  load() {}
}
