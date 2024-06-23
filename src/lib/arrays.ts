export function copy<T extends (number[] | number[][])>(a: T): T {
  if (a.length === 0) {
    return [] as any as T;
  }

  const r = [];
  const d1 = a.length;
  r.length = d1;
  if (typeof a[0] === 'number') {
    for (let i = 0; i < d1; ++i) {
      r[i] = a[i];
    }
    return r as any as T;
  }

  for (let i = 0; i < d1; ++i) {
    r[i] = copy(a[i] as number[]);
  }
  return r as any as T;
}

export function format(a: number[] | number[][], d: number): string {
  const n: any = copy(a);

  // 1 dimension
  if (typeof a[0] === 'number') {
    for (let i = 0; i < a.length; ++i) {
      n[i] = (a[i] as number).toFixed(d);
    }
    return `[ ${n.join(', ')} ]`;
  }

  // 2 dimensions
  let max = 0;
  const result = ['['];
  for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j < a[0].length; ++j) {
      n[i][j] = (a[i] as number[])[j].toFixed(d);
      max = Math.max(max, n[i][j].length);
    }
  }
  for (let i = 0; i < a.length; ++i) {
    result.push(`  [ ${(n[i] as string[]).map(value => value.padStart(max)).join(', ')} ]`);
  }
  result.push(']\n');
  return result.join('\n');
}

// assumes single dimension, equal length
export function dot(a: number[], b: number[]) {
  const length = a.length;
  let sum = 0;
  for (let i = 0; i < length; ++i) {
    sum += a[i] * b[i];
  }
  return sum;
}

// assumes at least one array
export function mul(a: number | number[], b: number | number[]) {
  if (typeof a === 'number') {
    return 0;
  }
}

export function testArrays() {
  {
    const a = [1, 2, 3];
    const r = copy(a);
    console.log(r);
  }
  {
    const a = [[1], [2], [3]];
    const r = copy(a);
    console.log(r);
  }
  {
    const a = [[0.51, -1], [2, -1234.25]];
    console.log(format(a, 2));
  }
}
