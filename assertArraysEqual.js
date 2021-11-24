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

 assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
 assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
 assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
 assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
 assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // => false