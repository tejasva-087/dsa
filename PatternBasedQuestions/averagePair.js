// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

// const averagePair = function (arr, target) {
//   let pointer1 = 0;
//   let pointer2 = 0;
//   while (pointer1 < arr.length - 1) {
//     if (arr[pointer1] + arr[pointer2] / 2 === target) {
//       return true;
//     } else if (pointer2 === arr.length) {
//       pointer1++;
//       pointer2 = pointer1 + 1;
//     } else {
//       pointer2++;
//     }
//   }
//   return false;
// };

// better solution
const averagePair = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;
    if (avg === target) {
      return true;
    } else if (avg > target) end--;
    else start++;
  }
  return false;
};
