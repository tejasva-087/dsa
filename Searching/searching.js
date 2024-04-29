// Linear search

const linearSearch = function (collection, value) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === value) {
      return i;
    }
  }
  return -1;
};

// console.log(linearSearch('helloworld', 'r'))

// Binary search
const binarySearch = function (arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) start = middle + 1;
    else end = middle - 1;
  }
  return -1;
};

// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 95, 100, 1005], 1))

// Naive string search

const stringCounter = function (str, val) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < val.length; j++) {
      if (str[i + j] === val[j]) {
        if (j === val.length - 1) count++;
      } else break;
    }
  }
  return count === 0 ? -1 : count;
};

// console.log(stringCounter("", "hhd"));

const prefixSuffixSorter = function (pattern) {
  const appearenceValue = [0];
  let j = 0;
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      appearenceValue.push(++j);
      i++;
    } else {
      if (j === 0) {
        appearenceValue.push(0);
        i++;
      } else if (j !== 0) {
        j = appearenceValue[j - 1];
      }
    }
  }
  return appearenceValue;
};

const KMPSearch = function (text, pattern) {
  const appearenceVal = prefixSuffixSorter(pattern);
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = appearenceVal[j - 1];
      }
    }
    if (j >= appearenceVal.length) {
      j = appearenceVal[j - 1];
      count++;
    }
  }
  return count;
};

// console.log(KMPSearch("abcdabcgabcdabcgabcef", "abcdabcgabc"));
// console.log(KMPSearch("abcabc", "abc"));
// console.log(KMPSearch("aaaabaaa", "aaa"));
// console.log(KMPSearch("abcdefghij", "abcj"));
// console.log(KMPSearch("abababab", "aba"));
// console.log(KMPSearch("abcabcdef", "abcdabcgabc"));
