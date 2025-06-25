// eqArrays
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

// assertArraysEqual 
function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
}

// flatten
function flatten(arr) {
  const flattened = [];
  
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flattened.push(item);
      }
    } else {
      flattened.push(element);
    }
  }
  
  return flattened;
}
