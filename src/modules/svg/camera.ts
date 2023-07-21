import { ref } from 'vue';
import * as std from '@/lib/std';

const rotation = std.Matrix2x3.rotation;
const scale = std.Matrix2x3.scale;
const translation = std.Matrix2x3.translation;

export class Camera {
  readonly #position = ref(new std.Vector2(0, 0));
  readonly #rotation = ref(0);
  readonly #scale = ref(new std.Vector2(1, 1));

  constructor(options: { position?: std.Vector2; rotation?: number; scale?: std.Vector2 } = {}) {
    if (options.position) {
      this.position = options.position;
    }
    if (options.rotation) {
      this.rotation = options.rotation;
    }
    if (options.scale) {
      this.scale = options.scale;
    }
  }

  clone() {
    return new Camera(this);
  }

  get position() {
    return this.#position.value;
  }

  set position(value) {
    this.#position.value = value.clone();
  }

  get rotation() {
    return this.#rotation.value;
  }

  set rotation(value: number) {
    this.#rotation.value = value;
  }

  get scale() {
    return this.#scale.value;
  }

  set scale(value) {
    this.#scale.value = value.clone();
  }

  get transform() {
    return translation(this.position.x, this.position.y)
      .multiply(rotation(this.rotation))
      .multiply(scale(this.scale.x, this.scale.y));
  }

  get inverseTransform() {
    return scale(1 / this.scale.x, 1 / this.scale.y)
      .multiply(rotation(-this.rotation))
      .multiply(translation(-this.position.x, -this.position.y));
  }
}
