#include <iostream>
using namespace std;

struct Node {
  int data;
  Node* left;
  Node* right;
};

Node* createNode(int data) {
  Node* newNode = new Node();
  if (!newNode) {
    cout << "Memory error\n";
    return nullptr;
  }
  newNode->data = data;
  newNode->left = newNode->right = nullptr;
  return newNode;
}

Node* insertNode(Node* root, int data) {
  if (root == nullptr) {
    root = createNode(data);
    return root;
  }
  if (data < root->data) {
    root->left = insertNode(root->left, data);
  } else if (data > root->data) {
    root->right = insertNode(root->right, data);
  }
  return root;
}

void inorderTraversal(Node* root) {
  if (root == nullptr) {
    return;
  }
  inorderTraversal(root->left);
  cout << root->data << " ";
  inorderTraversal(root->right);
}

int main() {
  Node* root = nullptr;
  root = insertNode(root, 50);
  insertNode(root, 30);
  insertNode(root, 20);
  insertNode(root, 40);
  insertNode(root, 70);
  insertNode(root, 60);
  insertNode(root, 80);

  cout << "Inorder traversal: ";
  inorderTraversal(root);
  cout << endl;

  return 0;
}