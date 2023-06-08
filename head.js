//Import the assertEqual function
const assertEqual = require('./assertEqual');
//Function head Implementation
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};
//Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([9]),9);
assertEqual(head([]), undefined);