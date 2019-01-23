// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outerFxn() {
  let privateVar = "This is a private variable.";
  function innerFxn() {
    console.log(privateVar);
  }
  innerFxn();
}
outerFxn();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 1;
  return () => { return counter++; }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return counterObj = {
    count: 0,
    increment: () => { return this.count++},
    decrement: () => { return this.count--}
  }
};

const num = counterFactory();
num.increment();
console.log(num.count);
num.decrement();
console.log(num.count);
