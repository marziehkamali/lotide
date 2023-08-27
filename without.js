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

const without = function(source, itemsToRemove) {
  let result = [];
  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      result.push(source[i])
    }
  }
  
  return result;
}

let result = without(["hello", "world", "Lighthouse"], ["hello"]);
let expected = ["world", "Lighthouse"];
assertArraysEqual(result, expected);

let result2 = without([1, 2, 3], [2]);
let expected2 = [1, 3];
assertArraysEqual(result2, expected2);


module.exports = without;