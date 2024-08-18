# include <iostream>
using namespace std;

class Node {
  public:
  int value;
  Node* next;

  Node(int val) {
    this -> value = val;
    next = nullptr;
  }
};

class SinglyLinkedList {
  public:
  Node* head;
  Node* tail;
  int length;

  SinglyLinkedList() {
    this -> head = nullptr;
    this -> tail = nullptr;
    this -> length = 0;
  }

  // Get method
  Node* get(int index) {
    if (index > this -> length || index < 0) {
      return nullptr;
    }

    Node* currentNode = this -> head;
    for (int i = 0; i < index; i++) {
      currentNode = currentNode -> next;
    }
    return currentNode;
  }

  bool set(int index, int value) {
    if (index > this -> length || index < 0) {
      return false;
    }
    Node* node = this -> get(index);
    node -> value = value;
    return true;
  }

  SinglyLinkedList* push(int val) {
    Node* newNode = new Node(val);

    if (!this -> head) {
      this -> tail = newNode;
      this -> head = newNode;
    } else {
      this -> tail -> next = newNode;
      this -> tail = newNode;
    }
    this -> length++;

    return this;
  }

  SinglyLinkedList* unshift(int val) {
    Node* newNode = new Node(val);

    if (!this -> head) {
      this -> tail = newNode;
      this -> head = newNode;
    } else {
      newNode -> next = this -> head;
      this -> head = newNode;
    }
    this -> length++;

    return this;
  }

  SinglyLinkedList* insert(int index, int value) {
    if (index < 0 || index >= this -> length) {
      return nullptr;
    }

    if (index == 0) {
      this -> unshift(value);
      return this;
    }

    if (index == this -> length - 1) {
      this -> push(value);
      return this;
    }

    Node* newNode = new Node(value);
    Node* nodeBefore = this -> get(index - 1);

    newNode -> next = nodeBefore -> next;
    nodeBefore -> next = newNode;

    this -> length++;

    return this; 
  }

  Node* pop() {

    if (!this -> head) {
      return nullptr;
    }
    Node* currentNode = this -> head;
    Node* previousNode = currentNode;

    while (currentNode -> next) {
      previousNode = currentNode;
      currentNode = currentNode -> next;
    }

    previousNode -> next = nullptr;
    this -> tail = previousNode;
    this -> length--;

    if (this -> length == 0) {
      this -> head = this -> tail = nullptr;
    }

    return currentNode;
  }

  Node* shift() {
    if (!this -> head) {
      return nullptr;
    }

    Node* oldHead = this -> head;
    this -> head = oldHead -> next;
    oldHead -> next = nullptr;
    this -> length--;

    if (this -> length == 0) {
      this -> head = this -> tail = nullptr;
    }

    return oldHead;
  }

  Node* remove(int index) {

    if (index > this -> length || index < 0) {
      return nullptr;
    }

    if (index == 0) {
      return this -> shift();
    }

    if (index == this -> length - 1) {
      return this -> pop();
    }

    Node* node = this -> get(index);
    Node* prevNode = this -> get(index - 1);

    prevNode -> next = node -> next;
    node -> next = nullptr;
    this -> length--;

    if (this -> length == 0) {
      this -> head = this -> tail = nullptr;
    }

    return node;
  }

  void print() {
    if (!this -> head) {
      cout << "[]" << endl;
      return;
    }

    Node* current = this -> head;
    cout << "[ ";

    while (current -> next) {
      cout << current -> value << " ";
      current = current -> next;
    }
    cout << current -> value;
    cout << " ]" << endl;
  }
};

int main() {
  SinglyLinkedList list;

  list.print();

  list.push(10);
  list.push(12);
  list.push(1122);


  list.print();

  list.unshift(123);
  list.unshift(1);

  list.print();
  
  list.pop();
  list.pop();
  list.print();

  list.insert(0, 12);
  list.insert(2, 124);
  list.insert(list.length - 1, 12);
  list.print();

  list.set(2, 14);
  list.print();

  list.shift();
  list.print();
  
  list.remove(3);
  list.print();

  cout << list.length << endl;
  cout << list.head -> value << " " << list.tail -> value << endl;

  return 0;
}