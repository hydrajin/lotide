// ADD REQUIRE (ASSERTARRAYSEQUAL)
const assertArraysEqual = require('./assertArraysEqual.js');

// ACTUAL FUNCTION
const middle = function (array) {
  let midArr = [];
  let middleElementIndex = "";
  let middleElement = "";
  //console.log(array[i]);
  if (array.length < 3) {
    return midArr;
  }
  if (array.length % 2 === 0) { // if EVEN (we need 2 elements)
    // midArr.push(array[array.length / 2 - 1]); // Push first middle element
    middleElementIndex = (array.length / 2) - 1;
    middleElement = array[middleElementIndex];
    midArr.push(middleElement);
    // midArr.push(array[array.length / 2]); // Push second middle element
    middleElementIndex = array.length / 2;
    middleElement = array[middleElementIndex];
    midArr.push(middleElement);
  }
  if (array.length % 2 !== 0) { // if ODD
    //   midArr.push(array[array.length / 2 - 0.5]);
    middleElementIndex = (array.length / 2) - 0.5;
    middleElement = array[middleElementIndex];
    midArr.push(middleElement);
  }
  return midArr;
};

//EXPORT
module.exports = middle; // No need for .js extension
