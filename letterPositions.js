//assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

//EqArrays function
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

//Function implementation
//it'll return all indices in the string
//Note that indices are Zero-based
const letterPositions = function(sentence) {
  const results = {}; //empty object to store the indices
  // logic to update results here
  //Iterating over each character of the sentence using for loop
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    //If the character is not a space,check if it already exists in results
    if (char !== " ") {
      if (results[char]) {
        results[char].push(i);  //if it exist, push the current index 'i' to its array
      } else {
        results[char] = [i];   // if it doesn't exist, create new key in 'results'
      }
    }
  }

  return results;  // return the 'results' object containing all the indices of each character
};

//Test Cases
const test1 = letterPositions("hello");

console.log(test1); //{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
assertArraysEqual(test1["h"],[0]);    // ✅✅✅ Assertion Passed: [0] === [0]
assertArraysEqual(test1["e"],[1]);    // ✅✅✅ Assertion Passed: [1] === [1]
assertArraysEqual(test1["l"],[2,3]);  // ✅✅✅ Assertion Passed: [2,3] === [2,3]

//Test case2
const  test2 = letterPositions("hello world");
console.log(test2); //{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 , 9], o: [ 4, 7 ], w: [6], r: [8], d:[10] }
assertArraysEqual(test2["h"],[0]);    // ✅✅✅ Assertion Passed: [0] === [0]
assertArraysEqual(test2["e"],[1]);    // ✅✅✅ Assertion Passed: [1] === [1]
assertArraysEqual(test2["l"],[2,3,9]);  // ✅✅✅ Assertion Passed: [2,3,9] === [2,3,9]
assertArraysEqual(test2["o"],[4,7]);    // ✅✅✅ Assertion Passed: [4,7] === [4,7]
assertArraysEqual(test2["w"],[6]);    // ✅✅✅ Assertion Passed: [6] === [6]
assertArraysEqual(test2["r"],[8]);    // ✅✅✅ Assertion Passed: [8] === [8]
assertArraysEqual(test2["d"],[10]);    // ✅✅✅ Assertion Passed: [10] === [10]
