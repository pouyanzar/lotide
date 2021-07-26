const assertArrayEqual = require("../assertArraysEqual");
const middle = require("../middle");

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1, 2]),[]);
assertArrayEqual(middle([1, 2, 3]),[2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArrayEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);