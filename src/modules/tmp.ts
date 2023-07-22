// // GearBoxModel
// {

// #pickableGears: Transformable[] = [];
// #pickedGear!: Transformable;

// #gesture = Gesture.NONE;
// #pickedOffset!: { x: number; y: number; };
// #pickedPoint!: Vector2;
// #pickedPosition!: Vector2;
// #pickedRotation!: number;

// readonly #normalStroke = '#c0c0c0';
// readonly #selectedStroke = '#f0f0f0';
// readonly #normalOpacity = 0.75;
// readonly #selectedOpacity = 0.6;

//   #createTest(root: Item) {
//     [
//       { r: 0.6, x: -0.7, y: 0.2 },
//       { r: 0.8, x: -0.1, y: -0.5 },
//       { r: 1.0, x: 0.3, y: 0.8 }
//     ].forEach(({ r, x, y }) => {
//       const gear = new Transformable('path', { d: gearShape({ radius: r }) });
//       gear.position = new Vector2(x, y);
//       gear.on('dblclick', this.#dblclick);
//       gear.on('pointerdown', this.#pick);
//       gear.on('pointermove', this.#drag);
//       gear.on('pointerup', this.#drop);
//       gear.on('wheel', this.#wheel);
//       root.add(gear);
//       this.#pickableGears.push(gear);
//     });
//   }

//   #select(item: Item, bringOnTop: boolean) {
//     item.attributes['stroke'] = this.#selectedStroke;
//     item.attributes['fill-opacity'] = this.#selectedOpacity;
//     if (bringOnTop) {
//       item.index = -1;
//     }
//   }

//   #unselect(item: Item) {
//     item.attributes['stroke'] = this.#normalStroke;
//     item.attributes['fill-opacity'] = this.#normalOpacity;
//   }

//   readonly #pick = (e: PointerEvent) => {
//     if (e.ctrlKey) {
//       return;
//     }
//     switch (e.button) {
//       case 0:
//         this.#gesture = Gesture.DRAG;
//         break;
//       case 2:
//         this.#gesture = Gesture.ROTATE;
//         break;
//       default:
//         return;
//     }
//     e.stopPropagation();
//     (e.target as HTMLElement).setPointerCapture(e.pointerId);

//     this.#pickedOffset = elementOffset(this.#element!, e);
//     this.#pickedPoint = this.#camera.transform.transform(this.#controller.toCamera(e));
//     this.#pickedGear = this.#pickableGears.find((item) => item.element === e.target)!;
//     this.#pickedPosition = this.#pickedGear.position;
//     this.#pickedRotation = this.#pickedGear.rotation;

//     this.#select(this.#pickedGear, !e.shiftKey);
//   };

//   readonly #drag = (e: PointerEvent) => {
//     if (this.#gesture === Gesture.NONE) {
//       return;
//     }

//     e.stopPropagation();
//     if (!this.#pickedGear.element!.hasPointerCapture(e.pointerId)) {
//       this.#pickedGear.element!.setPointerCapture(e.pointerId);
//     }

//     if (this.#gesture === Gesture.DRAG) {
//       const point = this.#camera.transform.transform(this.#controller.toCamera(e));
//       const delta = new Vector2(point.x - this.#pickedPoint.x, point.y - this.#pickedPoint.y);
//       this.#pickedGear.position = new Vector2(
//         this.#pickedPosition.x + delta.x,
//         this.#pickedPosition.y + delta.y
//       );
//     } else {
//       const offset = elementOffset(this.#element!, e);
//       const delta = (2 * Math.PI * (offset.x - this.#pickedOffset.x)) / this.#element!.clientWidth;
//       this.#pickedGear.rotation = mod(this.#pickedRotation + delta, 2 * Math.PI);
//     }
//   };

//   readonly #drop = (e: PointerEvent) => {
//     if (this.#gesture !== Gesture.NONE) {
//       e.stopPropagation();
//       (e.target as HTMLElement).releasePointerCapture(e.pointerId);
//       this.#unselect(this.#pickedGear);
//       this.#gesture = Gesture.NONE;
//     }
//   };

//   readonly #wheel = (e: WheelEvent) => {
//     if (e.ctrlKey) {
//       return;
//     }
//     e.stopPropagation();
//     const k = e.deltaY > 0 ? 7 / 8 : 8 / 7;
//     const item = this.#pickableGears.find((item) => item.element === e.target)!;
//     item.scale = clamp(item.scale * k, 0.25, 4);
//   };

//   readonly #dblclick = (e: MouseEvent) => {
//     e.stopPropagation();
//     const item = this.#pickableGears.find((item) => item.element === e.target)!;
//     item.position = new Vector2(0, 0);
//   };
// }
