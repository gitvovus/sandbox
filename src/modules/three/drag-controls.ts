import * as tri from 'three';

import * as geometry from '@/lib/geometry';
import * as std from '@/lib/std';

export type VectorConstraint = (v: tri.Vector3) => tri.Vector3;

export function noConstraints(v: tri.Vector3) {
  return (v: tri.Vector3) => v;
}

export function dotAxisConstraint(axis: tri.Vector3) {
  const a = axis.clone().normalize();
  return (v: tri.Vector3) => {
    const x = a.dot(v);
    return a.clone().multiplyScalar(x);
  };
}

export function smoothAxisConstraint(threshold: number, axis: tri.Vector3) {
  const a = axis.clone().normalize();
  return (v: tri.Vector3) => {
    const x = a.dot(v);
    const f = v.length() * Math.sign(x) * std.smoothStep(0, threshold, Math.abs(x));
    return a.clone().multiplyScalar(f);
  };
}

export function stickAxisConstraint(stick: number, threshold: number, axis: tri.Vector3) {
  const a = axis.clone().normalize();
  return (v: tri.Vector3) => {
    const x = a.dot(v);
    const f = v.length() * Math.sign(x) * std.smoothStep(stick, threshold, Math.abs(x));
    return a.clone().multiplyScalar(f);
  };
}

export function coneConstraint(axis: tri.Vector3, angle: number) {
  const a = axis.clone().normalize();
  const dot = Math.cos(angle);
  return (v: tri.Vector3) => {
    const n = v.clone().normalize();
    if (n.dot(a) >= dot) {
      return n;
    }
    const x = a.clone().cross(n);
    if (x.lengthSq() < 1e-4) {
      return a.clone();
    }
    x.normalize();
    const q = new tri.Quaternion().setFromAxisAngle(x, angle);
    return a.clone().applyQuaternion(q);
  };
}

export interface DragHandler {
  handle: tri.Object3D;
  target?: tri.Object3D;
  constraint: VectorConstraint;
  pick(): void;
  drag(v: tri.Vector3): void;
}

export class AxisDragHandler implements DragHandler {
  public handle!: tri.Object3D;

  #t?: tri.Object3D; // target
  #origin = new tri.Vector3(); // target local position
  #targetMatrix = new tri.Matrix4(); // target local matrix
  #inverseMatrix = new tri.Matrix4(); // target world matrix inverse
  #f: (v: tri.Vector3) => tri.Vector3 = (v: tri.Vector3) => v;

  get constraint(): (v: tri.Vector3) => tri.Vector3 {
    return this.#f;
  }

  set constraint(f: (v: tri.Vector3) => tri.Vector3) {
    this.#f = f;
  }

  get target() {
    return this.#t;
  }

  set target(value: tri.Object3D | undefined) {
    this.#t = value;
  }

  pick() {
    this.#origin.copy(this.#t!.position);
    this.#targetMatrix.copy(this.#t!.matrix);
    this.#inverseMatrix.copy(this.#t!.matrixWorld).invert();
  }

