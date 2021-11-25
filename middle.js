// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅🟢✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🔴🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

// TEST CODE

// ARRAY WITH 1 or 2 ELEMENTS
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

// ARRAY WITH AN ODD NUMBER of ELEMENTS
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

//  ARRAY WITH AN EVEN NUMBER of ELEMENTS

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]