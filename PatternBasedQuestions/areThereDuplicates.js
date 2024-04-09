// My solution 1 (works best for sorted arrays)
// const areThereDuplicates = function (...arr) {
//   arr.sort(); // (But this works for sorted arrays better)
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

// using multiple pointers
const areThereDuplicates = function () {
  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer1 < arguments.length - 1) {
    if (arguments[pointer1] === arguments[pointer2]) {
      return true;
    } else {
      pointer2++;
    }
  }
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
