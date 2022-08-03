// Chapter 1 Values, Types and Opertions - https://eloquentjavascript.net/01_values.html

// Basics
console.log(-Infinity)
console.log("Hello")
console.log(`half of 100 is ${100/2}`)

// Unary operators
console.log(typeof 4)
console.log(typeof "x")

// Boolean
console.log(3>2)
console.log(3==2)

// Empty values
console.log(8*null)


// Chapter 2 Program Structure - https://eloquentjavascript.net/02_program_structure.html
let car = 10;
console.log(`car * car = ${car*car}`)

console.log(Math.max(2, 4));

var prompt = require("prompt");
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}


