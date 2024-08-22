const selectionSort = function (arr) {
  let minVal;
  for (let i = 0; i < arr.length; i++) {
    minVal = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minVal]) {
        minVal = j;
      }
    }
    if (i !== minVal) [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
  }
  return arr;
};

console.log(selectionSort([3, 4, 1, 2, 0, 1]));
