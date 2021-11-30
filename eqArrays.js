// assertEqual.js function
const assertEqual = require('./assertEqual');

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

module.exports = eqArrays; // No need for .js extension