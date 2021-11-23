// assertEqual.js function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  let output = []; // we take a variable output (an empty array)x
  for (let i = 1; i < input.length; i++) { // for loop starts at index 1 (skips head)
    output.push(input[i]); // output.push(input[i]) pushes all elements after head array
  }
  return output;
};

//Others used this:
/*
const tail = function(array) {
  return array.slice(1) // You could also create a new variable to return array
};
*/

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const words0 = [];
tail(words0);
assertEqual(words0.length, 0);
const words1 = ["Yo"];
tail(words1);
assertEqual(words1.length, 1);