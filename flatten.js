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

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== expected`);
  }
}


function flatten(ary) {
  var result = [];
  for(var i = 0; i < ary.length; i++) {
      if(Array.isArray(ary[i])) {
          result = result.concat(flatten(ary[i]));
      } else {
          result.push(ary[i]);
      }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))

// => [1, 2, 3, 4, 5, 6]

// Create empty array called result
// Go through each element in the array
// Is it an array? 
// - No?  Add it to result
// - Yes? Take each value from the inside array and add to result
// No more elements?
// Yes - return result
// No - continue
