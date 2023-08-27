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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const addFive = function(num){
  return num + 5;
};

//test 1
const result = map([1, 2, 3], addFive);
assertArraysEqual(result, [6, 7, 8]);

//test 2
const result2 = map(["apple","ORANGE","lemon"], (word)=>{
  return word.toUpperCase();
})
assertArraysEqual(result2, ["APPLE","ORANGE","LEMON"])

//test 3
const square = function(num){
  return num*num;
}

const result3 = map([2,4,6],square);
assertArraysEqual(result3,[4,16,36]);

module.exports = map;