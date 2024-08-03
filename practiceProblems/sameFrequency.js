// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = function (num1, num2) {
  // getting the max unit of the number like hundrede, thousands etc
  let maxPlacenum1 = Math.trunc(Math.log10(num1)) + 1;
  let maxPlacenum2 = Math.trunc(Math.log10(num2)) + 1;

  if (maxPlacenum1 !== maxPlacenum2) return false;

  const frequencyObj = {};

  let num;
  for (let i = 0; i < maxPlacenum1; i++) {
    // 1) checking the last digit of num
    num = num1 % 10;

    if (num in frequencyObj) {
      frequencyObj[num]++;
    } else {
      frequencyObj[num] = 1;
    }
    // 2) now removing the last digit from number
    num1 = Math.trunc(num1 / 10);
  }

  for (let i = 0; i < maxPlacenum1; i++) {
    num = num2 % 10;

    if (!(num in frequencyObj) || frequencyObj[num] <= 0) return false;
    frequencyObj[num]--;
    num2 = Math.trunc(num2 / 10);
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
