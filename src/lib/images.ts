export type RGB = [number, number, number];
export type RGBA = [number, number, number, number];

/**
 * Generates image data with given size, using generator function.
 * @param width image width.
 * @param height image height.
 * @param f generator function, should accept (x, y) pixel coordinates, and return rgba value.
 * @returns ImageData.
 */
export function generate(width: number, height: number, f: (x: number, y: number) => RGBA) {
  const image = new ImageData(width, height);
  const data = image.data;
  for (let y = 0; y < height; ++y) {
    for (let x = 0; x < width; ++x) {
      const i = 4 * (y * width + x);
      [data[i], data[i + 1], data[i + 2], data[i + 3]] = f(x, y);
    }
  }
  return image;
}

/**
 * Converts ImageData to data URL, that can be used as source for html <img> element.
 * @param data IamgeData.
 * @returns string, containing image's data URL.
 */
export function fromImageData(data: ImageData) {
  const canvas = document.createElement('canvas');
  canvas.width = data.width;
  canvas.height = data.height;
  const c = canvas.getContext('2d', { alpha: true })!;
  c.putImageData(data, 0, 0);
  return canvas.toDataURL();
}

/**
 * Converts ImageBitmap to data URL, that can be used as source for html <img> element.
 * @param data ImageBitmap.
 * @returns string, containing image's data URL.
 */
export function fromImageBitmap(data: ImageBitmap) {
  const canvas = document.createElement('canvas');
  canvas.width = data.width;
  canvas.height = data.height;
  const c = canvas.getContext('2d', { alpha: true })!;
  c.drawImage(data, 0, 0);
  return canvas.toDataURL();
}

/**
 * For given argument and function, calculates cubic interpolated value.
 * @see https://www.paulinternet.nl/?page=bicubic
 * @param x argument value, should belong to interval [0, 1]
 * @param f function, defined for argument values in { -1, 0, 1, 2 }
 * @returns calculated value.
 */
export function cubic(x: number, f: (x: number) => number) {
  const a = f(-1);
  const b = f(0);
  const c = f(1);
  const d = f(2);
  return b + 0.5 * x * (c - a + x * (2 * a - 5 * b + 4 * c - d + x * (3 * (b - c) + d - a)));
}

/**
 * For given arguments and function, calculates bicubic interpolated value.
 * @see https://www.paulinternet.nl/?page=bicubic
 * @param x x argument value, should belong to interval [0, 1]
 * @param y y argument value, should belong to interval [0, 1]
 * @param f function, defined for both argument values in { -1, 0, 1, 2 }
 * @returns calculated value.
 */
export function bicubic(x: number, y: number, f: (x: number, y: number) => number) {
  const p = [
    cubic(x, (x) => f(x, -1)),
    cubic(x, (x) => f(x, 0)),
    cubic(x, (x) => f(x, 1)),
    cubic(x, (x) => f(x, 2)),
  ];
  return cubic(y, (x) => p[x + 1]);
}
