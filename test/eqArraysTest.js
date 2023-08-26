const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns 'true' if two arrays are equal", () => {
    const result = eqArrays([1, 2], [1, 2])
    assert.deepEqual(result, true);
  });

  it("returns 'false' if two arrays are not equal", () => {
    const result = eqArrays([1, 2], [1, 5])
    assert.deepEqual(result, false);
  });
});