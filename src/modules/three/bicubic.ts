import * as tri from 'three';

import * as geo from '@/lib/geometry';
import * as img from '@/lib/images';
import * as std from '@/lib/std';
import { Controller } from '@/modules/three/controller';
import { SelectionGroup } from '@/modules/three/selection-group';

export class Bicubic extends std.Disposable {
  readonly #mounted = new std.Disposable();

  readonly #scene: tri.Scene;
  readonly #camera: tri.PerspectiveCamera;
  #element?: HTMLElement;
  readonly #controller: Controller;
  readonly #root = new tri.Group();

  #z: number[] = [];
  #meshes: tri.Mesh[] = [];
  #coordinateGrid?: tri.LineSegments;
  #loRes?: tri.LineSegments;
  #hiRes?: tri.LineSegments;
  #group = new SelectionGroup();

  #raycaster = new tri.Raycaster();
  #trackPointer = false;
  #pointer = { x: 0, y: 0 };
  #dragCenter!: tri.Vector3;
  #dragScale = 1;

  #gridSize = 5;
  #subdiv = 10;

  readonly #minGridSize = 2;
  readonly #maxGridSize = 8;
  readonly #minSubdiv = 2;
  readonly #maxSubdiv = 16;
  readonly #minZ = -1;
  readonly #maxZ = 1;

  readonly #meshColor = 0xffff00;
  readonly #loResColor = 0xf06000;
  readonly #hiResColor = 0x008000;
  readonly #fitSize = 2;

