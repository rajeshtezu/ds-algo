class DoublyListNode {
  value: number;
  next: DoublyListNode;
  prev: DoublyListNode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyListNode;
  tail: DoublyListNode;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  /**
   * Adds a node at the end of the list
   * @param val - Number
   * @return The list
   */
  push(value: number) {
    let newNode = new DoublyListNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    console.log('WIP');
  }

  shift() {
    console.log('WIP');
  }

  unshift(value: number) {
    console.log('WIP');
  }

  get(index: number) {
    console.log('WIP');
  }

  set(index: number, value: number) {
    console.log('WIP');
  }

  insert(index: number, value: number) {
    console.log('WIP');
  }

  remove(index: number) {
    console.log('WIP');
  }
}

