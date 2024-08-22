// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

const sumZero = function (arr) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  while (ptr1 < ptr2) {
    let val1 = arr[ptr1];
    let val2 = arr[ptr2];
    let sum = val1 + val2;

    if (sum === 0) return [val1, val2];
    else if (sum < 0) ptr1++;
    else ptr2--;
  }

  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-3, -2, -1, 1, 2])); // [-2,2]
console.log(sumZero([-1, 1, 2, 3])); // [-1, 1]
console.log(sumZero([])); // undefined
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