  constructor(scene: tri.Scene, camera: tri.PerspectiveCamera) {
    super();
    this.#scene = scene;
    this.#camera = camera;
    this.#controller = new Controller({
      phi: -Math.PI / 2,
      theta: Math.PI / 4,
      radius: 5,
      minRadius: 1,
      lookAt: new tri.Vector3(0, 0, 0.25),
      zoom: 1.5,
    });

    this.addDisposers(() => {
      this.#controller.dispose();
      this.#scene.remove(this.#root);
      geo.dispose(this.#root);
    });

    this.#setup();
  }

  mount(element: HTMLElement) {
    this.#element = element;
    this.#mounted.addDisposers(
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

  #setup() {
    const x0 = -this.#fitSize / 2;
    const y0 = -this.#fitSize / 2;
    const z0 = 0;

    for (let y = 0; y < this.#maxGridSize; ++y) {
      for (let x = 0; x < this.#maxGridSize; ++x) {
        this.#z.push(this.#defaultZ(x, y));
      }
    }

    this.#root.position.set(x0, y0, z0);
    this.#scene.add(this.#root);

    this.#interpolate();
  }

  #defaultZ(x: number, y: number) {
    return 0.5 * Math.cos(x) * Math.cos(y);
  }

  #reset(z: (x: number, y: number) => number, all: boolean = false) {
    if (all) {
      for (let y = 0; y < this.#maxGridSize; ++y) {
        for (let x = 0; x < this.#maxGridSize; ++x) {
          this.#setZ(x, y, z(x, y));
        }
      }
      this.#interpolate();
    } else if (this.#group.selected) {
      const [x, y] = this.#meshXY(this.#group.selected as tri.Mesh);
      this.#setZ(x, y, z(x, y));
      this.#interpolate();
    }
  }

  #interpolate() {
    const size = this.#gridSize;
    this.#root.scale.setScalar(this.#fitSize / size);

    const grid = new Float32Array(size * size);
    const idx = (x: number, y: number) => std.clamp(x, 0, size - 1) + std.clamp(y, 0, size - 1) * size;
    const get = (x: number, y: number) => grid[idx(x, y)];
    const set = (x: number, y: number, value: number) => (grid[idx(x, y)] = value);

    const oldSize = Math.round(Math.sqrt(this.#meshes.length));
    if (oldSize !== size) {
      this.#group.selected = undefined;
      this.#group.hovered = undefined;
      for (const mesh of this.#meshes) {
        this.#root.remove(mesh);
        geo.dispose(mesh);
      }
      this.#meshes = [];
      for (let y = 0; y < size; ++y) {
        for (let x = 0; x < size; ++x) {
          const sphere = new tri.Mesh(geo.sphere(1, 4), new tri.MeshPhongMaterial({ color: this.#meshColor }));
          sphere.scale.setScalar(0.07);
          sphere.position.set(x + 0.5, y + 0.5, this.#getZ(x, y));
          this.#meshes.push(sphere);
          this.#root.add(sphere);
        }
      }
    }

    for (let y = 0; y < size; ++y) {
      for (let x = 0; x < size; ++x) {
        set(x, y, this.#getZ(x, y));
      }
    }

    if (this.#coordinateGrid) {
      this.#root.remove(this.#coordinateGrid);
      geo.dispose(this.#coordinateGrid);
    }
    this.#coordinateGrid = new tri.LineSegments(
      geo.grid(this.#gridSize, this.#gridSize, (x, y) => new tri.Vector3(x, y, this.#minZ)),
      new tri.LineBasicMaterial({ color: 0, transparent: true, opacity: 0.5 }),
    );
    this.#root.add(this.#coordinateGrid);

    const visible = (this.#loRes && this.#loRes.visible) || false;
    if (this.#loRes) {
      this.#root.remove(this.#loRes);
      geo.dispose(this.#loRes);
    }
    const g = geo.grid(size + 3, size + 3, (x, y) => new tri.Vector3(x - 1.5, y - 1.5, get(x - 2, y - 2)));
    this.#loRes = new tri.LineSegments(g, new tri.LineBasicMaterial({ color: this.#loResColor }));
    this.#loRes.visible = visible;
    this.#root.add(this.#loRes);

    if (this.#hiRes) {
      this.#root.remove(this.#hiRes);
      geo.dispose(this.#hiRes);
    }

    const subdiv = this.#subdiv;
    const h = geo.grid((size - 1) * this.#subdiv, (size - 1) * this.#subdiv, (x, y) => {
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
      const z = img.bicubic(dx, dy, (x, y) => get(x0 + x, y0 + y));
      return new tri.Vector3(x / subdiv + 0.5, y / subdiv + 0.5, z);
    });
    this.#hiRes = new tri.LineSegments(h, new tri.LineBasicMaterial({ color: this.#hiResColor }));
    this.#root.add(this.#hiRes);
  }

  #getZ(x: number, y: number) {
    return this.#z[x + y * this.#maxGridSize];
  }

  #setZ(x: number, y: number, value: number) {
    this.#z[x + y * this.#maxGridSize] = value;
    if (x < this.#gridSize && y < this.#gridSize) {
      this.#meshes[x + y * this.#gridSize].position.setZ(value);
    }
  }

  #meshXY(mesh: tri.Mesh): [number, number] {
    const index = this.#meshes.findIndex((m) => m === mesh);
    const x = index % this.#gridSize;
    const y = (index - x) / this.#gridSize;
    return [x, y];
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
    if (!(e.buttons & 1)) {
      return;
    }

    const xy = this.#xyFromEvent(e);
    const rayCast = this.#rayCast(this.#meshes, xy);
    if (!rayCast) {
      this.#group.selected = undefined;
      return;
    }

    const mesh = rayCast.object as tri.Mesh;
    this.#group.selected = mesh;

    // save initial position to apply delta to it when dragging
    this.#dragCenter = mesh.position.clone();

    // calculate mesh parent hierarchy scale
    mesh.updateMatrixWorld(false);
    const worldMatrix = mesh.matrixWorld;
    const worldScale = worldMatrix.getMaxScaleOnAxis();
    const scale = worldScale / mesh.scale.x; // not count mesh own scale

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

  #drag = (e: PointerEvent) => {
    if (!this.#trackPointer) {
      const xy = this.#xyFromEvent(e);
      const rayCast = this.#rayCast(this.#meshes, xy);
      this.#group.hovered = (rayCast && rayCast.object) || undefined;
      return;
    }
    const { x, y } = std.elementOffset(this.#element!, e);
    const delta = this.#pointer.y - y;
    const z = std.clamp(this.#dragCenter.z + delta * this.#dragScale, this.#minZ, this.#maxZ);
    this.#reset(() => z);
  };

  #drop = (e: PointerEvent) => {
    if (this.#trackPointer && !(e.buttons & 1)) {
      this.#element!.releasePointerCapture(e.pointerId);
      this.#trackPointer = false;
    }
  };

  #keyDown = (e: KeyboardEvent) => {
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
      case 'KeyL':
        if (this.#loRes) {
          this.#loRes.visible = !this.#loRes.visible;
        }
        break;
      case 'Comma':
        if (this.#gridSize > this.#minGridSize) {
          --this.#gridSize;
          this.#interpolate();
        }
        break;
      case 'Period':
        if (this.#gridSize < this.#maxGridSize) {
          ++this.#gridSize;
          this.#interpolate();
        }
        break;
      case 'Minus':
      case 'NumpadSubtract':
        if (this.#subdiv > this.#minSubdiv) {
          --this.#subdiv;
          this.#interpolate();
        }
        break;
      case 'Equal':
      case 'NumpadAdd':
        if (this.#subdiv < this.#maxSubdiv) {
          ++this.#subdiv;
          this.#interpolate();
        }
        break;
      default:
        return;
    }
    e.stopImmediatePropagation();
    e.preventDefault();
  };
}
