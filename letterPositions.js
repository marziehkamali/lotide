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

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter] = results[letter].push(i);
    }
    else {
      results[letter] = [i];
    }
  }
  return results;
}
console.log(letterPositions ("Lighthouse"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("bye").e, [2]);

module.exports = letterPositions;






























/* function assertArraysEqual(arr1, arr2) {                 // can use arr1 or a
  if (arr1.length !== arr2.length) {            // start with testing length, if length is not equal, your array is false from the beginning
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== arr2`);
  }

  for (let i = 0; i < arr1.length; i++) {       // testing out each index to ensure its equal
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== arr2`);;
    }
  }
  console.log(`✅✅✅Assertion Passed: ${arr1} === arr2`)
}


function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
 */