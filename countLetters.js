const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} ==== ${expected}`)
    : console.log(`🔴🔴🔴 Assertation Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let letterCounter = {};
  for (let letter of sentence) {
    if (letter === ' ') {
      continue;
    } else if (letterCounter[letter]) {
      letterCounter[letter]++;
    } else {
      letterCounter[letter] = 1;
    }
  }
  return letterCounter;
};

console.log(countLetters("lighthouse in the house"));