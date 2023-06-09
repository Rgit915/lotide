const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  //use assert.deepEqual from chai for comparing arrays
  it("returns ['Lighthouse', 'labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs'] );
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4] );
  });
  it("returns []empty array for empty [] array ", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] empty array for  [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  
});
