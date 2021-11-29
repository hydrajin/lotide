// eqObjects
const eqObjects = (object1, object2) => {
  let key1 = Object.keys(object1); // keys of object 1 returned as an array
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) { // if eqArrays is false
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) === true ?
    `✅🟢✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    : `🛑🔴🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const def = { d: "3", e: "4", f: "5"};

assertObjectsEqual(ab, ba); // PASS
assertObjectsEqual(abc, def); // FAIL

