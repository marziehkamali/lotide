const assertEqual = require("./assertEqual");

function findKey(object, callback) {
  const keys = Object.keys(object)
  for (let i = 0; i < keys.length; i++) {
    let value = object[keys[i]]
    if (callback(value) === true) {
      return keys[i];
    }
  }
  return undefined;

}

let answer = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);
assertEqual(answer, "noma");

let answer2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 9);

assertEqual(answer2, undefined);

module.exports = findKey;