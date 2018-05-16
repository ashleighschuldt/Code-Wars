// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Solution:

function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    const length = marks.length
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = marks.reduce(reducer)
    return Math.floor(total/length)
  }

  //Best Answer

  function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }