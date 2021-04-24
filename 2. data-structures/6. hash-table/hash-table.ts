/**
 * This is a custom very simple hash table using very naive hash function just of the learning the basics and is
 * not recommended to be used.
 */

class HashTable {
  public keyMap: Array<any>; // List to store all the keys-value pairs

  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key: string) {
    let total = 0;
    let WEIRE_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRE_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key: string, value: string) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]); // Separate Chaining
  }

  get(key: string) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach((item) => {
          keysArr.push(item[0]);
        });
      }
    }

    return keysArr;
  }

  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        this.keyMap[i].forEach((item) => {
          valuesArr.push(item[1]);
        });
      }
    }

    return valuesArr;
  }
}

let ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

console.log(ht.get("maroon"));
console.log(ht.get("plum"));

console.log("Values: ", ht.keys());
console.log("Values: ", ht.values());
