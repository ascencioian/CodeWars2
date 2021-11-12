//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.




function arrayPlusArray(arr1, arr2) {
    let concatArray = arr1.concat(arr2)
    //[1, 2, 3, 4, 5, 6] 
    let sum = 0
    
    concatArray.forEach(function(n){

      sum += n
    })
    
    return sum
  
  }
  
  
  
  // two arrays filled with numbers. integers, positive numbers. 
  // sum of two array elements
  //  [1, 2, 3], [4, 5, 6] => 21
  // combine the arrays to iterate through just one. concatenate arrays
  // each value adds up to an initialized value