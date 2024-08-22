// Using for loop
const linearSearchForLoop = function (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

// Using recursion
const linearSearch = function (arr, val) {
  if (arr.length === 0) return false;
  if (arr[0] === val) return true;
  return linearSearch(arr.slice(1, arr.length), val);
};

const arr = [1, 3, 1, 2, 0, 19, 23];
console.log(linearSearch(arr, 233));
