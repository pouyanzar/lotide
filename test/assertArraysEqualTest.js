const assertArrayEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);