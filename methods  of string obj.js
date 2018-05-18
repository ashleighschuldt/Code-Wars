// Coding in function splitAndMerge, function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.

// First we need to divide the sentence into words(Use separator space); and then divide each word into characters
// (Use separator empty string); 
// and then merge each characters with the specified sp; 
// at last merge all the words(Use separator space) and return it.


function splitAndMerge(str,sp){
    return str.split(" ").join("").split("").join(sp)
    
  }

  console.log("My name is John".split(' ').join(''));
  console.log(splitAndMerge("My name is John"," "))