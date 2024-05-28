export function hexByte(value: number) {
  return Math.round(value).toString(16).padStart(2, '0');
}

export function allPropsExist(data: any, props: string[]) {
  for (const prop of props) {
    if (data[prop] === undefined) {
      return false;
    }
  }
  return true;
}

export function stringify(data: any, props: string[]) {
  const obj: any = {};
  props.forEach(prop => obj[prop] = data[prop]);
  return JSON.stringify(obj);
}
