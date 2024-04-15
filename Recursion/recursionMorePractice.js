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
