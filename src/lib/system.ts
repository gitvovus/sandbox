export let performanceTestDuration: number | undefined = undefined;

export function testPerformance() {
  performance.mark('start');
  doSomeMath();
  performance.mark('end');
  performance.measure('test', 'start', 'end');
  performanceTestDuration = performance.getEntriesByName('test')[0].duration;
}

function doSomeMath() {
  const data: number[] = [];
  const n = 1e6;
  for (let i = 0; i < 1000000; ++i) {
    const a = (2 * Math.PI * i) / n;
    data.push(Math.cos(a), Math.sin(a));
  }
  return data.length;
}
