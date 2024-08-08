// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

const findLongestSubstring = function(str) {
	let ptr = 0;
	let arr = [];
	let maxLen = 0;

	while (ptr < str.length) {
		if (!arr.includes(str[ptr])) {
			arr.push(str[ptr]);
			maxLen = maxLen < arr.length ? arr.length : maxLen;
			ptr++;
		}

		if (arr.includes(str[ptr])) {
			arr = arr.splice(1, arr.length);
		}
	}

	console.log(maxLen);
}

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
