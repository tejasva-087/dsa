// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)

// const minSubArrayLen = function (arr, num) {
//   let ptr1 = 0;
//   let ptr2 = 0;
//   let sum = 0;
//   let len = 0;
//   let minLen = Infinity;

//   while (ptr1 < arr.length) {
//     sum += arr[ptr2];
//     len++;
//     ptr2++;

//     if (sum >= num) {
//       minLen = minLen > len ? len : minLen;
//     }

//     if (ptr2 > arr.length) {
//       ptr1++;
//       ptr2 = ptr1;
//       sum = 0;
//       len = 0;
//     }
//   }

//   console.log(minLen === Infinity ? 0 : minLen);
// };

const minSubArrayLen = function (arr, num) {
  let sum = 0;
  let ptr1 = 0;
  let ptr2 = 0;
  let minLen = Infinity;

  while (ptr1 < arr.length) {
    if (sum < num && ptr2 < arr.length) {
      sum += arr[ptr2];
      ptr2++;
    } else if (sum >= num) {
      minLen = minLen < ptr2 - ptr1 ? minLen : ptr2 - ptr1;
      sum -= arr[ptr1];
      ptr1++;
    } else {
      break;
    }
  }
};

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
