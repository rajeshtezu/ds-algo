# Binary Search Tree

**Tree** - A data structure that consists of nodes in a parent/child relationship.

- List is linear
- Tree is non linear

- A singly linked list is sort of special case of tree.
- In tree sibling can not point each other.

## Terminology

- **Root** : The top node in tree.
- **Child** : A node directly connected to another node when moving away from the root.
- **Parent** : The converse notion of child.
- **Siblings** : A group of nodes with the same parent.
- **Leaf** : A node with no children.
- **Edge** : The connection between one node and another.

Examples of software/technologies using Tree data structure

- HTML Dom
- Network routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in operating system
- Computer file system

- **Binary Tree** : Each node can have at most 2 children.

- **BST (Binary Search Tree)** : Binary tree with items stored in sorted order.
  - Every parent node has at most 2 children.
  - Every node to the left of a parent node is always less than the parent.
  - Every node to the right of a parent node is always greater than the parent.

---

## Tree traversal

Two ways:

- Breadth-first search (BFS) - same level 1st
- Depth-first search (DFS)
  - In-order
  - Pre-order
  - Post-order

### 1. BFS

- Steps (Iteratively):
  - Create a queue (array) and a variable (array) to store the values of nodes visited
  - Place the root node in the queue
  - Loop through as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a LEFT node on the node dequeued, add it to the queue
    - If there is a RIGHT node on the node dequeued, add it to the queue
  - Return the variable that stores the values

### 2. DFS

**2.1 DFS - PreOrder (parent -> left -> right)**

- First element is root.

Steps (Recursively):

- Create a variable (array) to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that store the values
  - If the node has a LEFT node, call the helper function with the LEFT node
  - If the node has a RIGHT node, call the helper function with the RIGHT node
- Invoke the helper function with the current variable
- Return the array of values

**2.2 DFS - PostOrder (left -> right -> parent)**

- Last element is root.

Steps (Recursively):

- Create a variable to store the values of node visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a LEFT property, call the helper function with the LEFT property
  - If the node has a RIGHT property, call the helper function with the RIGHT property
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with current variable
- Return the array of values

**2.3 DFS - InOrder (left -> parent -> right)**

Steps (Recursively):

- Same as before (pre, post order), but put the push in between left and right traversal.

---

## Uses:

- **DFS**: When tree is wider [Save space complexity]
- **BFS**: When tree is deeper [Save space complexity]

- `InOrder` traversal of `DFS` gives sorted values
- `PreOrder/PostOrder` of `DFS` could be used ti actually store in DB or any other persistent storage.

**Note**: Using InOrder & Post/Pre-Order we can construct a unique tree.

## Code Samples

- [Binary Search Tree](binary-search-tree.ts)
