/**
 * Linear Search - O(n)
 * Binary Search - O(log(n))
 */

function binarySearch(arr: number[], elem: number) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 19, 25, 26, 89];
const index = binarySearch(arr, 12)
console.log('Index: ', index, '\nitem: ', arr[index]);
