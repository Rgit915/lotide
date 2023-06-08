//Import eqArrays function
const eqArrays = require("./eqArrays");

//The assertArraysEqual() function takes 2 arrays as arguments
// and uses our eqArrays() function to compare them
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


// Export assertArraysEqual function
module.exports = assertArraysEqual;