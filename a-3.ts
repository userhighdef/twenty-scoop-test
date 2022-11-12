import { input1, Input1 } from "./a-var";

export function findMax(objs: Input1[]): Input1 {
  let max = objs[0];
  for (const obj of objs) {
    if (obj.age > max.age) {
      max = obj;
    }
  }
  return max;
}
