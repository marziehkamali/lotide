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

function middle(array){
  let middleIndex;
  middleIndex = array.length / 2;
  if(array.length <=2){
    return [];
  } else if(array.length % 2 !== 0){ // if its odd
    let roundedMiddleIndex =  Math.floor(middleIndex);
    return array[roundedMiddleIndex];
  }
  else if( array.length % 2  === 0){ // its even
    let secondMiddleIndex = array.length / 2;
    let firstMiddleInex = secondMiddleIndex - 1;

    let valueAtSecondIndex = array[secondMiddleIndex];
    let valueAtFirstIndex = array[firstMiddleInex];
    
    return [valueAtFirstIndex, valueAtSecondIndex]
  }
  return middleValue;
  } 

  module.exports = middle;


//Implement middle which will take in an array and return the middle-most element(s) of the given array.

