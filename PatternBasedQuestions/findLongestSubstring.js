// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

const findLongestSubstring = function (str) {
  let strArr = [];
  let end_ = 0;
  let maxLen = -Infinity;
  while (end_ < str.length) {
    if (!strArr.includes(str[end_])) {
      strArr.push(str[end_]);
      maxLen = maxLen < strArr.length ? strArr.length : maxLen;
      end_++;
    } else if (strArr.includes(str[end_])) {
      strArr = strArr.slice(1, strArr.length);
    } else {
      break;
    }
  }
  return maxLen === -Infinity ? 0 : maxLen;
};
