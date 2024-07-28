const addUpTo = function (n) {
  return (n * (n + 1)) / 2;
};

const addUpToN = function (n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
};

let t1 = performance.now();
console.log(addUpTo(100000000));
let t2 = performance.now();
console.log((t2 - t1) / 1000);

let t3 = performance.now();
console.log(addUpToN(100000000));
let t4 = performance.now();
console.log((t4 - t3) / 1000);
