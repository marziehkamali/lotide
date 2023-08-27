function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

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

console.log(countLetters("LHL"));
console.log(countLetters("APPLE"));

module.exports = countLetters;