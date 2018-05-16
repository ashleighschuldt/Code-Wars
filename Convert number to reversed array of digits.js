// You have to return the digits of this number within an array in reverse order.

// My Solution
function digitize(n) {
    const arr  = n.toString().split("").reverse().map(Number)
    return arr
  }

  //Best Solution

  function digitize(n){
    return (n + '').split('').map(Number).reverse();
  }