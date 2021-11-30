const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { // find index of all elements  
    let char = sentence[i]; // position of each element
    if (char !== " ") {

      if (!results[char]) { // if falsy/empty/not present
        results[char] = []; // create a "key" with an emtpty array
      }
      results[char].push(i); // push index into array

    }
  }
  return results;
};


console.log(letterPositions("lighthouse in the house"));
// {
//   l: [ 0 ],
//   i: [ 1, 11 ],
//   g: [ 2 ],
//   h: [ 3, 5, 15, 18 ],
//   t: [ 4, 14 ],
//   o: [ 6, 19 ],
//   u: [ 7, 20 ],
//   s: [ 8, 21 ],
//   e: [ 9, 16, 22 ],
//   ' ': [ 10, 13, 17 ],
//   n: [ 12 ]
// }

console.log(letterPositions("hydrajin"));
// {
//   h: [ 0 ],
//   y: [ 1 ],
//   d: [ 2 ],
//   r: [ 3 ],
//   a: [ 4 ],
//   j: [ 5 ],
//   i: [ 6 ],
//   n: [ 7 ]
// }

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

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;

