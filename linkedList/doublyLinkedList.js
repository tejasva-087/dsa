class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.value = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) this.tail = this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const node = this.tail;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  shift() {
    if (!this.head) return -1;

    const node = this.head;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) this.tail = this.head = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (!index || index < 0 || index > this.length) return undefined;

    const mid = Math.trunc(this.length / 2);
    let currentNode;

    if (0 < index < mid) {
      currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length; i > index; i++) {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);

    if (index === this.length - 1) return !!this.push(value);

    const node = this.get(index);
    if (!node) return false;

    const newNode = new Node(value);

    newNode.next = node;
    newNode.prev = node.prev;
    node.prev = newNode;
    newNode.prev.next = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const node = this.get(index);

    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = node.prev = null;
    this.length--;

    return node;
  }
}

const list = new DoublyLinkedList();
list
  .push("Hello")
  .push("world")
  .push("I")
  .push("Am")
  .push("Tejasva")
  .push("Khandelwal")
  .push("Hi");

console.log(list.remove(3));

console.log(list);
