// ADD REQUIRE eqARRAYS
const eqArrays = require('./eqArrays');

// ASSERT ARRAY EQUAL
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅🟢✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🔴🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

// EXPORT
module.exports = assertArraysEqual; // No need for .js extension