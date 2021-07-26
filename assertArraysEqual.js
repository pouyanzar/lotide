const eqArrays = require("./eqArrays");

const assertArrayEqual = function(actual, expected) {
  eqArrays(actual,expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertation Failed: ${actual} !== ${expected}`);
};

module.exports = assertArrayEqual;