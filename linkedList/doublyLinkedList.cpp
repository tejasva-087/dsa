# include <iostream>
using namespace std;

class Node {
  public:
  Node* next;
  Node* prev;
  int value;

  Node(int val) {
    this -> value = val;
    next = nullptr;
    prev = nullptr;
  }
};

class DoublyLinkedList {
  public:
  Node* head;
  Node* tail;
  int length;

  DoublyLinkedList() {
    this -> head = nullptr;
    this -> tail = nullptr;
    this -> length = 0;
  }

  DoublyLinkedList* push(int value) {
    Node* newNode = new Node(value);

    if (!this -> head) {
      this -> head = this -> tail = newNode;
    } else {
      this -> tail -> next = newNode;
      newNode -> prev = this -> tail;
      this -> tail = newNode;
    }
    this -> length++;
    return this;
  }

  Node* pop() {
    if (!this -> head) {
      return nullptr;
    }

    Node* oldTail = this -> tail;
    this -> tail = oldTail -> prev;
    this -> tail -> next = nullptr;
    oldTail -> prev = nullptr;
    this -> length--;

    if (this -> length == 0) {
      this -> head = this -> tail = nullptr;
    }
    return oldTail;
  }

  Node* shift() {
    if (!this -> head) {
      return nullptr;
    }

    Node* oldHead = this -> head;
    this -> head = oldHead -> next;
    this -> head -> prev = nullptr;
    oldHead -> next = nullptr;
    this -> length--;

    if (this -> length == 0) {
      this -> head = this -> tail = nullptr;
    }

    return oldHead;
  }

  DoublyLinkedList* unshift(int value) {
    Node* newNode = new Node(value);

    if (!this -> head) {
      this -> head = this -> tail = newNode;
    } else {
      newNode -> next = this -> head;
      this -> head -> prev = newNode;
      this -> head = newNode;
    }

    this -> length++;
    return this;
  }

  Node* get(int index) {
    if (!this -> head) {
      return nullptr;
    }

    int mid = this -> length / 2;

    Node* currentNode;

    if (index <= mid) {
      currentNode = this -> head;
      for (int i = 0; i < index; i++) {
        currentNode = currentNode -> next;
      }
    } else {
      currentNode = this -> tail;
      for (int i = this -> length - 1; i > index; i--) {
        currentNode = currentNode -> prev;
      }
    }
    return currentNode;
  }

  bool set(int index, int value) {
    if (index < 0 || index > this -> length) {
      return false;
    }

    Node* node = this -> get(index);
    node -> value = value;
    return true;
  }

  Node* remove(int index) {
    if (index < 0 || index > this -> length) {
      return nullptr;
    }

    if (index == 0) {
      return this -> shift();
    }

    if (index == this -> length) {
      return this -> pop();
    }

    Node* node = this -> get(index);
    node -> prev -> next = node -> next;
    node -> next -> prev = node -> prev;
    node -> next = nullptr;
    node -> prev = nullptr;

    return node;
  }

  DoublyLinkedList* insert(int index, int value) {
    if (index < 0 || index > this -> length) {
      return 0;
    }

    if (index == 0) {
      return this -> unshift(value);
    }

    if (index == this -> length - 1) {
      return this -> push(value);
    }

    Node* newNode = new Node(value);
    Node* oldNode = this -> get(index);

    newNode -> prev = oldNode -> prev;
    newNode -> next = oldNode;
    newNode -> prev -> next = newNode;
    oldNode -> prev = nullptr;

    this -> length++;
    return this;
  }

  void print() {
    if (!this -> head) {
      cout << "[]" << endl;
      return;
    }
    Node* currentNode = this -> head;
    cout << "[";
    while (currentNode -> next) {
      cout << currentNode -> value << " ";
      currentNode = currentNode -> next;
    }
    cout << currentNode -> value << "]" << endl;
    return; 
  }
};

int main() {
  DoublyLinkedList list;

  list.push(1122);
  list.push(14231);
  list.push(12234231);
  list.push(142423);
  list.print();

  // list.pop();
  // list.pop();
  // list.pop();
  // list.print();

  // list.unshift(54);
  // list.unshift(43);
  // list.print();

  // list.shift();
  // list.shift();
  // list.print();

  // list.insert(0, 12);
  // cout << list.insert(3, 98) << endl;
  // list.insert(list.length - 1, 100);
  // list.print();

  list.remove(0);
  // list.remove(2);
  list.print();

  cout << list.length << endl;

  return 0;
}
