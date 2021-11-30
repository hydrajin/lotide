const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] or emptry array for [1] or an array with 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] or emptry array for [1,2] or an array with 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1,2,3] or an array with an ODD number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2] for [1,2,3,4,5] or array with an ODD number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2,3] for [1,2,3,4] or array with an EVEN number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3,4] for [1,2,3,4,5,6] or array with an EVEN number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
