const merge = function (leftArr, rightArr, arr) {
  let leftPtr = 0;
  let rightPtr = 0;
  let mergePtr = 0;

  while ((leftPtr < leftArr.length) & (rightPtr < rightArr.length)) {
    if (leftArr[leftPtr] < rightArr[rightPtr]) {
      arr[mergePtr] = leftArr[leftPtr];
      leftPtr++;
    } else {
      arr[mergePtr] = rightArr[rightPtr];
      rightPtr++;
    }
    mergePtr++;
  }

  while (leftPtr < leftArr.length) {
    arr[mergePtr] = leftArr[leftPtr];
    leftPtr++;
    mergePtr++;
  }

  while (rightPtr < rightArr.length) {
    arr[mergePtr] = rightArr[rightPtr];
    rightPtr++;
    mergePtr++;
  }

  return arr;
};

const mergeSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.trunc((start + end) / 2);

  const leftArr = mergeSort(arr.slice(start, mid + 1));
  const rightArr = mergeSort(arr.slice(mid + 1, end + 1));

  return merge(leftArr, rightArr, arr);
};

console.log(mergeSort([0, 9, 8, 2, 6, 5, 1]));
