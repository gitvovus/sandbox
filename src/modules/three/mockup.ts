import { ref, watch } from 'vue';
import * as tri from 'three';

import * as geo from '@/lib/geometry';
import * as std from '@/lib/std';

import { Controller } from '@/modules/three/controller';
import * as drag from '@/modules/three/drag-controls';
import * as models from '@/modules/three/models';
import { SelectionGroup } from '@/modules/three/selection-group';

export class Model extends models.Item {
  #selectedIndex = ref<number | undefined>();

  public constructor() {
    super({ template: 'mockup', label: 'Mockup' });
  }

  get selectedIndex() {
    return this.#selectedIndex.value;
  }

  set selectedIndex(value) {
    this.#selectedIndex.value = value;
  }

  get selectedItem() {
    const items = this.items;
    if (!this.selectedIndex) return undefined;
    return items[this.selectedIndex];
  }

  set selectedItem(value: models.Item | undefined) {
    const items = this.items;
    if (!value) {
      this.selectedIndex = undefined;
      return;
    }
    const index = items.findIndex((i) => i === value);
    this.selectedIndex = index !== -1 ? index : undefined;
  }
}

export class Mockup extends std.Disposable {
  readonly #model = new Model();
  readonly #mounted = new std.Disposable();

  #scene: tri.Scene;
  #camera: tri.Camera;
  #element?: HTMLElement;
  readonly #controller: Controller;

  readonly #root = new tri.Group();
  #child!: tri.Object3D;

  #moveControl!: drag.DragControl;
  #coneControl!: drag.DragControl;
  #activeControl?: drag.DragControl;

  #objects = new SelectionGroup();
  #handles = new SelectionGroup();

  #raycaster = new tri.Raycaster();
  #dragHandler?: drag.DragHandler;
  #dragOrigin = new tri.Vector3();
  #plane = new tri.Plane();

  #coneTarget!: tri.Object3D;

