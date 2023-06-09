// Import eqArrays module

const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true for same elements in the same order", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
  it("should return false for same elements in diferent order", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
  it("should return true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); 
  });
  it("should return false for ['1', '2', '3'] and ['1,'2', 3] ", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); 
  });
});


