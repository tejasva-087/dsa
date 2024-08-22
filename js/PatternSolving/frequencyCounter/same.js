// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
    return;
  }

  const elementCount = {};

  for (let i = 0; i < arr1.length; i++) {
    if (![arr1[i]] in elementCount) {
      elementCount[arr1[i]] = 1;
    } else {
      elementCount[arr1[i]]++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const key = arr2[i] ** 0.5;

    if (!key in elementCount || elementCount[key] <= 0) {
      console.log(false);
      return;
    }
    elementCount[key]--;
  }

  console.log(true);
  return;
};

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3, 3, 3, 1], [1, 9, 9, 4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
