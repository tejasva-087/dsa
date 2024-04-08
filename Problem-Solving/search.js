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
//   while (true) {
//     let middle = Math.trunc(arr.length / 2);
//     if (n === arr[middle]) {
//       return middle;
//     } else if (n > arr[middle]) {
//       middle = middle - Math.trunc(middle / 2);
//     } else {
//       middle = middle + Math.trunc(middle / 2);
//     }
//   }
// };

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
