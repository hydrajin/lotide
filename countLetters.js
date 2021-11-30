// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅🟢✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🔴🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// The function should take in a sentence (as a string) and then return a count
// of each of the letters in that sentence.


const countLetters = function(text) {
  const result = {}; // final result will be an object
  for (let char of text) { // Use instead of c style array (char is each element in the array)
    if (char !== " ") { // if there is no spcace (continue)
      if (result[char]) {  // if current letter exists (continue)
        result[char] += 1; // if it already exists add 1
      } else { 
        result[char] = 1; // if found set equal to 1
      }
    }
  }
  return result;
};

console.log(countLetters("LHL")); // {L: 2, H: 1}
let finalResult = countLetters("LHL");
assertEqual(finalResult["L"], 2);
assertEqual(finalResult["H"], 1);

console.log(countLetters("L H L")); // {L: 2, H: 1}
finalResult = countLetters("L H L");
assertEqual(finalResult["L"], 2);
assertEqual(finalResult["H"], 1);

console.log(countLetters("lighthouse in the house")); // { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
finalResult = countLetters("lighthouse in the house");
assertEqual(finalResult["l"], 1);
assertEqual(finalResult["i"], 2);
assertEqual(finalResult["g"], 1);
assertEqual(finalResult["h"], 4);
assertEqual(finalResult["t"], 2);
assertEqual(finalResult["o"], 2);
assertEqual(finalResult["u"], 2);
assertEqual(finalResult["s"], 2);
assertEqual(finalResult["e"], 3);
assertEqual(finalResult["n"], 1);
assertEqual(finalResult["z"], undefined);

module.exports = countLetters;