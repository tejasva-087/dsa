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
//   if (str1.length > str2.length) {
//     return false;
//   }
//   let pointer1 = 0;
//   let pointer2 = 0;
//   while (pointer2 < str2.length && pointer1 < str1.length) {
//     const ele1 = str1[pointer1];
//     const ele2 = str2[pointer2];
//     if (ele1 === ele2) {
//       pointer1++;
//       pointer2++;
//     } else {
//       pointer2++;
//     }
//   }
//   if (pointer1 === str1.length) {
//     return true;
//   }
//   return false;
// };

// better solution
const isSubsequence = function (str1, str2) {
  if (str1.length > str2.lrngth) {
    return false;
  }
  let i = 0;
  for (const ele of str2) {
    if (str1[i] === ele) {
      i++;
    }
  }
  if (i == str1.length) return true;
  else return false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
