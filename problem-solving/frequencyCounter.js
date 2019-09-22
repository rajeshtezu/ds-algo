/**
 * Write a function called same, which accepts two arrays. The function should return true
 * if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1Counter = {};
  arr2Counter = {};

  for (let item of arr1) {
    arr1Counter[item] = arr1Counter[item] ? arr1Counter[item] + 1 : 1;
  }

  for (let item of arr2) {
    arr2Counter[item] = arr2Counter[item] ? arr2Counter[item] + 1 : 1;
  }

  for (let key in arr1Counter) {
    if (!(key ** 2 in arr2Counter)) {
      return false;
    }

    if (arr2Counter[key ** 2] !== arr1Counter[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([2, 3, 5], [4, 9, 25]));
console.log(same([2, 3, 5], [4, 9, 20]));
console.log(same([2, 3, 5], [4, 9]));

// O(n) solution
