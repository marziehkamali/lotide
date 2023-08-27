const assertArraysEqual = require("./assertArraysEqual");

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