// REQUIRED

const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual  = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const assertObjectsEqual = require('./assertObjectsEqual');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const without = require('./without');
const map = require('./map');

// EXPORT
module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  countLetters,
  countOnly,
  assertObjectsEqual,
  takeUntil,
  findKey,
  findKeyByValue,
  letterPositions,
  without,
  map, // ES6 Property value shorthand (If you want to define an object who's keys have the sam enam as the variables passed-in as properties)
  // You can use the shorthand and simpl pass the key name (map, instead of map: map)
};