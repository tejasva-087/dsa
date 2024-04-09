const sameFrequency = function (n1, n2) {
  n1 = String(n1);
  n2 = String(n2);
  if (n1.length !== n2.length) {
    return false;
  }
  let countObj1 = {};
  let countObj2 = {};
  for (let i = 0; i < n1.length; i++) {
    let val = n1[i];
    countObj1[val] = countObj1[val] ? ++countObj1[val] : 1;
  }
  for (let i = 0; i < n2.length; i++) {
    let val = n2[i];
    countObj2[val] = countObj2[val] ? ++countObj2[val] : 1;
  }
  for (let ele in countObj1) {
    if (countObj1[ele] !== countObj2[ele]) {
      return false;
    }
  }
  console.log(countObj1, countObj2);
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