  constructor(scene: tri.Scene, camera: tri.Camera) {
    super();
    this.#scene = scene;
    this.#camera = camera;
    this.#controller = new Controller({
      phi: -Math.PI / 2,
      theta: Math.PI / 6,
      radius: 5,
      minRadius: 1,
      lookAt: new tri.Vector3(0, 0, 0.25),
      zoom: 1.5,
    });

    this.#setupScene();
    this.#setupObjects();

    this.addDisposers(
      watch(
        () => this.#model.selectedItem,
        (item) => this.#select(this.#objects, item && (item as models.Object3D).root),
        { immediate: true },
      ),
      () => {
        this.#controller.dispose();
        this.#scene.remove(this.#root);
        geo.dispose(this.#root);
      },
    );
  }

  update() {
    this.#controller.update(this.#camera);
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#mounted.addDisposers(
      () => (this.#element = undefined),
      std.onElementEvent(element, 'pointerdown', this.#pick),
      std.onElementEvent(element, 'pointermove', this.#drag),
      std.onElementEvent(element, 'pointerup', this.#drop),
      () => this.#controller.unmount(),
    );
    this.#controller.mount(element);
  }

  unmount() {
    this.#mounted.dispose();
  }

  #setupScene() {
    this.#scene.add(this.#root);

    const grid = new tri.LineSegments(
      geo.grid(10, 10, (x, y) => new tri.Vector3(0.2 * x - 1, 0.2 * y - 1, 0)),
      new tri.LineBasicMaterial({ color: 0, transparent: true, opacity: 0.25 }),
    );
    this.#root.add(grid);

    const ox = new tri.Mesh(geo.sphere(0.01, 3), new tri.MeshPhongMaterial({ color: 0xff0000 }));
    ox.position.set(1, 0, 0);
    this.#root.add(ox);

    this.#child = new tri.LineSegments(
      geo.grid(10, 10, (x, y) => new tri.Vector3(0.2 * x - 1, 0.2 * y - 1, 0)),
      new tri.LineBasicMaterial({ color: 0x0, transparent: true, opacity: 0.25 }),
    );
    this.#child.position.set(0.5, 0.5, 0.5);
    this.#child.scale.setScalar(0.5);
    this.#child.rotateZ(1);
    this.#child.rotateY(-0.5);
    this.#child.rotateX(0.2);
    this.#root.add(this.#child);

    const oxChild = new tri.Mesh(geo.sphere(0.02, 3), new tri.MeshPhongMaterial({ color: 0xff0000 }));
    oxChild.position.set(1, 0, 0);
    this.#child.add(oxChild);
  }

  #setupObjects() {
    const a = new models.Object3D({ label: 'Object A' });
    const b = new models.Object3D({ label: 'Object B' });
    const b1 = new models.Object3D({ label: 'Object B1' });
    const b2 = new models.Object3D({ label: 'Object B2' });
    b.items.push(b1, b2);

    a.root = new tri.Mesh(geo.cube(0.125, 1), new tri.MeshPhongMaterial({ color: 0x50a0f0, transparent: true, opacity: 0.75 }));
    a.root.renderOrder = 1;
    a.root.position.set(-0.6, 0.2, 0.125);

    b.root = new tri.Mesh(geo.cube(0.125, 1), new tri.MeshPhongMaterial({ color: 0x50a0f0, transparent: true, opacity: 0.75 }));
    b.root.renderOrder = 1;
    b.root.position.set(0.6, -0.4, 0.25);
    b.root.rotateZ(2);
    b.root.rotateY(0.5);
    b.root.rotateX(-0.2);

    b1.root = new tri.Mesh(geo.cube(0.05, 1), new tri.MeshPhongMaterial({ color: 0x00d0f0, transparent: true, opacity: 0.75 }));
    b1.root.renderOrder = 1;
    b1.root.position.set(-0.4, 0.1, -0.1);

    b2.root = new tri.Mesh(geo.cube(0.05, 1), new tri.MeshPhongMaterial({ color: 0x00d0f0, transparent: true, opacity: 0.75 }));
    b2.root.renderOrder = 1;
    b2.root.position.set(-0.1, 0.4, -0.1);

    b.root.add(b1.root);
    b.root.add(b2.root);

    const c = new models.Object3D({ label: 'Object C' });
    const d = new models.Object3D({ label: 'Object D' });

    c.root = new tri.Mesh(geo.cube(0.125, 1), new tri.MeshPhongMaterial({ color: 0x50a0f0, transparent: true, opacity: 0.75 }));
    c.root.renderOrder = 1;
    c.root.position.set(-0.6, 0.2, 0.125);

    d.root = new tri.Mesh(geo.cube(0.125, 1), new tri.MeshPhongMaterial({ color: 0x50a0f0, transparent: true, opacity: 0.75 }));
    d.root.renderOrder = 1;
    d.root.position.set(0.6, -0.4, 0.25);
    d.root.rotateZ(2);
    d.root.rotateY(0.5);
    d.root.rotateX(-0.2);

    const r = new models.Object3D({ label: 'Object R' });
    r.root = new tri.Mesh(geo.cube(0.1, 1), new tri.MeshPhongMaterial({ color: 0xf06000, transparent: true, opacity: 0.75 }));
    r.root.renderOrder = 1;
    r.root.position.set(-0.3, -0.3, -0.05);
    this.#coneTarget = r.root;

    this.#model.items.push(a, b, b1, b2, r, c, d);
    this.#model.items.forEach((item) => this.#objects.items.push((item as models.Object3D).root));

    this.#root.add(a.root);
    this.#root.add(b.root);
    this.#root.add(r.root);
    this.#child.add(c.root);
    this.#child.add(d.root);

    this.#moveControl = new drag.AxisDragControl();
    this.#moveControl.root.scale.setScalar(0.2);
    this.#moveControl.items.forEach((item) => this.#handles.items.push(item.handle));

    this.#coneControl = new drag.ConeDragControl(new tri.Vector3(0, 0, 1), 0.5);
    this.#coneControl.root.scale.setScalar(0.25);
    this.#coneControl.items.forEach((item) => this.#handles.items.push(item.handle));
  }

  #hover(group: SelectionGroup, object?: tri.Object3D) {
    group.hovered = object;
  }

  #select(group: SelectionGroup, object?: tri.Object3D) {
    if (object === group.selected) {
      return;
    }
    if (group.selected) {
      group.selected.remove(this.#activeControl!.root);
    }

    group.selected = object;
    if (!object) {
      return;
    }

    this.#activeControl = object === this.#coneTarget ? this.#coneControl : this.#moveControl;
    object.add(this.#activeControl.root);
    this.#activeControl.target = object;
  }

  #rayCast(items: tri.Object3D[], xy: tri.Vector2): tri.Intersection | undefined {
    this.#raycaster.setFromCamera(xy, this.#camera);
    const intersections = this.#raycaster.intersectObjects(items);
    return intersections.length > 0 ? intersections[0] : undefined;
  }

  #xyFromEvent(e: PointerEvent) {
    const { x, y } = std.elementOffset(this.#element!, e);
    return new tri.Vector2((x / this.#element!.clientWidth) * 2 - 1, (y / this.#element!.clientHeight) * -2 + 1);
  }

  #pick = (e: PointerEvent) => {
    if (this.#dragHandler) {
      return;
    }

    if (e.buttons & 2) {
      this.#hover(this.#handles);
      this.#model.selectedItem = undefined;
      return;
    }

    if (!(e.buttons & 1)) {
      return;
    }

    const xy = this.#xyFromEvent(e);
    let rayCast: tri.Intersection | undefined;
    if (this.#objects.selected) {
      rayCast = this.#rayCast(this.#handles.items, xy);
      if (rayCast) {
        for (const dragger of this.#activeControl!.items) {
          if (rayCast.object === dragger.handle) {
            dragger.pick();

            this.#dragHandler = dragger;
            this.#dragOrigin = rayCast.point;
            const dir = new tri.Vector3();
            this.#camera.getWorldDirection(dir);
            this.#plane.setFromNormalAndCoplanarPoint(dir, rayCast.point);

            this.#element!.setPointerCapture(e.pointerId);
            e.stopImmediatePropagation();
            return;
          }
        }
      }
    }

    rayCast = this.#rayCast(this.#objects.items, xy);
    if (!rayCast) {
      return;
    }

    for (const item of this.#model.items) {
      if (rayCast.object === (item as models.Object3D).root) {
        this.#model.selectedItem = item;
        break;
      }
    }
  };

  #drag = (e: PointerEvent) => {
    const xy = this.#xyFromEvent(e);

    if (this.#dragHandler) {
      this.#raycaster.setFromCamera(xy, this.#camera);
      const v = new tri.Vector3();
      this.#raycaster.ray.intersectPlane(this.#plane, v);
      v.sub(this.#dragOrigin);
      this.#dragHandler.drag(v);
    } else {
      if (e.buttons & 3) {
        return;
      }

      let rayCast: tri.Intersection | undefined;
      if (this.#objects.selected) {
        rayCast = this.#rayCast(this.#handles.items, xy);
        if (rayCast) {
          for (const dragger of this.#activeControl!.items) {
            if (rayCast.object === dragger.handle) {
              this.#hover(this.#handles, rayCast.object);
              this.#hover(this.#objects);
              return;
            }
          }
        }
      }

      rayCast = this.#rayCast(this.#objects.items, xy);
      if (rayCast) {
        this.#hover(this.#handles);
        this.#hover(this.#objects, rayCast.object);
      } else {
        this.#hover(this.#handles);
        this.#hover(this.#objects);
      }
    }
  };

  #drop = (e: PointerEvent) => {
    if (this.#dragHandler && (e.buttons & 1) === 0) {
      this.#dragHandler = undefined;
      this.#element!.releasePointerCapture(e.pointerId);
    }
  };
}
