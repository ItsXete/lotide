// test/tailTest.js
const tail = require("../tail");
const assertEqual = require("../assertEqual");

// Test 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test 2: Check the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // not capturing return
assertEqual(words.length, 3); // should still be 3