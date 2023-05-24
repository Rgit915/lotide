//eqarrays function compares the two arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  //after checking the length then iterating through each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};
//The assertArraysEqual() function takes 2 arrays as arguments
// and uses our eqArrays() function to compare them
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30];
assertArraysEqual(arr1, arr2);