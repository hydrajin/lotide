// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (objects, callback) => {
  let result = "";
  for (let key in objects) {
    //console.log(callback(objects[key]));
    // console.log(key)
    console.log(objects[key]);
    if (callback(objects[key])) {
      result = key;
      break;
    } else if (!callback(objects[key])) {
      result = undefined;
    }
  }
  return result;
};

let assCheck = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(assCheck, "noma"); // not sure?

let assCheck1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 5); // ??

assertEqual(assCheck1, undefined); // NOT WORKING!!!