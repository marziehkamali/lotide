const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

function tail(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
}

const answer = tail([1, 2, 3, 4]);
assertEqual(answer.length, 3);

module.exports = tail;
