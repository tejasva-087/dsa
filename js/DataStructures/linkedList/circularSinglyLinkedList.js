import { SinglyLinkedList } from "./singlyLinkedList.js";
import { Node } from "./singlyLinkedList.js";

class circluarSinglyLinkedList extends SinglyLinkedList {
  constructor() {
    super();
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevNode = this.tail;
      prevNode.next = newNode;
      this.tail = newNode;
    }
    this.tail.next = this.head;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return -1;

    let currentNode = this.head;
    let newTail = currentNode;
    let count = 0;
    while (currentNode.next && count < this.length - 1) {
      newTail = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    currentNode.next = null;
    this.tail = newTail;
    this.tail.next = this.head;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
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
    this.tail.next = this.head;
    this.length++;
    return this;
  }
}

const list = new circluarSinglyLinkedList();
list
  .push("Hello")
  .push("world")
  .push("I")
  .push("Am")
  .push("Tejasva")
  .push("Khandelwal")
  .push("Hi");
