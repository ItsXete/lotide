// test/tailTest.js
const { assert } = require("chai");
const tail = require("../tail");

// Test 1
describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });

// Test 2: Check the original array is not modified
it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // call but ignore return value
    assert.strictEqual(words.length, 3);
  });
});