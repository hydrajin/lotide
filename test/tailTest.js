
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it(`returns 2 when words = ["Yo Yo", "Lighthouse", "Labs"]  ;`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.equal((tail(words).length), 2); // tails only accepts an array (put .length outside)
  }); // My original ((tail(words.length)) was wrong since tail only accepts an array NOT a METHOD
  it(`returns [] when words0 = [] is an empty array by checking array.length === 0 `, () => {
    const words0 = [];
    assert.equal((tail(words0).length), 0); // tails only accepts an array (put .length outside)
  });
  it(`returns [] when words1 = ["Yo"] or a single element by checking array.length === 0 `, () => {
    const words1 = ["Yo"];
    assert.equal((tail(words1).length), 0); // should yeild an empty array for its tail
  });
});
