import { findMax } from "./a-3";
import { input1 } from "./a-var";

test("A-3 Test find max on array of object", () => {
  expect(findMax(input1)).toEqual(input1.sort((a, b) => b.age - a.age)[0]);
});
