/**
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the
 * array, but it will always be sorted.
 */

function countUniqueValues(arr) {
  if (!arr.length) {
    return 0;
  }

  let i = 0,
    j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      arr[++i] = arr[j];
    }
  }

  return i + 1;
}

const myArr = [1, 1, 2, 3, 4, 4, 4, 4, 5];

console.log("Count: ", countUniqueValues(myArr));
console.log(myArr);

// O(n) solution
