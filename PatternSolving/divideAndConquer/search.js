// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

const search = function (arr, val) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (ptr1 <= ptr2) {
    let middle = Math.floor((ptr1 + ptr2) / 2);

    if (val === arr[middle]) return middle;
    else if (val < arr[middle]) ptr2 = middle - 1;
    else ptr1 = middle + 1;
  }

  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
