import { sort } from "./a-2";
import { arrayOfNumber } from "./a-var";

test("A-2 Test sorting on array of number", () => {
  expect(sort(arrayOfNumber)).toEqual(arrayOfNumber.sort((a, b) => a - b));
});
