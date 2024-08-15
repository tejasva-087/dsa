// const pivotHelper = function (arr, start, end) {
//   let pivot = start;
//   let index = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (arr[i] <= arr[pivot]) {
//       index++;
//       [arr[index], arr[i]] = [arr[i], arr[index]];
//     }
//   }
//   [arr[index], arr[pivot]] = [arr[pivot], arr[index]];

//   return index;
// };

// const quickSort = function (arr, start, end) {
//   if (start < end) {
//     let index = pivotHelper(arr, start, end);
//     quickSort(arr, start, index - 1);
//     quickSort(arr, index + 1, end);
//   }
//   return arr;
// };

// console.log(quickSort([10, 4, 2, 16, 0, 12, 1, 24], 0, 7));

const quickSort = function (arr, start, end) {
  if (start >= end) return;

  let pivot = end;
  let index = start - 1;

  for (let i = start; i <= end; i++) {
    if (arr[i] <= arr[pivot]) {
      index++;
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
};

const arr = [1, 6, 2, 3, 15, 2, 3, 23, 43, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
