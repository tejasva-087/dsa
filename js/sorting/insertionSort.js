const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
  }
  return arr;
};

console.log(insertionSort([4, 3, 5, 2, 1]));
console.log(insertionSort([4, 13, 15, 21, 1, 0]));
