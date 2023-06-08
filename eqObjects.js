// eqArrays function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function eqObjects implementation
// it will take in two objects 
// returns true or false based on a perfect match
const eqObjects = function(object1, object2){
  //
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  // Check if the number of keys is the same
  if (key1.length !== key2.length) {
    return false;
  }
   // Check if the keys and corresponding values match
  for(const key of key1){
    //check the values arrays usin g Array.isArray
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) { //if values are not arrays, assuming primitives & compare two values using ===ls
        return false;
      }
    }
  }

  return true;
};

//Test cases
const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = { size:"medium", color:"red"};
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {size: "medium", color:"red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false
