const findKey = require("./findKey");

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = (object, value) => {
  let keys = (Object.keys(object));
  // console.log(keys); //returns array of keys
  for (let key of keys) { // need to iterate to get string of array
    //console.log(key); // keys returned as string
    // console.log(value) // returns value of to compare
    if (object[key] === value) { // check if object value is equal to callback value
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

module.exports = findKeyByValue;