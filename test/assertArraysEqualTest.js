// test/assertArraysEqualTest.js
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should fail
assertArraysEqual([], []);               // should pass
assertArraysEqual(['a', 'b'], ['a', 'b']); // should pass
assertArraysEqual(['a', 'b'], ['b', 'a']); // should fail