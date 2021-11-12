//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  
    return x.reduce((x, y) => Number(x) + Number(y), 0);
    
  }
  
  
  //p --> array of integers  as strings and numbers
  //r --> return the sum of the array values
  //e --> [9, 3, '7', '3'] => 22 
  //p -->
  // we could iterate through each array item and for each item covert into a number
  // turn all of the values into a number type object
  // adding the numbers together
  // return sum
  
  console.log(sumMix([9, 3, '7', '3'],))
  //22