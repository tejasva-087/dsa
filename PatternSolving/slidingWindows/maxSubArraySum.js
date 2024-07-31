// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

const maxSubarraySum = function (arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  let maxSum = sum;
  // let ptr1 = 0;
  // let ptr2 = n;

  // while (ptr2 < arr.length) {
  //   sum += arr[ptr2] - arr[ptr1];

  //   if (maxSum < sum) maxSum = sum;

  //   ptr1++;
  //   ptr2++;
  // }

  let ptr1 = 0;
  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[ptr1];

    if (maxSum < sum) maxSum = sum;

    ptr1++;
  }

  console.log(maxSum);
};

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
