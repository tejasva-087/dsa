const bubbleSort = function (arr) {
  let swapped = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    console.log(swapped);
    if (!swapped) break;
    swapped = false;
  }

  return arr;
};

console.log(bubbleSort([2, 3, 5, 1, 9, 8]));
console.log(bubbleSort([2, 3, 5, 4, 11, 19, 28]));
