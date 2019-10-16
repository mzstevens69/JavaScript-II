// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

let  getLength = (array, cb) => {
  cb(array.length);
};

 getLength(items, function(length) {
  // getLength passes the length of the array into the callback.
  console.log('The length of the array is ' + length);
 });
 let last = (array, cb) => {
  cb(array[array.length - 1]);
};
 last(items, function(lastItem) {
  // last passes the last item of the array into the callback.
  console.log('The last one is:' + lastItem );
});

  // sumNums adds two numbers (x, y) and passes the result to the callback.
  // return cb(num1, num2);
  var sumNums = (x, y, cb) => {
    cb(x + y);
  };
  
  sumNums(9, 9, function(add) {
    console.log('The sum is ' + add);
  });


  // multiplyNums multiplies two numbers and passes the result to the callback. 
  // return multiply(num1, num2);
  let multiplyNums = (x, y, cb) => {
    cb(x*y);
  }
  multiplyNums(9, 9, function(multiply) {
    console.log('It is' + multiply);
   });
  


//const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
let contains = (array, item, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // let array = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return cb(true);
  // Pass true to the callback if it is, otherwise pass false.
 }
} 
   return cb(false)
 };
 contains(items, 'Pencil', function(testIt) {
 console.log(testIt ? 'It is in array' : 'it is not in array');
 });
/*  str.includes(searchString[, position])
/* STRETCH PROBLEM -- Array.from() method*/
//let removeDuplicates = (array, cb) => {
//  return cb(Array.from(new Set(array)));
//};
//function removeDuplicates(items, (function(items, schoolItems) {
  //console.log('removed your duplicates'`${schoolItems}`)});
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.


