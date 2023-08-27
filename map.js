
const assertArraysEqual = require("./assertArraysEqual");

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