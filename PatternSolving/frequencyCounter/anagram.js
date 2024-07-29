// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

const validAnagram = function (str1, str2) {
  if (str1.length !== str2.length) {
    console.log(false);
    return;
  }

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in charCount) {
      charCount[str1[i]]++;
    } else {
      charCount[str1[i]] = 1;
    }
  }

  for (const char of str2) {
    if (!(char in charCount) || charCount[char] <= 0) {
      console.log(false);
      return;
    }
    charCount[char]--;
  }

  console.log(true);
  return;
};

validAnagram("", ""); // true
validAnagram("texttwisttime", "timetwisttext"); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
