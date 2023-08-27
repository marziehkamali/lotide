const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
}

assertEqual(head([1, 2, 3, 4]), 1);
assertEqual(head([1, 2]), 2);

module.exports = head;
