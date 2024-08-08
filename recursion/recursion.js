// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = function (arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
};

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60
// console.log(productOfArray([0, 1, 2, 3])); // 0

// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = function (num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// const fib = function (num) {
//   const fibArr = [0, 1];
//   let sum = 0;
//   for (let i = 0; i < num - 2; i++) {
//     sum += fibArr[i] + fibArr[i + 1];
//     fibArr.push(sum);
//     sum = 0;
//   }

//   console.log(fibArr.pop());
// };

const fib = function (num) {
  if (num === 2) return 1;
  if (num <= 1) return 0;
  return fib(num - 1) + fib(num - 2);
};

// console.log(fib(5));

// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// console.log(fib(6));

const reverse = function (str) {
  if (str.length == 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
};

// console.log(reverse('a1b2c3'));

// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = function (str) {
  if (str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
};

// console.log(isPalindrome("abcba"));
// console.log(isPalindrome("abc12ba"));
// console.log(isPalindrome("abccccba"));

// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

const isOdd = (num) => (num % 2 !== 0 ? true : false);

const someRecursive = function (arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1, arr.length), callback);
};

// console.log(someRecursive([1,2,3,4], isOdd))
// console.log(someRecursive([4,6,8,9], isOdd))
// console.log(someRecursive([4, 6, 8], isOdd));
// console.log(someRecursive([4,6,8], val => val > 10))

// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = function (arr) {
  const newArr = [];

  const helper = function (arr) {
    for (const ele of arr) {
      if (Array.isArray(ele)) helper(ele);
      else newArr.push(ele);
    }
  };

  helper(arr);

  return newArr;
};

// flatten([1, 2, 3, [4, 5]]);
// flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].slice(0, 1).toUpperCase() + arr[0].substr(1)];
  }

  const res = capitalizeFirst(arr.slice(0, -1));
  res.push(
    arr[arr.length - 1][0][0].toUpperCase() + arr[arr.length - 1].substr(1)
  );
  return res;
}

// const arr = ['car','taco','banana'];
// console.log(capitalizeFirst(arr))

// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

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
