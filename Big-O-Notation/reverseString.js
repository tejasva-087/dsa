const reverseString1 = function (str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};

const reverseString2 = function (str) {
  return [...str].reverse().join("");
};

const reverseString3 = function (str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};

console.log(reverseString3("abc"));
// Well there are 10 different ways to do it on :)
// so how do we know which is the best one?
