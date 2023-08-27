function assertArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== arr2`);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== arr2`);
    }
  }
  console.log(`✅✅✅Assertion Passed: ${arr1} === arr2`);
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}


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

module.exports = flatten;