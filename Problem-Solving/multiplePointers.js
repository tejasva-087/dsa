"use strict";

// Write a function called sumZero which accepts a sorted array of
// integers. The function should find the first pair where the sum
// is 0. Return an array that includes both values that sum to zero
// or undefined if a pair does not exis.

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

// My solution

// const sumZero = function (arr) {
//   let main = 0;
//   let ref = arr.length - 1;
//   while (true) {
//     console.log(ref, main);
//     let mainPointer = arr[main];
//     let refPointer = arr[ref];
//     if (mainPointer + refPointer === 0 && refPointer !== mainPointer) {
//       return [mainPointer, refPointer];
//     }
//     if (ref < main) {
//       ref = arr.length - 1;
//       if (main !== arr.length - 1) {
//         main++;
//       } else {
//         return undefined;
//       }
//     } else {
//       ref--;
//     }
//   }
// };
// console.log(sumZero([-3, -2, -1, 0, 11, 12, 13]));

// Naive solution

// function sumZero(arr){
//   for(let i = 0; i < arr.length; i++){
//       for(let j = i+1; j < arr.length; j++){
//           if(arr[i] + arr[j] === 0){
//               return [arr[i], arr[j]];
//           }
//       }
//   }
// }

// Solution after understanding the concept

// const sumZero = function (arr) {
//   let leftPointer = 0;
//   let rightPointer = arr.length - 1;
//   while (true) {
//     let leftVal = arr[leftPointer];
//     let rightVal = arr[rightPointer];
//     if (leftVal + rightVal === 0) {
//       return [leftVal, rightVal];
//     } else if (leftVal - rightVal > 0) {
//       rightPointer--;
//     } else if (leftVal - rightVal < 0) {
//       leftPointer++;
//     }
//     if (leftPointer === rightPointer) {
//       return undefined;
//     }
//   }
// };

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));

// Actual solution
// function sumZero(arr){
//   let left = 0;
//   let right = arr.length - 1;
//   while(left < right){
//       let sum = arr[left] + arr[right];
//       if(sum === 0){
//           return [arr[left], arr[right]];
//       } else if(sum > 0){
//           right--;
//       } else {
//           left++;
//       }
//   }
// }

function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
