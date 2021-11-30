// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  let pass = true;
  if (arr1.length !== arr2.length) {
    pass = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      pass = false;
    }
  }
  return pass;
};

// ASSERT ARRAY EQUAL
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅🟢✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🔴🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
 };

const words = ["my", "name", "is", "Suliman", "Fayyaz"];


// DEFINE MAP IN MIN WAY
// Has to be before being called??
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1); // [ 'm', 'n', 'i', 'S', 'F' ]
// ONLY zero index of words array

console.log(assertArraysEqual(results1, [ 'm', 'n', 'i', 'S', 'F' ])); // [ 'm', 'n', 'i', 'S', 'F' ]

module.exports = map;