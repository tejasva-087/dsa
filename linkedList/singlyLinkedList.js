"use strict";

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // 1) creating the new node
    const newNode = new Node(value);

    // 2) if it is the first element then setting the head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 3) else setting the next property on the tail to the new node and incrementing the list of the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    // 1) checking if there is no node in the list
    if (!this.head) return undefined;

    // 2) checking for the second last node
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // 3) setting up the tail
    this.tail = newTail;
    this.tail.next = null;

    // 4) decrementing the length
    this.length--;

    // 5) checking if the list is empty or not and if yes setting up the head and tail
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return current;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
}

const linkedList = new SinglyLinkedList();

const list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.push("fourth");
list.push("Fifth");
