class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (val === currentNode.value) {
        return false;
      }

      if (val > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return true;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return true;
        }
        currentNode = currentNode.left;
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (true) {
      if (currentNode.value === value) return currentNode;

      if (value > currentNode.value) {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      }
    }
  }

  breadthFirstSearch() {
    if (!this.root) return [];

    const queue = [];
    const visited = [];

    const currentNode = this.root;
    queue.push(currentNode);

    while (queue.length) {
      const element = queue.shift();
      visited.push(element.value);
      if (element.left) queue.push(element.left);
      if (element.right) queue.push(element.right);
    }

    return visited;
  }

  depthFirstPreOrder() {
    const visited = [];

    const treverse = function (node) {
      visited.push(node.value);
      if (node.left) treverse(node.left);
      if (node.right) treverse(node.right);
    };
    treverse(this.root);

    return visited;
  }

  depthFirstPostOrder() {
    const visited = [];

    const treverse = function (node) {
      if (node.left) treverse(node.left);
      if (node.right) treverse(node.right);
      visited.push(node.value);
    };
    treverse(this.root);

    return visited;
  }

  depthFirstInOrder() {
    const visited = [];

    const treverse = function (node) {
      if (node.left) treverse(node.left);
      visited.push(node.value);
      if (node.right) treverse(node.right);
    };
    treverse(this.root);

    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(18);
tree.insert(12);
tree.insert(15);
tree.insert(20);
tree.insert(10);

console.log(tree.depthFirstPreOrder());
console.log(tree.depthFirstPostOrder());
console.log(tree.depthFirstInOrder());
console.log(tree);
