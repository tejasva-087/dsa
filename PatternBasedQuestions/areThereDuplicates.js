// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// My solution 1 (works best for sorted arrays)
// const areThereDuplicates = function (...arr) {
//   // arr.sort(); // (But this works for sorted arrays better)
//   args.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
//   });
//   let pointer = 0;
//   while (pointer < arr.length - 1) {
//     if (arr[pointer] === arr[pointer + 1]) {
//       return true;
//     }
//     pointer++;
//   }
//   return false;
// };

// using frequency counters
// const areThereDuplicates = function () {
//   let objCount = {};
//   for (let i = 0; i < arguments.length; i++) {
//     let val = arguments[i];
//     objCount[val] = (objCount[val] || 0) + 1;
//   }
//   for (const ele in objCount) {
//     if (objCount[ele] > 1) {
//       return true;
//     }
//   }
//   return false;
// };

// [1, 2, 3, 4, 5, 6]

// using multiple pointers
const areThereDuplicates = function () {
  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer1 < arguments.length - 1) {
    const pointer1val = arguments[pointer1];
    const pointer2val = arguments[pointer2];
    if (pointer1val === pointer2val) return true;
    else if (pointer2 === arguments.length) {
      pointer1++;
      pointer2 = pointer1 + 1;
    } else {
      pointer2++;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
