# Dynamic Programming

A method for solving a complex problem by breaking it down into a collection of simpler sub-problems, solving each of those sub-problems just once, and storing their solutions.

## It only works on problems with...

- Optimal Substructure &
- Overlapping Sub-problems

- A problem is said to have overlapping sub-problems if it can be broken down into sub-problems which are reused several times

## Approach - 1 : Memoization [TOP-DOWN]

- Storing the results of expensive function calls and returning the cached result when the same inputs occur again

## Approach - 2 : Tabulation [BOTTOM-UP]

- Storing the result of a previous result in a "table" (usually an array)
- Usually done using iteration
- Better space complexity can be achieved using tabulation

---

## Backtracking

- Backtracking is a general algorithm for finding all (or some) solutions to notably constraint satisfaction problems

- It incrementally builds candidates to the solutions, and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot possibly be completed to a valid solution"

---

**Note**

- Greedy Algorithms are a more aggressive and not always efficient way of solving algorithms
- Backtracking is quite useful when solving for restrictive conditions with unknown possibilities

## Code Samples

- [Fibonacci](fibonacci.ts)
