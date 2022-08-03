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

// let theNumber = Number(prompt("Pick a number"));  Only in browser -- prompt inherent for browsers
let theNumber = 10;
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}


if (1 + 1 == 2) console.log("It's true");
// → It's true




for (let n =0; n <11; n +=1){
    console.log(n);

    if (n / 9 == 1){
        break;
    }
}


const treeLeaf = "#";
for (let i = 1; i <=7; i++){
    console.log(treeLeaf.repeat(i))
}


// Chapter 3 

