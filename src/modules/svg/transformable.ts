import { ref, watchEffect } from 'vue';
import * as std from '@/lib/std';
import * as svg from '@/lib/svg';

const rotation = std.Matrix2x3.rotation;
const scale = std.Matrix2x3.scale;
const translation = std.Matrix2x3.translation;

export class Transformable extends svg.Item implements std.IDisposable {
  readonly #disposer = new std.Disposable();
  readonly #position = ref(new std.Vector2(0, 0));
  readonly #scale = ref(1);
  readonly #rotation = ref(0);

  constructor(tag: string, data?: svg.Attributes) {
    super(tag, data);
    this.#disposer.addDisposers(watchEffect(() => (this.attributes.transform = svg.toTransform(this.transform))));
  }

  dispose() {
    this.#disposer.dispose();
  }

  get position() {
    return this.#position.value;
  }

  set position(value) {
    this.#position.value = value.clone();
  }

  get scale() {
    return this.#scale.value;
  }

  set scale(value) {
    this.#scale.value = value;
  }

  get rotation() {
    return this.#rotation.value;
  }

  set rotation(value) {
    this.#rotation.value = std.mod(value, 2 * Math.PI);
  }

  get transform() {
    return translation(this.position.x, this.position.y)
      .multiply(rotation(this.rotation))
      .multiply(scale(this.scale, this.scale));
  }
}
