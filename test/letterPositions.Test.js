// Import letterPositions function
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

//
const letter = letterPositions('hello world');

describe("#letterPositions", () => {
  it("should returns [0] for ['h'] in 'hello world' ", () => {
    assert.deepEqual((letter['h']), [0]);
  });
  
  it("should returns [2, 3, 9] for ['l'] in 'hello world' ", () => {
    assert.deepEqual((letter['l']), [2, 3, 9]); 
  });
  
  it("should returns [4, 7] for ['o'] in 'hello world' ", () => {
    assert.deepEqual((letter['o']), [4, 7]); 
  });
});

