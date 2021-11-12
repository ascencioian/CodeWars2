//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


let string = 'Hey fellow warriors'

function spinWords(sentence){
  //converts sentence into an array of string
  const sentenceArray = sentence.split(' ');
  //initialized variable
  let result = '';
  //map with two variables the string and the index
  sentenceArray.map((str, i) => {
    if (str.length >= 5){
      //for each string greater than 5 split into a character array. reverse the index order and rejoin
      sentenceArray[i] = str.split('').reverse().join('');
    } else {
      //for each string under 5 return the string
      sentenceArray[i] = str;
    }
    //rejoin the sentence with white spacing
  result = sentenceArray.join(' ');
    //return the sentence
  });return result;
}

console.log(spinWords(string))
//"Hey wollef sroirraw"

//p--> takes in a string of one or more words. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present
//r--> returns the same string, but with all five or more letter words being reversed
//e--> ( "Hey fellow warriors" ) =>  "Hey wollef sroirraw" 
//p-->
// convert the string into an array
// for each string that is 5 characters or more
// run function that is a reverse string  reverse algorithm
// re join the array

