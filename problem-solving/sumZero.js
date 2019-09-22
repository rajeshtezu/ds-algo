/*
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array
 * that includes both the values that sum to zero or undefined if a pair does not exist.
 */

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

sumZero([-9, -3, 4, 3, 5, 6, 48]);

// O(n) solution
