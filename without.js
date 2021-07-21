const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays ? console.log(`✅✅✅ Assertion Passed: ${actual} ==== ${expected}`)
    : console.log(`🔴🔴🔴 Assertation Failed: ${actual} !== ${expected}`);
};

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  let finder = false;
  for (let src of source) {
    finder = false;
    for (let item of itemsToRemove) {
      finder = src === item ? true : false;
    }
    if (!finder) {
      filteredArray.push(src);
    }
  }
  return filteredArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));