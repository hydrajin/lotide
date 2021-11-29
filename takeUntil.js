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

// ASSERT ARRAY EQUAL
const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2) === true ? `✅🟢✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🔴🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

// TakeUntil will keep collecing items from a provided array
// until the callback provided retuns a truthy value
// then return slice of the array with elements taken from the beggining

const takeUntil = (array, callback) => {
  const results = [];
  for (let taken of array) { // checks array
    // console.log(callback(taken)); // All initial elements are logged as false
    if (callback(taken)) {  // if true
      break; // TIP: when true, break out of loop
    } else { // if false
      results.push(taken); // push all elements to results array
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); // [ 1, 2, 5, 7, 2 ]
// GETTING UNDEFINED AFTER TEST ASSERTION
// console.log(results1);

console.log('---'); // ---

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
// GETTING UNDEFINED AFTER TEST ASSERTION
// console.log(results2);
