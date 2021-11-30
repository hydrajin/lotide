const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle');

// TEST CODE

// ARRAY WITH 1 or 2 ELEMENTS
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

// ARRAY WITH AN ODD NUMBER of ELEMENTS
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

//  ARRAY WITH AN EVEN NUMBER of ELEMENTS

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]