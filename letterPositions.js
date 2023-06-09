///Function implementation
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

//Exporting letterPositions function
module.export = letterPositions
