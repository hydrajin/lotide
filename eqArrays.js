const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  console.log(pass);
  return pass;
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS