import { sort } from "./a-4";
import { input1 } from "./a-var";

test("A-4 Test sorting on array of object", () => {
  expect(sort(input1)).toEqual(input1.sort((a, b) => a.age - b.age));
});
