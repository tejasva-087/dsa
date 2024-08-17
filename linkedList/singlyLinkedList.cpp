# include <iostream>
using namespace std;

class Node {
  public:
  int value;
  Node* next;
  
  Node(int val) {
    this->value = val;
    next = nullptr;
  }
};

class SinglyLinkedList {
  public:
  Node* head;
  Node* tail;
  int length;

  SinglyLinkedList() {
    head = nullptr;
    tail = nullptr;
    length = 0;
  }

  // IMP: Get method
  Node* get(int index) {

    if (index < 0 || index > this -> length) {
      return nullptr;
    }
    Node* currentNode = this -> head;
    
    for (int i = 0; i < index; i++) {
      currentNode = currentNode -> next;
    }
    return currentNode;
  }

  // IMP Push method
  SinglyLinkedList* push(int val) {
    Node* newNode = new Node(val);

    if (!this -> head) {
      this -> head = newNode;
      this -> tail = newNode;
    } else {
      this -> tail -> next = newNode;
      this -> tail = newNode;
    }
    this -> length++; 
    return this;
  }


  // IMP Pop method
  Node* pop() {
    Node* node =  this -> get(this -> length - 2);
    if (!node) {
      return nullptr;
    }
    Node* next = node -> next;
    node -> next = nullptr;
    this -> length--;

    return next;
  }

  // IMP unshift method
  SinglyLinkedList* unshift(int val) {
    Node* newNode = new Node(val);
    if (!this -> head) {
      this -> head = newNode;
      this -> tail = newNode;
    } else {
      newNode -> next = this -> head;
      this -> head = newNode;  
    }
    this -> length++;
    return  this;
  }

  // IMP shift method
  Node* shift() {
    if (! this -> head) {
      return nullptr;
    }

    Node* node = this -> head;
    this -> head = node -> next;
    this -> length--;

    return node;
  }

  // IMP Remove method
  Node* remove(int index) {
    if (index < 0 || index > this -> length) {
      return nullptr;
    }

    if (index == 0) {
      return this -> shift();
    }

    if (index == this -> length - 1) {
      return this -> pop();
    }

    Node* node = this -> get(index - 1);
    Node* next = node -> next;
    node -> next = next -> next;
  }

  void print() {
    if (!this -> head) {
      cout << "[]" << endl;    
    } else {
      Node* current = this -> head;
      cout << "[ ";
      while (current) {
        cout << current -> value << " ";
        current = current -> next;
      }
      cout << "]" << endl;
    }
  }
};

  
int main() {
  SinglyLinkedList list;
  list.push(10);
  list.push(11);
  list.unshift(12);
  list.unshift(13);

  list.print();
  cout << list.shift() -> value << endl;
  list.print();
  return 0;
}