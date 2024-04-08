// Question
// Given two strings, write a function to determine if the second string
// is an anagram of the first. An anagram is a word, phrase, or name
// formed by rearranging the letters of another, such as cinema,
// formed from iceman.
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// MY solution

// const frequencyCOunter = function (str) {
//   const strObj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (strObj[str[i]] in strObj) {
//       strObj[str[i]]++;
//     } else {
//       strObj[str[i]] = 1;
//     }
//   }
//   return strObj;
// };

// const anagrams = function (str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const strObj1 = frequencyCOunter(str1);
//   const strObj2 = frequencyCOunter(str2);
//   for (const key in strObj1) {
//     if (strObj1[key] !== strObj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(anagrams("texttwisttime", "timetwisttext"));

// A better solution or maybe another way of solving the problem
// vetter way because it uses only two loops and the upper one uses three loops

const anagram = function (str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookUpObj = {};

  for (let i = 0; i < str1.length; i++) {
    lookUpObj[str1[i]] ? lookUpObj[str1[i]]++ : (lookUpObj[str1[i]] = 1);
  }

  for (let j = 0; j < str2.length; j++) {
    if (lookUpObj[str2[j]]) {
      lookUpObj[str2[j]]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(anagram("", ""));
