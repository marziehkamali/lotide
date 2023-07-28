
function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}

function assertArraysEqual(arr1, arr2) {                 // can use arr1 or a
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


const without = function(source, itemsToRemove) {
let result = source.without(itemsToRemove);
console.log(result);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);