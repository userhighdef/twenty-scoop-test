export const arrayOfNumber = (function () {
  const blank: 0[] = [];
  blank.length = 10000;
  return blank.fill(0).map(() => Math.floor(Math.random() * 10000));
})();

export interface Input1 {
  name: string;
  age: number;
}
export const input1 = [
  {
    name: "John",
    age: 60,
  },
  {
    name: "Doe",
    age: 20,
  },
  {
    name: "Will",
    age: 40,
  },
  {
    name: "Smith",
    age: 69,
  },
  {
    name: "Mayer",
    age: 56,
  },
];

export interface Input2 {
  name: string;
  age: number;
  salary: number;
  children: number;
}
export const input2 = [
  {
    name: "John",
    age: 60,
    salary: 50000,
    children: 3,
  },
  {
    name: "Doe",
    age: 20,
    salary: 30000,
    children: 2,
  },
  {
    name: "Will",
    age: 40,
    salary: 20000,
    children: 1,
  },
  {
    name: "Smith",
    age: 69,
    salary: 25000,
    children: 0,
  },
  {
    name: "Mayer",
    age: 56,
    salary: 60000,
    children: 1,
  },
];
