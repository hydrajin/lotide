
const assertEqual = require('../assertEqual');
const assert = require('chai').assert; // Added this for Mocha/Chai based tests!?
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); // actual: ['5] / expected '3'
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it(`returns "Hello" for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(['Hello']), 'Hello');
  });
  it(`returns "one" for ["one"]`, () => {
    assert.strictEqual(head(["one"]), "one");
  });
  it(`Returns undefined for [] or empty array`, () => {
    assert.strictEqual(head([]), undefined);
  });
  it(`Returns "Labs" for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello"]), "Labs"); // Actual/Expected
  });
});
