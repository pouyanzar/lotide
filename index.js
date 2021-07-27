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
const takeUtil = require('./takeUtil');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,
  assertObjectEqual: assertObjectEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  map: map,
  takeUtil: takeUtil,
  without, without
};