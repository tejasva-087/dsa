"use strict";
// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed
// to the function is located. If the value is not found, return -1

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

// My soultion (but this is naive ;)
// const search = function (arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return i;
//     }
//   }
//   return -1;
// };

// Trying refactored version on my own
// const search = function (arr, n) {
//   let min = 0;
//   let max = arr.length;
//   while (min !== max) {
//     const middle = Math.trunc((min + max) / 2);
//     const middleVal = arr[middle];
//     if (middleVal > n) {
//       max = middle;
//     } else if (middleVal < n) {
//       min = middle;
//     } else {
//       return middle;
//     }
//   }
//   return -1;
// };

// Naive approach :)
// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// refactored solution
// function search(array, val) {
//   let min = 0;
//   let max = array.length - 1;

//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2);
//     let currentElement = array[middle];

//     if (array[middle] < val) {
//       min = middle + 1;
//     } else if (array[middle] > val) {
//       max = middle - 1;
//     } else {
//       return middle;
//     }
//   }

//   return -1;
// }

// solving after understanding the solution
const search = function (arr, n) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.trunc((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement === n) {
      return middle;
    } else if (currentElement < n) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
