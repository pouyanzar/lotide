const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} ==== ${expected}`)
    : console.log(`🔴🔴🔴 Assertation Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  if (arr.length === 1) {
    return [];
  }
  let newArray = arr.slice(1);
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const result1 = tail(["Hello"]);
assertEqual(result1.length, 0);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


