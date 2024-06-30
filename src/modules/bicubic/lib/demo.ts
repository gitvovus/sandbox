import { ref } from 'vue';
import * as tri from 'three';

import * as geo from '@/lib/geometry';
import * as img from '@/lib/images';
import * as std from '@/lib/std';
import { Controller } from './controller';
import { Selection } from './selection';

export class Demo extends std.Disposable {
  readonly #mounted = new std.Disposable();

  #element?: HTMLElement;
  readonly #scene: tri.Scene;
  readonly #camera: tri.PerspectiveCamera;
  readonly #controller: Controller;
  readonly #root = new tri.Group();

  readonly #numSpheres = 7;
  readonly #z: number[] = Array(this.#numSpheres * this.#numSpheres);
  readonly #spheres: tri.Mesh[] = [];
  #plane!: tri.LineSegments;
  #loRes!: tri.LineSegments;
  #hiRes!: tri.LineSegments;
  #selection = new Selection();

  #raycaster = new tri.Raycaster();
  #trackPointer = false;
  #pointer = { x: 0, y: 0 };
  #dragCenter!: tri.Vector3;
  #dragScale = 1;

  readonly #offset = -0.5 * (this.#numSpheres - 1);
  readonly #subdiv = ref(8);
  readonly #showGrid = ref(false);
  readonly #showLoRes = ref(false);

  readonly #minSubdiv = 2;
  readonly #maxSubdiv = 16;
  readonly #minZ = -2;
  readonly #maxZ = 2;

  readonly #sphereColor = 0xffff00;
  readonly #loResColor = 0xe08000;
  readonly #hiResColor = 0x008000;
  readonly #fitSize = 2;

