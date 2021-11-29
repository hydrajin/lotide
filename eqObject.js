// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the definition for function eqObjects
// which will take in two objects and returns true or false, based on a perfect match.

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
  console.log(pass); // Need this to check true and false on console
  return pass;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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
    } else if (object1[key] !== object2[key]) { // Use bracket notation ONLY
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true); //true

// STEP 3:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//  eqObjects(cd, dc); // => true
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2);
(assertEqual((eqObjects(cd, cd2)), false)); // => false


