const binarySearchLoop = function (arr, val) {
  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  while (leftPtr <= rightPtr) {
    const midPtr = Math.trunc((leftPtr + rightPtr) / 2);
    const midVal = arr[midPtr];

    if (midVal === val) return midPtr;
    else if (val < midVal) rightPtr = midPtr - 1;
    else leftPtr = midPtr + 1;
  }

  return -1;
};

const binarySearchA = function (arr, val) {
  if (arr.length === 0) return false;

  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  let midPtr = Math.trunc((leftPtr + rightPtr) / 2);
  let midVal = arr[midPtr];

  if (midVal === val) return true;
  else if (val < midVal) return binarySearch(arr.slice(0, midPtr), val);
  else return binarySearch(arr.slice(midPtr + 1, rightPtr + 1), val);
};

const binarySearch = function (arr, val, leftPtr, rightPtr) {
  if (leftPtr > rightPtr) return -1;

  const midPtr = Math.trunc((leftPtr + rightPtr) / 2);
  const midVal = arr[midPtr];

  if (midVal === val) return midPtr;
  else if (val < midVal) return binarySearch(arr, val, leftPtr, midPtr - 1);
  else return binarySearch(arr, val, midPtr + 1, rightPtr);
};

const arr = [1, 3, 4, 5, 7, 19, 23];
console.log(binarySearch(arr, 4, 0, arr.length - 1));
