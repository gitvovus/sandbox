export interface Property {
  readonly key: symbol;
  readonly name: string;
  readonly component: string;
  readonly children: Property[];
  toCss(): string;
  save(): void;
  load(): void;
}
