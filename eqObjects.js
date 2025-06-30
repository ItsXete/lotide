// eqArrays
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) return false;
    } else if (
      typeof val1 === 'object' && val1 !== null &&
      typeof val2 === 'object' && val2 !== null
    ) {
      if (!eqObjects(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
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

// eqObjects
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) return false;
    } else if (
      typeof val1 === 'object' && val1 !== null &&
      typeof val2 === 'object' && val2 !== null
    ) {
      if (!eqObjects(val1, val2)) return false;
    } else {
      if (val1 !== val2) return false;
    }
  }

  return true;
};

// TEST CASES
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // ✅
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // ✅
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // ✅
assertEqual(eqObjects({ a: { b: { c: 3 } } }, { a: { b: { c: 3 } } }), true); // ✅
assertEqual(eqObjects({ a: { b: { c: 3 } } }, { a: { b: { c: 4 } } }), false); // ✅
