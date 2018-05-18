// Write simple .camelCase method (camel_case function in PHP, 
// CamelCase in C# or camelCase in Java) for strings. 
// All words must have their first letter capitalized without spaces.

//My Answer:
const string = "this_is_a-string"
const camelCaseIt = (str) => {
    let splitArr = str.split(/[^\w\s)]|[_]/g)
    let capitalized = splitArr.map((word, i) => {
        if (i > 0){
            return word[0].toUpperCase() + word.slice(1)
        } else {
            return word
        }
    })
     
    return capitalized.join('')
}

console.log(string.split(/[^\w\s)]|[_]/g));
console.log(camelCaseIt(string))

//Best Answer:
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }