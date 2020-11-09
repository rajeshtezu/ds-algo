
class PQNode {
  value: number;
  priority: number;

  constructor(value: number, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {   // Min Heap
  values: PQNode[];

  constructor() {
    this.values = [];
  }

  /**
   * Insert a node in the priority queue
   * @param value A numerical value for the node
   * @param priority priority of the node (Smaller value has higher priority)
   */
  insert(value: number, priority: number) {
    let newNode = new PQNode(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  /**
   * Keep swapping the last element with parent until find right spot
   */
  private bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority > parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  /**
   * Remove and returns the highest priority node
   */
  extractHighestPriorityNode() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  /**
   * Replace with smallest child, repeat until find right spot.
   */
  private sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild: PQNode, rightChild: PQNode, swapIndex: number = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priority < element.priority) swapIndex = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swapIndex === null && rightChild.priority < element.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIdx;
        }
      }

      if (swapIndex === null) break;
      this.values[idx] = this.values[swapIndex];
      this.values[swapIndex] = element;
      idx = swapIndex;
    }
  }

  getQueue() {
    return this.values;
  }
}

function pQMain() {
  const pq = new PriorityQueue();

  pq.insert(10, 1);
  pq.insert(20, 6);
  pq.insert(56, 2);
  pq.insert(323, 3);
  pq.insert(152, 4);
  pq.insert(13, 5);
  pq.insert(89, 5);

  const q = pq.getQueue();
  console.log('Priority Queue: ', q);

  const highestPriorityNode = pq.extractHighestPriorityNode();
  const resultingQ = pq.getQueue();
  console.log('Highest Priority Node: ', highestPriorityNode);
  console.log('Resulting Priority Queue: ', resultingQ);

  const highestPriorityNode1 = pq.extractHighestPriorityNode();
  console.log('Highest Priority Node: ', highestPriorityNode1);

  const highestPriorityNode2 = pq.extractHighestPriorityNode();
  console.log('Highest Priority Node: ', highestPriorityNode2);
}

pQMain();
