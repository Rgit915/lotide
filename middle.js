//Implement flatten()
//eqarrays function compares the two arrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
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
// Function to find the middle element(s) of an array
const middle = function(array) {
  const length = array.length;
  const midIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [array[midIndex]];
  } else {
    return [array[midIndex - 1], array[midIndex]];
  }
};
//Test Cases:
assertArraysEqual(middle([]), []); // Empty array, expects []
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // Odd number of elements, expects [4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // Even number of elements, expects [4, 5]
assertArraysEqual(middle(["apple", "banana", "cherry", "date"]), ["banana", "cherry"]); // Even number of elements (strings), expects ["banana", "cherry"]
assertArraysEqual(middle(["apple", "banana", "cherry", "date", "elderberry"]), ["cherry"]); // Odd number of elements (strings), expects ["cherry"]
