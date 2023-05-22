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
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}
//implementation of flatten() function
function flatten(arr) {
  const flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattened.push(arr[i][j]);
      }
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}
//Test cases
const arr5 = [1, [2, 3, [4, 5]], 6];
const flattenedArr1 = flatten(arr5);
assertArraysEqual(flattenedArr1, [1, 2, 3, [4, 5], 6]);

const arr6 = [[1, 2], [3, [4, [5, 6]]]];
const flattenedArr2 = flatten(arr6);
assertArraysEqual(flattenedArr2, [1, 2, 3, [4, [5, 6]]]);
const arr7 = [];
const flattenedArr3 = flatten(arr7);
assertArraysEqual(flattenedArr3, []); // Expected: []
const arr8 = [[1, 2], 3, [4, [5, 6]], [7], 8];
const flattenedArr6 = flatten(arr8);
assertArraysEqual(flattenedArr6, [1, 2, 3, 4, [5, 6], 7, 8]); 