//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
    if(array.length === 0 ){
      return 'even'
    }
   
    let arraySum = array.reduce(( a, n) => a+n)
    if( arraySum % 2 === 0 ){
      return 'even'
    } else{
      return 'odd'
    }
    
}


//or 

function oddOrEven(arr){
    //sum arr -> determine even or odd -> output string 'even' 'odd'
    return arr.reduce((a, c) => a + c, 0) % 2 === 0 ? 'even' : 'odd'
}



// list of integers in an array  ,  (if empty)
// could be an empty array or with a 0 or empty =>  consider even

// find the sum of elements in the array 
// check if odd or even => return string 'odd' or 'even'

// [0, 1, 5, 6, 7] , 19 => 'odd'
//// [0, 1, 5, 6, 6] , 18 => 'even'
// [0] , 0 => 'even'
// [ ] , 0 => 'even'

// array of numbers in no particular order with reduce 
// add numbers together and keep in an array
// run a conditional to check if array value is
//odd 
//even
//falsy b/c if empty, or if 0.  => even

