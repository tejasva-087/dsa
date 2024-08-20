class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  #hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let hashKey = this.#hash(key);
    const pair = [key, value];

    if (!this.keyMap[hashKey]) {
      this.keyMap[hashKey] = [];
    }

    for (let i = 0; i < this.keyMap[hashKey].length; i++) {
      if (this.keyMap[hashKey][i][0] === key) {
        return false;
      }
    }
    this.keyMap[hashKey].push(pair);
  }

  get(key) {
    const hashKey = this.#hash(key);
    const keyMapVal = this.keyMap[hashKey];
    if (!keyMapVal) return undefined;

    for (let i = 0; i < keyMapVal.length; i++) {
      if (keyMapVal[i][0] === key) {
        return keyMapVal[i];
      }
    }
    return undefined;
  }

  keys() {
    const keysArr = [];
    for (const ele of this.keyMap) {
      if (ele) {
        for (let i = 0; i < ele.length; i++) {
          keysArr.push(ele[0][0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    const valuesSet = new Set();
    for (const ele of this.keyMap) {
      if (ele) {
        for (let i = 0; i < ele.length; i++) {
          valuesSet.add(ele[0][1]);
        }
      }
    }
    return [...valuesSet];
  }
}

const hashTable = new HashTable();
hashTable.set("maroon", "#800000");
hashTable.set("yellow", "#FFFF00");
hashTable.set("olive", "#808000");
hashTable.set("salmon", "#FA8072");
hashTable.set("lightcoral", "#F08080");
hashTable.set("mediumvioletred", "#C71585");
hashTable.set("plum", "#DDA0DD");
hashTable.set("vergo", "#DDA0DD");
hashTable.set("red", "#DDA0DD");
hashTable.set("vigo", "#DDA0DD");

console.log(hashTable);
console.log(hashTable.get("maroon"));
console.log(hashTable.get("yellow"));
console.log(hashTable.get("olive"));
console.log(hashTable.get("salmon"));
console.log(hashTable.get("lightcoral"));
console.log(hashTable.get("mediumvioletred"));
console.log(hashTable.get("plum"));

console.log(hashTable.keys());
console.log(hashTable.values());
