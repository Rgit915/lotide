//Function eqObjects
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

// assertObjectsEqual function implementation
const assertObjectsEqual = function(actual, expected) {
  // added 'inspect' function from 'util' module to display the objects in a more readable format
  const inspect = require('util').inspect; 
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual
    )}] === [${inspect(expected)}]`);
   }
   else{
    console.log(`🔴🔴🔴 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
   }
}

//Test cases
// Test case
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Alice", age: 25 };

assertObjectsEqual(obj1, obj2); // Assertion Passed: { name: 'John', age: 30 } === { name: 'John', age: 30 }
assertObjectsEqual(obj1, obj3); // Assertion Failed: { name: 'John', age: 30 } !== { name: 'Alice', age: 25 }
