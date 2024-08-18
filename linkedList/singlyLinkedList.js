export class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevNode = this.tail;
      prevNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return -1;

    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.length) return -1;

    const prevHead = this.head;
    this.head = prevHead.next;
    prevHead.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return prevHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index > this.length - 1 || index < 0) return undefined;

    if (index === 0) return this.head.value;
    if (index === this.length - 1) return this.tail.value;

    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return -1;
    node.value = value;
    return this;
  }

  insert(index, value) {
    if (index > this.length || index < 0) return false;

    if (index === 0) return !!this.unshift(value);

    if (index === this.length - 1) return !!this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index > this.length || index < 0) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = temp.next;

    this.length--;
    return temp.value;
  }

  reverse() {
    if (this.length === 0) return this;

    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next;
    let prev = null;

    while (currentNode.next) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }

    this.head.next = prev;

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    arr.push(current.value);
    while (current.next) {
      current = current.next;
      arr.push(current.value);
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push(1).push(2).push(3);
console.log(list.pop());