  constructor(scene: tri.Scene, camera: tri.PerspectiveCamera) {
    super();
    this.#scene = scene;
    this.#camera = camera;
    this.#controller = new Controller({
      phi: -Math.PI / 3,
      theta: Math.PI / 6,
      radius: 4,
      minRadius: 2,
      lookAt: new tri.Vector3(0, 0, 0),
    });

    this.add(() => {
      this.#controller.dispose();
      this.#scene.remove(this.#root);
      geo.dispose(this.#root);
    });

    this.#setup();
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#mounted.add(
      () => (this.#element = undefined),
      std.onElementEvent(element, 'pointerdown', this.#pick),
      std.onElementEvent(element, 'pointermove', this.#drag),
      std.onElementEvent(element, 'pointerup', this.#drop),
      std.onElementEvent(element, 'keydown', this.#keyDown),
      () => this.#controller.unmount(),
    );
    this.#controller.mount(element);
  }

  unmount() {
    this.#mounted.dispose();
  }

  update() {
    this.#controller.update(this.#camera);
  }

  get showGrid() {
    return this.#showGrid.value;
  }

  set showGrid(value) {
    this.#showGrid.value = value;
    this.#plane.visible = value;
  }

  get showLoRes() {
    return this.#showLoRes.value;
  }

  set showLoRes(value) {
    this.#showLoRes.value = value;
    this.#loRes.visible = value;
  }

  get subdiv() {
    return this.#subdiv.value;
  }

  set subdiv(value) {
    if (value !== this.#subdiv.value) {
      this.#subdiv.value = value;
      this.#interpolate();
    }
  }

  #setup() {
    const subdiv = this.subdiv;
    const offset = this.#offset;
    this.#plane = new tri.LineSegments(
      geo.grid(
        this.#numSpheres,
        this.#numSpheres,
        (x, y) => new tri.Vector3(x + offset - 0.5, y + offset - 0.5, this.#minZ),
      ),
      new tri.LineBasicMaterial({ color: 0, transparent: true, opacity: 0.5 }),
    );
    this.showGrid = false;
    this.#root.add(this.#plane);

    this.#loRes = new tri.LineSegments(
      geo.grid(
        this.#numSpheres + 3,
        this.#numSpheres + 3,
        (x, y) => new tri.Vector3(x + offset - 2, y + offset - 2, 0),
      ),
      new tri.LineBasicMaterial({ color: this.#loResColor }),
    );
    this.showLoRes = false;
    this.#root.add(this.#loRes);

    this.#hiRes = new tri.LineSegments(
      geo.grid(
        (this.#numSpheres - 1) * subdiv,
        (this.#numSpheres - 1) * subdiv,
        (x, y) => new tri.Vector3(x / subdiv + offset, y / subdiv + offset, 0),
      ),
      new tri.LineBasicMaterial({ color: this.#hiResColor }),
    );
    this.#root.add(this.#hiRes);

    for (let y = 0; y < this.#numSpheres; ++y) {
      for (let x = 0; x < this.#numSpheres; ++x) {
        const sphere = new tri.Mesh(
          geo.sphere(1, 4),
          new tri.MeshPhongMaterial({ color: this.#sphereColor }),
        );
        sphere.scale.setScalar(0.07);
        sphere.position.set(x + offset, y + offset, 0);
        this.#spheres.push(sphere);
        this.#root.add(sphere);
      }
    }

    this.#root.scale.setScalar(this.#fitSize / this.#numSpheres);
    this.#scene.add(this.#root);

    for (let y = 0; y < this.#numSpheres; ++y) {
      for (let x = 0; x < this.#numSpheres; ++x) {
        this.#setZ(x, y, this.#defaultZ(x, y));
      }
    }

    this.#interpolate();
  }

  #defaultZ(x: number, y: number) {
    const x0 = x + this.#offset;
    const y0 = y + this.#offset;
    return Math.cos(x0) * Math.cos(y0);
  }

  #reset(z: (x: number, y: number) => number, all: boolean = false) {
    if (all) {
      for (let y = 0; y < this.#numSpheres; ++y) {
        for (let x = 0; x < this.#numSpheres; ++x) {
          this.#setZ(x, y, z(x, y));
        }
      }
      this.#interpolate();
    }
    else if (this.#selection.selected) {
      const [x, y] = this.#sphereXY(this.#selection.selected as tri.Mesh);
      this.#setZ(x, y, z(x, y));
      this.#interpolate();
    }
  }

  #interpolate() {
    const size = this.#numSpheres;
    const subdiv = this.subdiv;
    const idx = (x: number, y: number) => std.clamp(x, 0, size - 1) + std.clamp(y, 0, size - 1) * size;
    const get = (x: number, y: number) => this.#z[idx(x, y)];

    const lo = this.#loRes.geometry.getAttribute('position');
    for (let y = 0; y < size + 4; ++y) {
      for (let x = 0; x < size + 4; ++x) {
        lo.setXYZ(x + y * (size + 4), x + this.#offset - 2, y + this.#offset - 2, get(x - 2, y - 2));
      }
    }
    lo.needsUpdate = true;

    const bicubic = (x: number, y: number) => {
      let dx = x / subdiv;
      let dy = y / subdiv;
      let x0 = Math.floor(dx);
      let y0 = Math.floor(dy);
      dx -= x0;
      dy -= y0;
      if (dx === 0 && x0 > 0) {
        --x0;
        dx = 1;
      }
      if (dy === 0 && y0 > 0) {
        --y0;
        dy = 1;
      }
      return img.bicubic(dx, dy, (x, y) => get(x0 + x, y0 + y));
    };

    const hiSize = (size - 1) * subdiv;
    const hi = this.#hiRes.geometry.getAttribute('position');
    if (hi.count !== (hiSize + 1) * (hiSize + 1)) {
      this.#hiRes.geometry.dispose();
      this.#hiRes.geometry = geo.grid(hiSize, hiSize, (x, y) => {
        return new tri.Vector3(x / subdiv + this.#offset, y / subdiv + this.#offset, bicubic(x, y));
      });
    }
    else {
      for (let y = 0; y <= hiSize; ++y) {
        for (let x = 0; x <= hiSize; ++x) {
          hi.setZ(x + y * (hiSize + 1), bicubic(x, y));
        }
      }
      hi.needsUpdate = true;
    }
  }

  #setZ(x: number, y: number, value: number) {
    this.#z[x + y * this.#numSpheres] = value;
    this.#spheres[x + y * this.#numSpheres].position.setZ(value);
  }

  #sphereXY(mesh: tri.Mesh): [number, number] {
    const index = this.#spheres.findIndex(m => m === mesh);
    const x = index % this.#numSpheres;
    const y = (index - x) / this.#numSpheres;
    return [x, y];
  }

  #rayCast(items: tri.Object3D[], xy: tri.Vector2): tri.Intersection | undefined {
    this.#raycaster.setFromCamera(xy, this.#camera);
    const intersections = this.#raycaster.intersectObjects(items);
    return intersections.length > 0 ? intersections[0] : undefined;
  }

  #xyFromEvent(e: PointerEvent) {
    const { x, y } = std.elementOffset(this.#element!, e);
    return new tri.Vector2(
      (x / this.#element!.clientWidth) * 2 - 1,
      (y / this.#element!.clientHeight) * -2 + 1,
    );
  }

  readonly #pick = (e: PointerEvent) => {
    if (!(e.buttons & 1)) {
      return;
    }

    const xy = this.#xyFromEvent(e);
    const rayCast = this.#rayCast(this.#spheres, xy);
    if (!rayCast) {
      this.#selection.selected = undefined;
      return;
    }

    const mesh = rayCast.object as tri.Mesh;
    this.#selection.selected = mesh;

    // save initial position to apply delta to it when dragging
    this.#dragCenter = mesh.position.clone();

    // calculate mesh parent hierarchy scale
    mesh.updateMatrixWorld(false);
    const worldMatrix = mesh.matrixWorld;
    const worldScale = worldMatrix.getMaxScaleOnAxis();
    const scale = worldScale / mesh.scale.x; // exclude mesh own scale

    // calculate viewport height in units, at the mesh's distance,
    // to convert pixels to units when dragging
    const position = mesh.position.clone();
    position.applyMatrix4(worldMatrix);
    let height = 0;
    const distance = position.sub(this.#camera.position).length();
    height = 2 * distance * Math.tan((this.#camera.fov * Math.PI) / 360);
    this.#dragScale = height / this.#element!.clientHeight / scale;

    this.#trackPointer = true;
    this.#pointer = std.elementOffset(this.#element!, e);
    this.#element!.setPointerCapture(e.pointerId);
    e.stopImmediatePropagation();
  };

  readonly #drag = (e: PointerEvent) => {
    if (!this.#trackPointer) {
      const xy = this.#xyFromEvent(e);
      const rayCast = this.#rayCast(this.#spheres, xy);
      this.#selection.hovered = (rayCast && rayCast.object) || undefined;
      return;
    }
    const { y } = std.elementOffset(this.#element!, e);
    const delta = this.#pointer.y - y;
    const z = std.clamp(this.#dragCenter.z + delta * this.#dragScale, this.#minZ, this.#maxZ);
    this.#reset(() => z);
  };

  readonly #drop = (e: PointerEvent) => {
    if (this.#trackPointer && !(e.buttons & 1)) {
      this.#element!.releasePointerCapture(e.pointerId);
      this.#trackPointer = false;
    }
  };

  readonly #keyDown = (e: KeyboardEvent) => {
    if (e.altKey || e.shiftKey) {
      return;
    }
    switch (e.code) {
      case 'Digit1':
        this.#reset(() => this.#minZ, e.ctrlKey);
        break;
      case 'Digit2':
        this.#reset(() => 0.5 * (this.#minZ + this.#maxZ), e.ctrlKey);
        break;
      case 'Digit3':
        this.#reset(() => this.#maxZ, e.ctrlKey);
        break;
      case 'Digit0':
        this.#reset((x, y) => this.#defaultZ(x, y), e.ctrlKey);
        break;
      case 'KeyG':
        if (this.#plane) {
          this.showGrid = !this.showGrid;
        }
        break;
      case 'KeyL':
        if (this.#loRes) {
          this.showLoRes = !this.showLoRes;
        }
        break;
      case 'Minus':
      case 'NumpadSubtract':
        if (this.subdiv > this.#minSubdiv) {
          --this.subdiv;
          this.#interpolate();
        }
        break;
      case 'Equal':
      case 'NumpadAdd':
        if (this.subdiv < this.#maxSubdiv) {
          ++this.subdiv;
          this.#interpolate();
        }
        break;
      default:
        // console.log(e.code);
        return;
    }
    e.stopImmediatePropagation();
    e.preventDefault();
  };
}
