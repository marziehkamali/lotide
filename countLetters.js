function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

const countLetters = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (result[letter]) {
      result[letter] = result[letter] + 1;
    }
    else {
      result[letter] = 1;
    }
  }

  return result;
}

module.exports = countLetters;