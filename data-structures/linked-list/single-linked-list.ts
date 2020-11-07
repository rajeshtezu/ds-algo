
class ListNode {
  val: number;
  next: ListNode;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedList;
  tail: SinglyLinkedList;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val: number) { }

  pop() { }

  shift() { }

  unshift() { }

  get(index: number) { }

  set(index: number, value: number) { }

  insert(index: number, value: number) { }

  reverse() { }
}
