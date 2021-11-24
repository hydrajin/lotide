// assertArraysEqual 
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅🟢✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// eqArrays
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
  //console.log(pass); // Need this to check true and false on console
  return pass;
};

const without = (sourceArr, removeArr) => {
  let newArr = []; // Declare a new empty array!
  for (let i = 0; i < sourceArr.length; i++) { // iterate over sourceArr
    // .include() determines wheter an array includes certain values (returns true or false)
    if (!sourceArr.includes(removeArr[i])) { // (if sourceArr dosnt include second array items (removeArr))
      newArr.push(sourceArr[i]); // push
    }
  }
  return newArr;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
