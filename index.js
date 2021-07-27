const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  eqObjects,
  assertObjectEqual,
  countLetters,
  countOnly,
  findKey,
  map,
  takeUntil,
  without
};