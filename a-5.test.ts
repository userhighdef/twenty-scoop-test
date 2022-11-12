import { maximum } from "./a-5";
import { input2 } from "./a-var";

test("A-5 Test find max by salary on array of object", () => {
  expect(maximum(input2, (key) => key.salary)).toEqual(
    input2.sort((a, b) => b.salary - a.salary)[0]
  );
});

test("A-5 Test find max by name on array of object", () => {
  expect(maximum(input2, (key) => key.name)).toEqual(
    input2.sort((a, b) => (b.name > a.name ? 1 : b.name < a.name ? -1 : 0))[0]
  );
});

test("A-5 Test find max by age on array of object", () => {
  expect(maximum(input2, (key) => key.age)).toEqual(
    input2.sort((a, b) => (b.age > a.age ? 1 : b.age < a.age ? -1 : 0))[0]
  );
});

test("A-5 Test find max by children on array of object", () => {
  expect(maximum(input2, (key) => key.children)).toEqual(
    input2.sort((a, b) =>
      b.children > a.children ? 1 : b.children < a.children ? -1 : 0
    )[0]
  );
});
