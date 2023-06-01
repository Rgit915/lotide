//takeUntil function implementation
/* takes two parameters
  - 1. array
  - 2. callback
- function will return slice of the array from the beginning
   until the callback return a truthy value.
- callback provided one value i.e. item inthe array

  */
const takeUntil = function(array, callback) {
  //to store those met the condition in new 'result' array
  const result = [];
  //iterate each item in the array
  for (let item of array) {
    // callback fun called with 'item' as an argument
    if (callback(item)) {
      // if callback fun returns truthy value, condition met then return current 'item' & terminate the loop
      return result;
    }
    //else returns falsy value, condition not yet satisfied then push current 'item' to 'result'
    result.push(item);
  }
  return result;
};
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

//Test cases
const listArray = [1,2,3,4,-1,5,6,7];
assertArraysEqual(takeUntil(listArray,x => x < 0), [1,2,3,4]);// output: [1,2,3,4]


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ]); // output: [ "I've", 'been', 'to', 'Hollywood' ]

