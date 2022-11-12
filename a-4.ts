import { input1, Input1 } from "./a-var";

export function sort(objs: Input1[]): Input1[] {
  let _objs = [...objs];
  for (let i = 0; i < _objs.length; i++) {
    for (let j = 0; j < _objs.length - 1 - i; j++) {
      if (_objs[j].age > _objs[j + 1].age) {
        const a = _objs[j];
        const b = _objs[j + 1];
        _objs[j] = b;
        _objs[j + 1] = a;
      }
    }
  }
  return _objs;
}
