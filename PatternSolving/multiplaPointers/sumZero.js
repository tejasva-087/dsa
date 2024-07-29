// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

const sumZero = function (arr) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  while (ptr1 < arr.length) {
    if (ptr2 <= ptr1) {
      ptr1++;
      ptr2 = arr.length - 1;
    }

    const val1 = arr[ptr1];
    const val2 = arr[ptr2];

    if (val1 + val2 === 0) {
      console.log([val1, val2]);
      return;
    }

    ptr2--;
  }

  console.log(undefined);
  return;
};

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-3, -2, -1, 1, 2]); // [-2,2]
sumZero([-1, 1, 2, 3]); // [-1, 1]
sumZero([]); // undefined
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
