// A trick I learned in elementary school to determine whether or not a number was divisible by three is to 
// add all of the integers in the number together and to divide the resulting sum by three. 
// If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

// You can expect all test case arguments to be strings representing values greater than 0.

//My solution:

function divisibleByThree(str){
   let sum = 0;
   const total = str.split('').map((e)=>{
       sum = sum + Number(e)
   })
   return sum%3==0
}


console.log(divisibleByThree('123'))

// Best Answer:

function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
  }