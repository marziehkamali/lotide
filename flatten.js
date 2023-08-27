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

function flatten(ary) {
  let result = [];
  for (let i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      result = result.concat(flatten(ary[i]));
    } else {
      result.push(ary[i]);
    }
  }
  return result;
}

let result = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);


let result2 = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result2, [1, 2, 3, 4, 5, 6]);

module.exports = flatten;