import { findMax } from "./a-1";
import { arrayOfNumber } from "./a-var";

test("A-1 Test find max on array of number", () => {
  expect(findMax(arrayOfNumber)).toEqual(Math.max(...arrayOfNumber));
});
