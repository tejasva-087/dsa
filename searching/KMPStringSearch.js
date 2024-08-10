const patternTable = function (string) {
  let j = 0;
  let i = 1;
  let patternTable = [0];

  while (i < string.length) {
    if (string[i] === string[j]) {
      patternTable.push(++j);
      i++;
    } else {
      if (j === 0) {
        patternTable.push(0);
        i++;
      } else {
        j = patternTable[j - 1];
      }
    }
  }

  return patternTable;
};

const KMPSearch = function(string, subString) {
	let i = 0;
	let j = 0;
	let count = 0;
	const patternTableArr = patternTable(subString);

	while (i < string.length) {
		if (string[i] === subString[j]) {
			i++;
			j++;
		} else {
			if (j === 0) {
				i++;
			} else {
				j = patternTableArr[j - 1];
			}
		}

		if (j >= patternTableArr.length) {
			count++;
			j = patternTableArr.length - 1;
		}
	}

	return count;
}

console.log(KMPSearch("abcabyabcbabc", "abc"));
