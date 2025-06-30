// test/middleTest.js
const { assert } = require("chai");
const middle = require("../middle");

// Test
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, [2]);
  });

  it("returns [] for [1, 2]", () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []);
  });
});