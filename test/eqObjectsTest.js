const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const eqArrays = require('../eqArrays');


const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = { size:"medium", color:"red"};
const longSleeveShirtObject = {size: "medium", color:"red", sleeveLength: "long"}
const multiColorShirtObject = {colors: ["red", "blue"], size:"medium"}
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

describe("#eqObjects", () => {
  it("should return true for objects with the same key and value ", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("should return false for objects with the different length", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false); 
  });
  //assert.deepEqual to compare the array values
  it("should return  true for objects with different order ", () => {
    assert.strictEqual(eqArrays(multiColorShirtObject  , anotherMultiColorShirtObject), true); 
  });
  
});


