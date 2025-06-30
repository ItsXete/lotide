// middle.js

const middle = function(array) {
  const length = array.length;
  if (length < 3) return [];

  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]];
  }
};

module.exports = middle;