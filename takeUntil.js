const assertArraysEqual = require("./assertArraysEqual").default;

const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i])
    if (result === true) {
      return array.slice(0, i);
    }

  }
  return array;

}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const actual = results1
const expected = [1, 2, 5, 7, 2]

assertArraysEqual(actual, expected);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const actual2 = results2;
const expected2 = ["I've", "been", "to", "Hollywood"];

assertArraysEqual(actual2, expected2);

module.exports = takeUntil;