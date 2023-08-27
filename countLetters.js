const assertObjectsEqual = require("./assertObjectsEqual");

const countLetters = function (string) {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (result[letter]) {
      result[letter] += 1;
    }
    else {
      result[letter] = 1;
    }
  }

  return result;
}

assertObjectsEqual(countLetters("LHL"),{ L: 2, H: 1 });
assertObjectsEqual(countLetters("APPLE"), { A: 1, P: 2, L: 1, E: 1 });

module.exports = countLetters;