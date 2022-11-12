// type K = keyof Input2;
// type KK = { [key in K]: key };

// export function maximum(objs: Input2[], callback: (obj: KK) => K): Input2 {
//   const keys: KK = Object.keys(objs[0]).reduce(
//     (k, v) => ({ ...k, ...{ [v]: v } }),
//     {} as KK
//   );
//   const key = callback(keys);
//   let max = objs[0];
//   for (const o of objs) {
//     if (o[key] > max[key]) {
//       max = o;
//     }
//   }
//   return max;
// }

export function maximum<T extends {}>(
  objs: T[],
  callback: (obj: { [key in keyof T]: key }) => keyof T
): T {
  const keys = Object.keys(objs[0]).reduce(
    (k, v) => ({ ...k, ...{ [v]: v } }),
    {} as { [key in keyof T]: key }
  );
  const key = callback(keys);
  let max = objs[0];
  for (const o of objs) {
    if (o[key] > max[key]) {
      max = o;
    }
  }
  return max;
}
