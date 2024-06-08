import type { PropertyBase } from '@/modules/theme/properties/base';

export class Var implements PropertyBase {
  readonly key = Symbol();
  readonly name: string;
  readonly property: PropertyBase;

  constructor(name: string, property: PropertyBase) {
    this.name = name;
    this.property = property;
  }

  get component() {
    return this.property.component;
  }

  save() {
    // this.property.save();
  }

  load() {
    // this.property.load();
  }

  toCss() {
    return this.property.toCss();
  }
}
