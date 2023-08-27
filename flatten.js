const assertArraysEqual = require("./assertArraysEqual");

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

let result = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);


let result2 = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(result2, [1, 2, 3, 4, 5, 6]);

module.exports = flatten;