"use strict";

// question
// Write a function called same, which accepts two arrays. The function should
// return true if every value in the array has it's corresponding value squared
// in the second array. The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// My solution
// const frequencyCOunter = function (arr) {
//   const refArr = [];
//   const countObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (refArr.includes(arr[i])) {
//       countObj[arr[i]]++;
//     } else {
//       refArr.push(arr[i]);
//       countObj[arr[i]] = 1;
//     }
//   }
//   return countObj;
// };

// const same = function (arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     const countObj1 = frequencyCOunter(arr1);
//     const countObj2 = frequencyCOunter(arr2);
//     for (const ele of Object.keys(countObj1)) {
//       if (!(countObj1[ele] === countObj2[ele ** 2])) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// const arr1 = [1, 2, 1, 5, 2];
// const arr2 = [4, 1, 1, 25, 4];
// console.log(same(arr1, arr2));

// Naive solution
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// Refactored
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Refectoring my solution
const frequencyCOunter = function (arr) {
  const countObj = {};
  for (let i = 0; i < arr.length; i++) {
    countObj[arr[i]] = ++countObj[arr[i]] || 1;
  }
  return countObj;
};

const same = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    const countObj1 = frequencyCOunter(arr1);
    const countObj2 = frequencyCOunter(arr2);
    for (const ele of Object.keys(countObj1)) {
      if (!(countObj1[ele] === countObj2[ele ** 2])) {
        return false;
      }
    }
    return true;
  }
};

const arr1 = [1, 2, 1, 5, 2];
const arr2 = [4, 1, 1, 25, 4];
console.log(same(arr1, arr2));
