// Implement a function called countUniqueValues, which accepts a sorted
// array, and counts the unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// MY SOLUTION
// const countUniqueValues = function (arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   let pointer1 = 0,
//     pointer2 = 1,
//     uniqueCount = 1;
//   while (pointer2 < arr.length) {
//     let pointer1val = arr[pointer1];
//     let pointer2val = arr[pointer2];
//     if (pointer1val !== pointer2val) {
//       pointer1 = pointer2;
//       pointer2++;
//       uniqueCount++;
//     } else {
//       pointer2++;
//     }
//   }
//   return uniqueCount;
// };

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, -1, 0, 1, 1])); // 4

// Other approach on how the solution could be done without creating a uniquecounter variable
// function countUniqueValues(arr){
//   if (arr.length === 0) {
//       return 0;
//   }
//   let pointer1 = 0;
//   let pointer2 = 1;
//   while (pointer2 < arr.length) {
//       let pointer1val = arr[pointer1];
//       let pointer2val = arr[pointer2];
//       if (pointer1val !== pointer2val) {
//           pointer1++;
//           arr[pointer1] = arr[pointer2];
//           pointer2++;
//       } else {
//           pointer2++;
//       }
//   }
//   return pointer1 + 1;
// }

// Original solution
const countUniqueValues = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  let pointer1 = 0;
  for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
    if (arr[pointer2] !== arr[pointer1]) {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }
  return ++pointer1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, -1, 0, 1, 1])); // 4
