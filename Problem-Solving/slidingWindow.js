"use strict";
// Write a function called maxSubarraySum which accepts an array of
// integers and a number called n. The function should calculate the
// maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null
// maxSubarraySum([1, 2, 3, 4],0) // null
// maxSubarraySum([],0) // null

// My solution ()doesnot work)

// const maxSubarraySum = function (arr, n) {
//   if (arr.length === 0 || n === 0) {
//     return null;
//   }
//   let currSum = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length - n; i++) {
//     sum += arr[i];
//     console.log(i, sum);
//     for (let j = i + 1; j < i + n; j++) {
//       sum += arr[j];
//     }
//     if (currSum <= sum) {
//       currSum = sum;
//       sum = 0;
//     }
//   }
//   return currSum;
// };

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySum([4, 2, 1, 6], 1));
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
// console.log(maxSubarraySum([], 4));
// console.log(maxSubarraySum([1, 2, 3, 4], 0));
// console.log(maxSubarraySum([], 0));

// Naive solution

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// coding the naive solution by my own

// const maxSubarraySum = function (arr, n) {
//   if (arr.length < n) {
//     return null;
//   }
//   let tempSum = 0;
//   let maxSum = -Infinity;
//   for (let i = 0; i <= arr.length - n; i++) {
//     tempSum = 0;
//     for (let j = 0; j < n; j++) {
//       tempSum += arr[i + j];
//     }
//     if (tempSum > maxSum) {
//       maxSum = tempSum;
//     }
//   }
//   return maxSum;
// };

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySum([4, 2, 1, 6], 1));
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
// console.log(maxSubarraySum([], 4));
// console.log(maxSubarraySum([1, 2, 3, 4], 0));
// console.log(maxSubarraySum([], 0));

// Solution after understanding the refectored method

// const maxSubarraySum = function (arr, n) {
//   if (arr.length < n) {
//     return null;
//   }
//   let maxSum = 0;
//   for (let i = 0; i < n; i++) {
//     maxSum += arr[i];
//   }
//   let tempSum = maxSum;
//   for (let i = 1; i <= arr.length - n; i++) {
//     tempSum = tempSum + arr[i + 1] - arr[i - 1];
//     if (maxSum < tempSum) {
//       maxSum = tempSum;
//     }
//   }
//   return maxSum;
// };

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log(maxSubarraySum([4, 2, 1, 6], 1));
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
// console.log(maxSubarraySum([], 4));
// console.log(maxSubarraySum([1, 2, 3, 4], 0));
// console.log(maxSubarraySum([], 0));
// console.log(maxSubarraySum([1, 2, 2, 2, 2], 5));

// refactored soltion
// function maxSubarraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));

// CODING THE REFACTORED SOLUTION
const maxSubarraySum = function (arr, n) {
  if (arr.length === 0) return null;
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
  }
  return maxSum;
};
