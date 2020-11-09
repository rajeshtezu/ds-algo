

class MaxBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }

  /**
   * Insert a new element to the Binary heap
   * @param element - Number
   */
  insert(element: number) {
    this.values.push(element);

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

      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  /**
   * Get the max value from the Max Binary Heap
   */
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  /**
   * Replace with largest child, repeat until find right spot.
   */
  private sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild: number, rightChild: number, swap: number = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild > element) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  getMaxHeap() {
    return this.values;
  }
}

function maxBHeapMain() {
  const maxBinaryHeap = new MaxBinaryHeap();

  maxBinaryHeap.insert(10);
  maxBinaryHeap.insert(50);
  maxBinaryHeap.insert(30);
  maxBinaryHeap.insert(20);
  maxBinaryHeap.insert(40);
  maxBinaryHeap.insert(90);

  const maxBHeap = maxBinaryHeap.getMaxHeap();
  console.log('Max binary heap: ', maxBHeap);

  const max = maxBinaryHeap.extractMax();
  const resultingHeap = maxBinaryHeap.getMaxHeap();
  console.log('Max: ', max);
  console.log('Remaining Max Heap: ', resultingHeap);
}

maxBHeapMain();
