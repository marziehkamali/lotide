
/* let result = eqArrays([1, 2, 3], [1, 2, 3]);  // giving eqArrays a variable inorder to receive the result
assertEqual(result, true); // => should PASS  // testing your result of true against expected of true.
/*/

const assertArraysEqual = (arr1, arr2) => {                 // can use arr1 or a
  if (arr1.length !== arr2.length) {            // start with testing length, if length is not equal, your array is false from the beginning
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }

  for (let i = 0; i < arr1.length; i++) {       // testing out each index to ensure its equal
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
    }
  }
  console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
}

module.exports = assertArraysEqual; 