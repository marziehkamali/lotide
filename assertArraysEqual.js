function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
      console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// test assertArraysEqual should print assertion passed 
assertArraysEqual(["a", 1, 2], ["a", 1, 2]);

// test assertArraysEqual should print assertion failed

assertArraysEqual(["a", 2, 4], ["a", 1, 2]);

module.exports = assertArraysEqual; 