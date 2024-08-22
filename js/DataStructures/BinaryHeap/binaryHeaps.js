class BinaryHeapes {
  constructor() {
    this.value = [];
  }

  bullleUp() {
    let newNode = this.value.length - 1;
    let parentNode = Math.trunc((newNode - 1) / 2);

    while (this.value[newNode] > this.value[parentNode]) {
      let temp = this.value[parentNode];
      this.value[parentNode] = this.value[newNode];
      this.value[newNode] = temp;
      newNode = parentNode;

      parentNode = Math.trunc((newNode - 1) / 2);
    }
  }

  insert(value) {
    this.value.push(value);
    this.bullleUp();
  }

  sinkDown() {
    let index = 0;
    let length = this.value.length;
    let element = this.value[0];

    let leftIndex, rightIndex, leftChild, rightChild;

    let swap;

    while (true) {
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;
      swap = null;

      if (leftIndex < length) {
        leftChild = this.value[leftIndex];
        swap = leftChild > element ? leftIndex : null;
      }

      if (rightIndex < length) {
        rightChild = this.value[rightIndex];
        if (
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
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

  remove() {
    const length = this.value.length;

    if (!length) return 0;
    if (length === 0) return this.value.pop();

    const max = this.value[0];
    const end = this.value.pop();
    this.value[0] = end;
    this.sinkDown();

    return max;
  }
}

const heap = new BinaryHeapes();
heap.insert(100);
heap.insert(90);
heap.insert(80);
heap.insert(110);
heap.insert(60);
heap.insert(50);
heap.insert(140);
heap.insert(1);

console.log(heap);
console.log(heap.value);

console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());

console.log(heap.value);
