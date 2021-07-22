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

const assertArrayEqual = function(actual, expected) {
  eqArrays(actual,expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertation Failed: ${actual} !== ${expected}`);
};

//Function takes an array and return its middle elemet(s).
const middle = function(arr) {
  const middleArray =[];
  const arrLength = arr.length;
  if (arrLength < 3) {
    return [];
  } else if (arrLength % 2 === 0) {
    middleArray.push(arr[(arrLength / 2) - 1], arr[arrLength / 2]);
  } else {
    middleArray.push(arr[Math.floor(arrLength / 2)])
  }
  return middleArray;
};

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