# Lotide

  ## About
   A mini clone of the [lodash](https://lodash.com/) JavaScript library to practice creating various types of functions using JS.
   The Lotide project is a modular collection of functions that operate on data, namely Arrays and Objects. 
  ## Purpose

  **_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production.
  This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install@rorina/lotide`

**Require it:**

`const _ = require('@rorina/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3])  // => [2, 3]`


## Documentation

The following functions currently implemented are listed alphabetically below :

* `assertArraysEqual(...)`  : function which takes in two arrays and prints an appropriate message after comparing the two given arrays.

* `assertEqual(...)`        : custom assertion function which compares two values and prints out a colorful message to console in both success and failur.Emojis are used to add visuals and color to the assertion output. 

* `assertObjectsEqual(...)` : takes in two objects to compare and logs an approprate assertion emoji included messages to the console.

* `countLetters(...)`       : takes in a sentence as a string and then returns a count of each of the letters in the given sentence.

* `countOnly(...)`          : takes in a collection of items and returns a specific subset of those items(in this case limited to strings).

* `eqArrays(...)`           : takes in 2 arrays and returns true if the arrays are equal and false otherwise.

* `eqObjects(...)`          : takes in 2 objects and return true if they are equal and flase otherwise.

* `findKey(...)`            : takes in an object and a callback and then returns the first key that meets the criteria specified in callback

* `findKeyByValue(...)`     : takes in an object and a value as argument and returns the first key that corresponds to that value.

* `flatten(...)`            : takes in an array that contains elements including nested array of elements and then returns a flatttened version of the input array.

* `head(...)`               : takes in an array as argument and returns the first element in the given array.

* `letterPositions(...)`    : function takes in a string input and returns all indices of letter positons in the given string.

* `map(...)`                : takes in an array and a callback and returns a new array based in the results of the callback on each item in the array.

* `middle(...)`             : takes in an array and returns middle most element of the array

* `tail(...)`               : takes in an array as argument and returns everything except the first element of the array.

* `takeUntil(...)`          : takes in an array and callback and retuns a slice of the array based on the results of the callback on each item in the array.

* `without(...)`            : takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
