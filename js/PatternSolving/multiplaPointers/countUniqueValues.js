// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

const countUniqueValues = function (arr) {
  let ptr = 0;
  // let ptr2 = 1;
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[ptr] !== arr[i]) {
      ptr = i;
      count++;
    }
  }

  // while (ptr2 < arr.length) {
  //   if (arr[ptr1] !== arr[ptr2]) {
  //     count++;
  //     ptr1 = ptr2;
  //     ptr2 = ptr1 + 1;
  //   } else {
  //     ptr2++;
  //   }
  // }

  return count ? ++count : 0;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
