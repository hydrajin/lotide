const countLetters = require("./countLetters");

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
// inside the loop, 
// increment the counter for each item:
//   set a property with that string key to:
//     the value that was already there (or zero if nothing there) with 1 added to it.
  for (const item of allItems) { // Check the contents of the loop
    //console.log(itemsToCount[item]);
    if (itemsToCount[item]) { // If true
      if (results[item]) { //  only increment our count in results if the item is found in the itemsToCount object
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const finalResult = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(finalResult["Jason"], 1);
assertEqual(finalResult["Karima"], undefined);
assertEqual(finalResult["Fang"], 2);
assertEqual(finalResult["Agouhanna"], undefined);

module.exports = countOnly;