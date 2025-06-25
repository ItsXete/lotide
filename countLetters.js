// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters 
const countLetters = function(sentence) {
  const result = {};
  
  for (const char of sentence) {
  if (char !== '') {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
}
return result;
}