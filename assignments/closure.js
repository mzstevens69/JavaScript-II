// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
// function country(countryName){
//   const lang1 = 'French';
//   const lang2 ='English';
//  console.log(`${countryName} is the second biggest country in the world`);
//   debugger;
//   function province(provName){
//     const sport = 'hockey'
//     console.log(`the most popular sport in ${provName} is ${sport}`);
function theClosure(closeIt) {
  console.log(`${closeIt} it just works`);
  function insideCloseIt(itIsClosed) {
    console.log(`I am inside the functioon ${closeIt} using ${itIsClosed}`);
  }//closes insideCloseIt
  insideCloseIt('the first function');
};//closes theClosure
theClosure('when it works')
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counter = (count = 0) => { 
  let plusOne = count;
  let limit = 10;
    return function counter() {
      plusOne += 1;
      console.log(plusOne);
      if( count === limit) {
       
        return count = 1;
      }
       
      return plusOne;
    }
   
}; 
const newCounter = counter();
newCounter();
newCounter();

  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = ((goUp = 0) =>  {
  goUp++;
  let goDown = 5;
  goDown-- ; 
  if (goDown == 0) {
    return goDown = 5;
  }
  return counter();

});
console.log(counterFactory);
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

