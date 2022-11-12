export function sort(nums: number[]): number[] {
  let arr = [...nums];
  for (let i = 0; i < arr.length; i++) {
    // i loop through every array member
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // j loop and shift the bigger member to the right every time it's pass the member
      // so the biggest member will push to rightest every j loop done
      // j < arr.length - 1 - i # because the rightest count to i has been push to the rightest i times and plus 1 to prevent sort on undefined value
      if (arr[j] > arr[j + 1]) {
        const a = arr[j]; // hold the value
        const b = arr[j + 1]; // hold the value
        arr[j] = b; // swap
        arr[j + 1] = a; //swap
      }
    }
  }
  return arr;
}
