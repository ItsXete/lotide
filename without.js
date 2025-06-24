// eqArrays
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

   return true;
}

// assertArraysEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// Without start here
function without(arr, itemsToRemove) {
  const result = [];

  for (let item of arr) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }

  return result;
}