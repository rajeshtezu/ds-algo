
class ListNode {
  val: number;
  next: ListNode;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: ListNode;
  tail: ListNode;
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
  push(val: number) {
    let newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Pops out the last node of the list
   */
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /**
   * Returns and remove the first node from the list
   */
  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;

    return current;
  }

  /**
   * Inserts a new node at the beginning of the list
   */
  unshift(val: number) {
    let newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Returns the node at given index if found else returns -1
   * @param index - Number
   */
  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;

    let count = 0;
    let current = this.head;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }


  /**
   * Updates a node at given index
   * @param index - Position to update a node
   * @param value - Value to be updated at given index
   */
  set(index: number, value: number) {
    let foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.val = value;

    return true;
  }

  /**
   * Inserts a node at given index
   * @param index - Position to insert a node
   * @param value - Value to be inserted at given index
   */
  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new ListNode(value);
    let prev = this.get(index - 1);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }


  /**
   * Reverse the List nodes' order
   */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

// Test
function main() {
  const singlyLinkedList = new SinglyLinkedList();

  singlyLinkedList.push(10);
  singlyLinkedList.push(20);
  singlyLinkedList.push(30);
  singlyLinkedList.push(40);
  const list = singlyLinkedList.push(50);

  console.log('List: ', list);
}

main();
