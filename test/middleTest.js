const assert = require('chai').assert;
const middle = require('../middle');
describe("#middle", () => {
  //use assert.deepEqual from chai for comparing arrays
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), [] );  
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); 
  });
  it("returns ['banana', 'cherry'] for ['apple', 'banana', 'cherry', 'date'] array ", () => {
    assert.deepEqual(middle(["apple", "banana", "cherry", "date"]), ['banana', 'cherry']);
  });
  it("returns ['cherry'] for  ['apple', banana', cherry', 'date', 'elderberry']", () => {
    assert.deepEqual(middle(["apple", "banana", "cherry", "date", "elderberry"]), ["cherry"]);
  });
  
});
