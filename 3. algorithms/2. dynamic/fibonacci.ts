/**
 * Memoization [TOP-DOWN] - O(n)
 *
 * @param n - nth fibonacci to be found
 * @param memo - Array to store the already calculated fibonacci number
 * @returns - nth fibonacci number
 */
function fibMemoization(n: number, memo: number[] = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fibMemoization(n - 1, memo) + fibMemoization(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fibMemoization(100));

/**
 * Tabulation [BOTTOM-UP] - O(n)
 *
 * @param n - nth fibonacci to be found
 * @returns - nth fibonacci number
 */
function fibTabulation(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(fibTabulation(100));
