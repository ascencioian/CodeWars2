//https://www.codewars.com/kata/55e3f27d5dee52d8dd0000a9/solutions/javascript

// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);

// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.


let arr = [10, 5, 2]

function diffBig2(arr) {
  let biggestNumber = Math.max(...arr)
  
  arr.splice(arr.indexOf(biggestNumber),1)
  
  return biggestNumber - Math.max(...arr)
}

console.log(diffBig2(arr))
//5

//p --> array of non-negative integers. assume that the input array has 2 or more elements. The input array has the sort method disabled,
//r --> difference between the 1st biggest number and the 2nd biggest number of the array.
//e -->  [10, 5, 2] =>  8
//p -->
// math .max and math.min can be used
// need a variable that holds the biggest number from the array
// remove the biggest number from the array with splice using index of.
// then 