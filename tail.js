// assertEqual.js function
const assertEqual = require('./assertEqual');

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

module.exports = tail;