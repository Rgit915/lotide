//import assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual')

const arr1 = [10, 20, 30];
const arr2 = [10, 20, 30];
const arr3 = [30, 10, 20];
assertArraysEqual(arr1, arr2);
assertArraysEqual(arr1, arr3); //[10,20,30] !== [30,10,20]
const arr5 = [];
const arr6 = [];
assertArraysEqual(arr5, arr6);
const arr7 = ['a','b', 'c'];
const arr8 = ['x', 'y', 'z'];
assertArraysEqual(arr1, arr2);