
class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new node in the BST.
   * Complexity:
   * O(log(n)) - Best/Avg case,
   * O(n) - Worst case
   * @param value - Number
   */
  insert(value: number) {
    let newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return;

      else if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;

          return this;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;

          return this;
        }

        current = current.right;
      }
    }
  }

  /**
   * Search if a value exists in the BST.
   * Complexity:
   * O(log(n)) - Best/Avg case,
   * O(n) - Worst case
   * @param value - Number
   */
  find(value: number) {
    if (this.root === null) return undefined;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }

    if (!found) return undefined;

    return current;
  }

  /**
   * Breadth-first search (Iterative)
   */
  bfsIterative() {
    let node = this.root;
    const data = [];
    const queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

function main() {
  const bst = new BinarySearchTree();

  bst.insert(1);
  bst.insert(3);
  bst.insert(5);
  bst.insert(67);
  bst.insert(54);
  bst.insert(45);
  bst.insert(23);

  const bfs = bst.bfsIterative();

  console.log('BFS: ', bfs);
}

main();
