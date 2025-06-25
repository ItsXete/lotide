// eqArrays
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

   return true;
}

// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 

// middleArray
const middle = function(array) {
  const length = array.length;
  if (length < 3) return [];

  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  }
  else {
    return [array[mid]];
  }
}

// Test
