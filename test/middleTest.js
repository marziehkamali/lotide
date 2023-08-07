
/* const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1]))
console.log(middle([1, 7, 4]))
console.log(middle([1, 7, 4, 9]))
 */

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});