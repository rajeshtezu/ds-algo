/*
 * Q. Write a function called maxSubarraySum which accepts an array of integers
 * and a number called n. The function should calculate the maximum sum of n
 * consecutive elements in the array.
 * 
 * Hint: 
 * 1. Store the sum of 1st n items in a variable.
 * 2. From the next n consecutive items pick the last item and add to the stored sum and subtract the 1st item from the sum of previous n items.
 */

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return;
  }

  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    const sum = max - arr[i - num] + arr[i];
    max = Math.max(max, sum);
  }

  return max;
}

maxSubarraySum([1, 2, 4, 5, 3, 4, 5, 5, 5], 3);

// O(n)
