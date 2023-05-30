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

// map function implementation
/* - It'll take two arguments:
         1. an array `words` to map
         2. a callback function
   - return a new array based on callback function results
*/
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["web", "flex", "development", "lighthouse", "labs", "may cohort"];
const result1 = map(words, word =>word[0]); 
assertArraysEqual(result1, [ 'w', 'f', 'd', 'l', 'l', 'm' ]);

// Test Case 1: Mapping array elements to their lengths
const result2 = map(words, word => word.length);
assertArraysEqual(result2, [3, 4, 11, 10, 4, 10]);

// Test Case 2: Mapping array elements to uppercase
const result3 = map(words, word => word.toUpperCase());
assertArraysEqual(result3, ["WEB", "FLEX", "DEVELOPMENT", "LIGHTHOUSE", "LABS", "MAY COHORT"]);