"use strict";
// Question
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]); // true
// same([1, 2, 3], [1, 9]); // false
// same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
const same = function (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyObj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (frequencyObj?.[arr1[i]]) {
      frequencyObj[arr1[i]] += 1;
      continue;
    }

    frequencyObj[arr1[i]] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!frequencyObj?.[arr2[i] ** 0.5] || frequencyObj?.[arr2[i]] < 0)
      return false;

    frequencyObj[arr2[i] ** 0.5] -= 1;
  }

  return true;
};

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [1, 4, 1]));

// Question
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

const validAnagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCounter = {};
  for (let i = 0; i < str1.length; i++) {
    if (charCounter?.[str1[i]]) {
      charCounter[str1[i]] += 1;
      continue;
    }

    charCounter[str1[i]] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!charCounter?.[str2[i]] || charCounter[str2[i]] < 0) return false;

    charCounter[str2[i]] -= 1;
  }

  return true;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
