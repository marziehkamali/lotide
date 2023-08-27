function assertArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);;
    }
  }
  console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`)
};

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = map;