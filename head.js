// assertEqual.js function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function head which returns the first item in the array.
// The head function should not return the first element as an array. It should simply return the element itself

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head(["one"]), "one"); // pass
assertEqual(head([]),); // undefined
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); // fail
