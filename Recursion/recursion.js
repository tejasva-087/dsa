// const func = function(num) {
//   if (num <= 0) {
//     console.log("All done")
//     return;
//   }
//   console.log(num);
//   func(num - 1);
// }

// func(10);

// const factorial = function(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// const factorial2 = function(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i
//   }
//   return fact;
// }

// console.log(factorial(4))
// console.log(factorial2(4))

// const prime = function(num, n = 2) {
//   if (num % n === 0) return false;
//   else if (num === n) return true;
//   return prime(num, n + 1)
// }

// console.log(prime(27))

// HELPER METHOD RECURSION
// const collectOdd = function (arr) {
//   const result = [];
//   const helper = function (helpArr) {
//     if (helpArr.length === 0) return;
//     else if (helpArr[0] % 2 !== 0) result.push(helpArr[0]);
//     helper(helpArr.slice(1, arr.length));
//   };
//   helper(arr);
//   return result;
// };

// console.log(collectOdd([1, 1, 2, 1, 4, 3, 4, 7]));

// PURE RECURSION

const oddCollector = function (arr) {
  let results = [];
  if (arr.length === 0) return results;
  else if (arr[0] % 2 !== 0) {
    results.push(arr[0]);
  }
  results = results.concat(oddCollector(arr.slice(1)));
  return results;
};

console.log(oddCollector([1, 2, 3, 4, 5, 1, 1]));
