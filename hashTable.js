// ✅ Usefull Article: https://dev.to/amrguaily/hash-tables-full-guide-h2f

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
    this.length = 0;
  }

  // hash function
  hash(key) {
    let hash = 0;
    for (let i in key) hash += key.charCodeAt(i);

    // This will ensure the index will be in range (0 - size)
    return hash % this.size;
  }

  // Set method
  set(key, value) {
    let idx = this.hash(key);

    this.table[idx] = [key, value];
    this.length++;
  }

  // Get method
  get(key) {
    let idx = this.hash(key);

    return this.table[idx] ? this.table[idx][1] : null;
  }

  // Delete method
  remove(key) {
    let idx = this.hash(key);
    // Check if the key is already exists before deleting
    if (this.table[idx]) {
      this.table[idx] = undefined;
      this.length--;
      return true;
    } else {
      return false;
    }
  }
}

const table = new HashTable(20);

table.set('key1', 'value1');
table.set('key2', 'value2');

table.get('key1'); // value1
table.length; // 2

// TODO: Improve our "HashTable" to handle collision.
class HashTable2 {
  constructor(size) {
    this.table = new Array(20);
    this.size = size;
    this.length = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i in key) hash += key.charCodeAt(i);

    return hash % this.size;
  }

  set(key, value) {
    let idx = this.hash(key);

    const bucket = this.table[idx];
    if (!bucket) {
      this.table[idx] = [[key, value]];
    } else {
      // Check if the key is already exist
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        // key is already exist
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
    this.length++;
  }

  get(key) {
    let idx = this.hash(key);

    const bucket = this.table[idx];
    if (!bucket) {
      return null;
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      return sameKeyItem[1];
    }
  }

  remove(key) {
    let idx = this.hash(key);

    const bucket = this.table[idx];
    if (!bucket) {
      return false;
    } else {
      const sameKeyIdx = bucket.findIndex((item) => item[0] === key);
      if (sameKeyIdx !== -1) {
        bucket.splice(sameKeyIdx, 1);
        this.length--;
        return true;
      }
    }
  }

  display() {
    return this.table
      .map((slot, idx) => {
        const chainedValues = slot.map(([key, value]) => `[${key}: ${value}]`);
        return `${idx}: ${chainedValues}`;
      })
      .filter((item) => item);
  }
}

const table2 = new HashTable2(20);

table2.set('name', 'amr');
table2.set('mane', 'jhon');
table2.set('key1', 'value1');
console.log(table2.length);
console.log(table2.get('name'));
console.log(table2.display());
console.log(table2.remove('key1'));
console.log(table2.length);
console.log(table2);
