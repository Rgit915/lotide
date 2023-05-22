//Implement without
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
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
}
// implementation of without() function
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};
// Test case 1: Returning a new array
const words = ["hello", "world", "lighthouse"];
const modifiedArray = without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Assertion Passed: [hello, world, lighthouse] === [hello, world, lighthouse]
// Test case 2: Removing a single element
assertArraysEqual(without([1, 2, 3, 4, 5], [3]), [1, 2, 4, 5]); // Assertion Passed: [1, 2, 4, 5] === [1, 2, 4, 5]

// Test case 3: Removing multiple elements
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4]), [1, 3, 5]); // Assertion Passed: [1, 3, 5] === [1, 3, 5]

// Test case 4: Removing string elements
assertArraysEqual(without(["apple", "banana", "cherry", "date"], ["banana", "date"]), ["apple", "cherry"]); // Assertion Passed: [apple, cherry] === [apple, cherry]

// Test case 5: Empty source array
assertArraysEqual(without([], [1, 2, 3]), []); // Assertion Passed: [] === []

// Test case 6: Empty itemsToRemove array
assertArraysEqual(without([1, 2, 3, 4, 5], []), [1, 2, 3, 4, 5]); // Assertion Passed: [1, 2, 3, 4, 5] === [1, 2, 3, 4, 5]

