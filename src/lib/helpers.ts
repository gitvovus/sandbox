export const f0 = (x: number) => x.toFixed(0);
export const f1 = (x: number) => x.toFixed(1);
export const f2 = (x: number) => x.toFixed(2);
export const f3 = (x: number) => x.toFixed(3);

export const x0 = (r: number, a: number) => f0(r * Math.cos(a));
export const x1 = (r: number, a: number) => f1(r * Math.cos(a));
export const x2 = (r: number, a: number) => f2(r * Math.cos(a));
export const x3 = (r: number, a: number) => f3(r * Math.cos(a));

export const y0 = (r: number, a: number) => f0(r * Math.sin(a));
export const y1 = (r: number, a: number) => f1(r * Math.sin(a));
export const y2 = (r: number, a: number) => f2(r * Math.sin(a));
export const y3 = (r: number, a: number) => f3(r * Math.sin(a));

export const v0 = ({ x, y }: { x: number; y: number }) => `(${f0(x)}, ${f0(y)})`;
export const v1 = ({ x, y }: { x: number; y: number }) => `(${f1(x)}, ${f1(y)})`;
export const v2 = ({ x, y }: { x: number; y: number }) => `(${f2(x)}, ${f2(y)})`;
export const v3 = ({ x, y }: { x: number; y: number }) => `(${f3(x)}, ${f3(y)})`;
