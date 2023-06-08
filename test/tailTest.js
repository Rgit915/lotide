///Import asserEqual file 
const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  //use assert.deepEqual from chai for comparing arrays
  it("returns ['Lighthouse', 'labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse', 'Labs'] );
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4] );
  });
  it("returns []empty array for empty [] array ", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] empty array for  [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  
});





// // Test Case 1: Check the returned array elements
// const arr1 = tail();
// assertEqual(arr1.length, 2); // ensure we get back two elements
// assertEqual(arr1[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(arr1[1], "Labs"); // ensure second element is "Labs"
// // Test case 2 :Check the returned array elements
// const myArray = [ 1, 2, 3, 4];
// const result2 = tail(myArray);
// assertEqual(result2.length, 3); //ensure we get back 3 elements
// assertEqual(result2[0], 2); // ensure first element is 2
// assertEqual(result2[1], 3); // ensure second element is 3
// assertEqual(result2[2], 4); // ensure third element is 4
// // Test Case 3: Array with only one element
// const arr3 = [15];2
// const result3 = tail(arr3);
// assertEqual(result3.length, 0); // ensure the tail of [15] is an empty array

// // Test Case 4: Empty array
// const arr4 = [];
// const result4 = tail(arr4);
// assertEqual(result4.length, 0); // ensure the tail of an empty array is an empty array
