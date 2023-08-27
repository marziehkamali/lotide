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

function middle(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);
  if (length <= 2) {
    return [];
  }
  else if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
}

let result = middle([1, 2, 3, 4, 5]);
assertArraysEqual(result, [4]);

let result2 = middle([1, 2]);
assertArraysEqual(result2, []);

let result3 = middle([1, 2, 3, 4]);
assertArraysEqual(result3, [2, 3]);

module.exports = middle;

