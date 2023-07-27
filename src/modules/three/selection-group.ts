import * as tri from 'three';

import * as geometry from '@/lib/geometry';

export class SelectionGroup {
  readonly items: tri.Object3D[] = [];

  #hoveredObject?: tri.Object3D;
  #selectedObject?: tri.Object3D;

  #hoveredSavedColor = 0;
  #selectedSavedColor = 0;

  readonly #hoveredColor = 0x00c000;
  readonly #selectedColor = 0xd01010;
  readonly #combinedColor = 0xff2020;

  get hovered() {
    return this.#hoveredObject;
  }

  set hovered(value: tri.Object3D | undefined) {
    if (this.#hoveredObject === value) {
      return;
    }

    if (this.#hoveredObject) {
      geometry.setColor(
        this.#hoveredObject,
        this.#hoveredObject === this.#selectedObject ? this.#selectedColor : this.#hoveredSavedColor,
      );
    }

    this.#hoveredObject = value;
    if (this.#hoveredObject) {
      this.#hoveredSavedColor = geometry.getColor(this.#hoveredObject);
      geometry.setColor(
        this.#hoveredObject,
        this.#hoveredObject === this.#selectedObject ? this.#combinedColor : this.#hoveredColor,
      );
    }
  }

  get selected() {
    return this.#selectedObject;
  }

  set selected(value: tri.Object3D | undefined) {
    if (this.#selectedObject === value) {
      return;
    }

    if (this.#selectedObject) {
      geometry.setColor(
        this.#selectedObject,
        this.#selectedObject === this.#hoveredObject ? this.#hoveredColor : this.#selectedSavedColor,
      );
    }

    this.#selectedObject = value;
    if (this.#selectedObject) {
      this.#selectedSavedColor =
        this.#selectedObject === this.#hoveredObject ? this.#hoveredSavedColor : geometry.getColor(this.#selectedObject);
      geometry.setColor(
        this.#selectedObject,
        this.#selectedObject === this.#hoveredObject ? this.#combinedColor : this.#selectedColor,
      );
    }
  }
}
