// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = function (str) {
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str[0];
};

// console.log(reverse("HelloWorld"));

// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = function (str) {
  if (str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
};

// console.log(isPalindrome("helleh"));
// console.log(isPalindrome("heleh"));
// console.log(isPalindrome("hello"));

// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
const isOdd = (val) => val % 2 !== 0;

const someRecursive = function (arr, callBack) {
  if (arr.length === 0) return false;
  if (callBack(arr[0])) return true;
  return someRecursive(arr.slice(1), callBack);
};

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
const flatten = function (arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      results = results.concat(flatten(arr[i]));
    } else {
      results.push(arr[i]);
    }
  }
  return results;
};

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(array) {
  let result = [];
  if (array.length === 0) return [];
  else result.push(array[0][0].toUpperCase() + array[0].slice(1));
  result = result.concat(capitalizeFirst(array.slice(1)));
  return result;
}

// console.log(capitalizeFirst(capitalizeFirst(["car", "taco", "banana"])));

// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = function (obj) {
  let sum = 0;
  for (const [_, value] of Object.entries(obj)) {
    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    } else if (typeof value === "object") {
      sum += nestedEvenSum(value);
    }
  }
  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

const capitalizeWords = function (arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let rest = capitalizeWords(arr.slice(0, -1));
  rest.push(arr[arr.length - 1].toUpperCase());
  return rest;
};

// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

const stringifyNumbers = function (obj) {
  let newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") newObj[key] = String(value);
    else if (value.constructor === Object) {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// console.log(stringifyNumbers(obj));

// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const collectStrings = function (obj) {
  let arr = [];
  for (const [_, value] of Object.entries(obj)) {
    if (value.constructor === Object) {
      arr = arr.concat(collectStrings(value));
    } else {
      arr.push(value);
    }
  }
  return arr;
};
