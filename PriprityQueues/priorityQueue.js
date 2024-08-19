class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}
class PriorityQueues {
  value = [];

  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];
    let parentIndex, parentElement;

    while (true) {
      parentIndex = Math.trunc((index - 1) / 2);
      parentElement = this.value[parentIndex];

      if (element.priority >= parentElement.priority) return;

      this.value[index] = this.value[parentIndex];
      this.value[parentIndex] = element;

      index = parentIndex;
    }
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.value.push(newNode);
    if (this.value.length === 1) return this;
    else this.bubbleUp();
  }

  sinkDown() {
    let index = 0;
    let element = this.value[index];
    let len = this.value.length;

    let leftChild, leftIndex;
    let rightChid, rightIndex;
    let swap;

    while (true) {
      leftIndex = 2 * index + 1;
      rightIndex = 2 * index + 2;
      swap = null;

      if (leftIndex < len) {
        leftChild = this.value[leftIndex];
        swap = leftChild.priority < element.priority ? leftIndex : null;
      }

      if (rightIndex < len) {
        rightChid = this.value[rightIndex];
        if (
          (!swap && rightChid.priority < element.priority) ||
          (swap && leftChild.priority > rightChid.priority)
        ) {
          swap = rightIndex;
        }
      }

      if (!swap) return;

      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }

  dequeue() {
    const topPriority = this.value[0];
    const end = this.value.pop();

    if (!this.value.length) return topPriority;

    this.value[0] = end;
    this.sinkDown();

    return topPriority;
  }
}

const pqueues = new PriorityQueues();
pqueues.enqueue("LowFeaver", 2);
pqueues.enqueue("Normal checkup", 3);
pqueues.enqueue("Concussion", 1);
pqueues.enqueue("Bleeding", 1);
pqueues.enqueue("High feaver", 1);
pqueues.enqueue("Head injury", 0);
pqueues.enqueue("Doctor meetup", 4);
console.log(pqueues);

console.log(pqueues.dequeue());
console.log(pqueues.dequeue());
console.log(pqueues.dequeue());
console.log(pqueues.dequeue());
console.log(pqueues.dequeue());
console.log(pqueues.dequeue());
console.log(pqueues.dequeue());
console.log(pqueues.dequeue());
