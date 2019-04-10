const numbers = [1,2,3,4,5,6];


// map - returns changed new value
//
// filter - returns filtered value
//
//
// reduce - reducing the value



// const calculateSum = function(array){
//
// return array.reduce(function(total, number){
//
//   return total +'-'+ number;
// })                                      // } starting value here like 0 or "" )
//
//
// };
// console.log(calculateSum(numbers));



// const keepEvens= function(array){
//
//
//
//   return array.filter(function(number){
//     return number % 2 === 0;
//
//   });





// Longer version

  // const result = [];
  //
  // array.forEach(function(number){
  //   if(number % 2 === 0) {
  //   result.push(number);
  // };
  // });
  // return result;

// console.log(keepEvens(numbers));

// const print = function(number){
//   console.log(number);
// };


// const multiplyByTwo = function(array){
// // TO DO
// const result = array.map(function(number){
//   return number*2;
// });
// return result;
// };



// OR shorter - skipping creating temporary const result variable and returning it.


// const multiplyByTwo = function(array){
// // TO DO
// return array.map(function(number){
//   return number*2;
// });
// };



// const result = [];
// array.forEach(function(number){
//   result.push(number*2);
// });
// return result;
// };



// console.log(multiplyByTwo(numbers));


// const printThem = function (array){
//   array.forEach(function(number){
//     console.log(number);
//   });
// };
// printThem(numbers);
// const printDoubled = function(number){
//   console.log(number *2);
// };
//
//
// numbers.forEach(printDoubled);

//
// for(const number of numbers){
//   console.log(number);
// }


// Another way of passing the behaviour into forEach

// numbers.forEach(function(number){
//   console.log(number);
// });


// taking a behaviour and optional elements: index (show index of array) and array with length to show length

// numbers.forEach(function(number, index, array){
//   console.log(`number ${index}/${array.length} was ${number}`);
// });
