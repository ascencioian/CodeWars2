//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


let birdsArray = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter(function(bird){
    if(!geese.includes(bird)){
      return bird
    }
  })
  return birds
}
 console.log(gooseFilter(birdsArray))
//["Mallard","Hook Bill","Crested","Blue Swedish"]

// p --> an array of strings 
// r --> filtered array removing => ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// e -->  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// returns =>  ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// p -->
//will be using filter on the array you want filtered
//the filter will be the geese array.
//for each element in the birds array => if geese array includes this item, do not return.
//will use ! bang for opposite
