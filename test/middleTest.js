// test/middleTest.js
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test
assertArraysEqual(middle([1, 2, 3]), [2]); 
assertArraysEqual(middle([1, 2]), []); 