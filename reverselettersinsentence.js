// Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.

// If there is punctuation, it should be interpreted as a regular character; no special rules.

// If there is spacing before/after the input string, leave them there.

// String will not be empty.

//My Answer:

function reverser(sentence){
    return sentence.split(' ').map(word => word.split('').reverse()).join(' ').replace(/,/g,'')
}

console.log(reverser('A fun little challenge!'));

//Best Answer:
function reverser(sentence) {
    return  (sentence.split(" ")).map(x=>x.split("").reverse().join("")).join(" ")
  }