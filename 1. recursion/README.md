# Recursion

A process (a function in our case) that calls itself.

Example of some popular programs using recursion

1. JSON.parse()
2. JSON.stringify()
3. document.getElementById() and DOM traversal algorithms
4. Object traversal

## Call Stack

It manages what happens when functions are invoked.

function called -> pushed
function return -> pop

When we write recursive functions, we keep pushing new functions onto the call stack.

Two essential parts of a recursive function:

1. Base case
2. Different Input

Eg

```
function sumRange(num) {
  if(num === 1) return 1;

  return sumRange(num) + sumRange(num - 1);
}
```

Eg

```
function factorial(num) {
  if(num === 1) return 1;

  return num * factorial(num - 1);
}
```

## Common Recursion pitfall

- No base case
- Forgetting to return or return wrong thing
- stack overflow

## Helper method Recursion pattern

Eg

```
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // Modify the outerScopedVariable here

    helper(helperInput --);
  }

  helper(input);

  return outerScopedVariable;
}
```

## Pure Recursion method

Eg

```
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if(arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}
```

## Code Samples

- [Binary search iterative](binary-search-iterative.ts)
- [Binary search recursive - TODO](#)
- [Count sub array - Brute Force](count-sub-array-bf.ts)
