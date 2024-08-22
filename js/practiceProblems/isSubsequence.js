// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

// const isSubsequence = function (str1, str2) {
//   let ptr1 = 0;
//   let ptr2 = 0;

//   while (ptr2 < str2.length) {
//     if (str1[ptr1] === str2[ptr2]) {
//       ptr1++;
//       ptr2++;
//     } else {
//       ptr2++
//     }

//     if (ptr1 === str1.length) {
//       return true;
//     }
//   }

//   return false;
// };

const isSubsequence = function(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1));
  }

  if (str1[0] !== str2[0]) {
    return isSubsequence(str1, str2.slice(1));
  }
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // false
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