  drag(v: tri.Vector3) {
    // offset from picked origin, in world space
    const inverseRotation = new tri.Matrix3();
    inverseRotation.setFromMatrix4(this.#inverseMatrix);
    v.applyMatrix3(inverseRotation);
    v = this.constraint(v);

    const targetRotation = new tri.Matrix3();
    targetRotation.setFromMatrix4(this.#targetMatrix);
    v.applyMatrix3(targetRotation);
    v.add(this.#origin);
    this.#t!.position.copy(v);
  }
}

// TODO: finalize implementation
export class ConeDragHandler implements DragHandler {
  root = new tri.Object3D();
  handle: tri.Object3D;

  #rootGroup: tri.Group;
  #handleGroup: tri.Group;

  #t?: tri.Object3D;
  #origin = new tri.Vector3(); // target local position
  #targetMatrix = new tri.Matrix4(); // target local matrix
  #inverseMatrix = new tri.Matrix4(); // target world matrix inverse
  #f: VectorConstraint = (v: tri.Vector3) => v;

  #referenceAxis: tri.Vector3;
  #currentAxis: tri.Vector3;
  #angle: number;

  constructor(axis: tri.Vector3, angle: number) {
    this.#referenceAxis = axis.clone().normalize();
    this.#currentAxis = this.#referenceAxis.clone();
    this.#angle = angle;

    const oz = new tri.BufferGeometry();
    oz.setAttribute(
      'position',
      new tri.Float32BufferAttribute(new Float32Array([0, 0, 0, 0, 0, 1]), 3),
    );

    const r = 16;
    const l = 4;
    const grid = geometry.cylinderGrid(r, l, (ix, iy) => {
      const phi = (2 * Math.PI * ix) / r;
      const theta = 0.5 * Math.PI + this.#angle * (iy / l - 1);
      const x = Math.cos(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.cos(theta);
      const z = Math.sin(theta);
      return new tri.Vector3(x, y, z);
    });

    this.#handleGroup = new tri.Group();
    const handleSphere = new tri.Mesh(
      geometry.sphere(0.1, 3),
      new tri.MeshPhongMaterial({ color: 0xffff00 }),
    );
    handleSphere.position.set(0, 0, 1);
    const handleAxis = new tri.LineSegments(oz, new tri.LineBasicMaterial({ color: 0x008000 }));
    this.#handleGroup.add(handleAxis, handleSphere);
    this.#handleGroup.quaternion.setFromUnitVectors(this.#referenceAxis, this.#currentAxis);

    this.#rootGroup = new tri.Group();
    this.#rootGroup.quaternion.setFromUnitVectors(new tri.Vector3(0, 0, 1), axis);

    this.#rootGroup.add(
      new tri.LineSegments(oz, new tri.LineBasicMaterial({ color: 0x800000 })),
      new tri.LineSegments(
        grid,
        new tri.LineBasicMaterial({ color: 0, transparent: true, opacity: 0.5 }),
      ),
      this.#handleGroup,
    );

    this.root.add(this.#rootGroup);
    this.handle = handleSphere;
    this.constraint = coneConstraint(this.#referenceAxis, this.#angle);
  }

  get constraint(): (v: tri.Vector3) => tri.Vector3 {
    return this.#f;
  }

  set constraint(f: (v: tri.Vector3) => tri.Vector3) {
    this.#f = f;
  }

  get target() {
    return this.#t;
  }

  set target(value: tri.Object3D | undefined) {
    this.#t = value;
    if (value) {
      this.#targetMatrix.copy(value.matrix);
      this.#inverseMatrix.copy(value.matrixWorld).invert();

      const targetInverse = new tri.Matrix4();
      targetInverse.copy(this.#targetMatrix).invert();
      this.root.quaternion.setFromRotationMatrix(targetInverse);
    }
  }

  pick() {
    this.#origin.copy(this.#currentAxis);
  }

  drag(v: tri.Vector3) {
    const inverseRotation = new tri.Matrix3();
    inverseRotation.setFromMatrix4(this.#inverseMatrix);
    const scale = new tri.Vector3();
    this.root.getWorldScale(scale);
    v.applyMatrix3(inverseRotation).multiplyScalar(1 / scale.x);
    v.add(this.#origin);
    this.#currentAxis = this.constraint(v);

    const q = new tri.Quaternion().setFromUnitVectors(this.#referenceAxis, this.#currentAxis);
    const r = new tri.Matrix4().makeRotationFromQuaternion(q);
    const m = this.#targetMatrix.clone().multiply(r);
    this.#t!.quaternion.setFromRotationMatrix(m);
    this.#handleGroup.quaternion.setFromRotationMatrix(m);

    const inverse = new tri.Matrix4().copy(m).invert();
    this.root.quaternion.setFromRotationMatrix(inverse);
  }
}

export class DragControl {
  root!: tri.Object3D;
  items!: DragHandler[];

  #t!: tri.Object3D;

  get target() {
    return this.#t;
  }

  set target(value: tri.Object3D) {
    this.#t = value;
    for (const item of this.items) {
      item.target = value;
    }
  }
}

export class AxisDragControl extends DragControl {
  constructor() {
    super();
    this.root = geometry.axes();
    this.items = [new AxisDragHandler(), new AxisDragHandler(), new AxisDragHandler()];
    const v = [new tri.Vector3(1, 0, 0), new tri.Vector3(0, 1, 0), new tri.Vector3(0, 0, 1)];
    for (let i = 0; i < 3; ++i) {
      const item = this.items[i];
      item.handle = this.#createHandle(v[i], 0.1, 0xffff00);
      item.constraint = stickAxisConstraint(0.05, 0.25, v[i]);
      this.root.add(item.handle);
    }
  }

  #createHandle(v: tri.Vector3, radius: number, color: number) {
    const mesh = new tri.Mesh(geometry.sphere(radius, 3), new tri.MeshPhongMaterial({ color }));
    mesh.position.copy(v);
    return mesh;
  }
}

export class ConeDragControl extends DragControl {
  constructor(axis: tri.Vector3, angle: number) {
    super();
    this.root = new tri.Object3D();

    const item = new ConeDragHandler(axis, angle);
    this.items = [item];
    this.root.add(item.root);
  }
}
