//Import middle and assertArraysEqual modules
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
//Test Cases:
assertArraysEqual(middle([]), []); // Empty array, expects []
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // Odd number of elements, expects [4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // Even number of elements, expects [4, 5]
assertArraysEqual(middle(["apple", "banana", "cherry", "date"]), ["banana", "cherry"]); // Even number of elements (strings), expects ["banana", "cherry"]
assertArraysEqual(middle(["apple", "banana", "cherry", "date", "elderberry"]), ["cherry"]); // Odd number of elements (strings), expects ["cherry"]
