# Binary Heaps

Very similar to a binary search tree, but with some different rules.

- In a MaxBinaryHeap, parent nodes are always LARGER than child nodes.
- In a MinBinaryHeap, parent nodes are always SMALLER than child nodes.
- But there is no guarantees between sibling nodes.

A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

## Use

- To implement priority queues, which is very commonly used data structure
- With graph traversal algorithms

## Storing Heap

- Can store by creating Node {} & Linked list.
- Easier way: Array

```
left*child = P_index * 2 + 1                ------- (1)
right*child = P_index * 2 + 2               ------- (2)
parent = Math.floor((childIndex - 1) / 2)   ------- (3)
```

## Insert

- Adding to a MaxBinaryHeap
  1. Add to the end
  2. **Bubble up** : Keep swapping with parent until find right spot

## Removing from a Heap

1. Remove the root
2. Replace with the most recently added
3. Adjust (Bubble down/ Sink down) : Replace with largest child, repeat until find right spot.

---

## Time Complexity

Insertion - O(log(n))
Removal - O(log(n))
Search - O(n)

## Code Samples

- [Max binary heap](max-binary-heap.ts)
