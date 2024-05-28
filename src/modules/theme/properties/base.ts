export interface PropertyBase {
  readonly key: symbol;
  readonly component: string;
  readonly name: string;
  toCss(): string;
  save(): void;
  load(): void;
}
