const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns 'true' for {key:value}", () => {
    const result = eqObjects({ a: 1, b: 2 }, { a: 1, b: 2 })
    assert.deepEqual(result, true);
  });

  it("returns 'false' if {key: value} is not equal", () => {
    const result = eqObjects({ a: 1, b: 2 }, { a: 1, b: 3 })
    assert.deepEqual(result, false);
  });
});