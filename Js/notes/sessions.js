// let x = 1;
// x = (++x, x++);
/* 
* In comma separated values the last value will be assgined to the variable

* having a pre/post operations alongwith the comma separated values, the current value of the last operational value will be assigned to the variable
*/
// console.log(x);

// for (let count = 1; count <= 20; count++) {
//     console.log(count);
// }

// for (let i = 2; i <= 20; i+=2) {
//   console.log(i);
// }

//  While Loop
// let counter = 1;
// while (counter <= 20) {
//     console.log(counter);
//     counter += 2;
// }

// let number = 2;
// while (number <= 20) {
//   console.log(number);
//   number += 2;
// }

//*  Do while
// In do while loop, we execute the statement for the first time, also the increment operations if exists, and then go for the condition checking
// let counter = 1;

// do {
//   console.log(counter);
//   counter += 2;
// } while (counter <= 20);

// let number = 2;
// do {
//     console.log(number);
//     number += 2;
// } while (number <= 20);

//* Print Table of 7
// for (let i = 1; i <= 10; i++) {
//   console.log(`${7} * ${i} = ${7 * i}`);
// }

//* Functions
// function add(a, b, c) {
//   let result = 0;
//   result = a + b + c;
//   console.log(result);
// }

// add(1, 2, 3);

//* Arrow Functions
const addition = (a, b) => {
  let result = a + b;
  console.log(result);
};

addition(4, 8);

//* Function expressions
const expression = function () {
  console.log("Function Expresion");
};

expression();

const adding = (a, b) => {
  // a = 2, b = 5
  let result = a + b; // 2 + 5
  return result; // result = 7
};

let finalResult = adding(2, 5); // finalresult = 7
console.log(finalResult);

// ---
//* let and const is a block scoped

let a = 15;
const b = 30;
var c = 5; // not block scoped, they get space in global space.
{
  let a = 10;
  console.log(a); // 10
  const b = 20;
  console.log(b); // 20
  var c = 7;
  console.log(c); // 7
}

console.log(a); // 15
console.log(b); // 30
console.log(c); // 7

console.log("-----");

//* Legal Shadowing
// var --> let

//* Illegal Shadowing
// let --> var

var d = 20;
console.log(d); // 20
{
  let d = 30;
  console.log(d); // 30
}

console.log(d); // 20

// --
let f = 10;
function one() {
  let f = 15;
  console.log(f); //15

  two();
  function two() {
    let g = 20;
    console.log(f, g); //15,20

    three();
    function three() {
      let h = 30;
      console.log(f, g, h); //15,20,30
    }
    console.log(f, g); //15,20
  }
  console.log(f); //15
  four();
  function four() {
    let i = 40;
    console.log("four", f, i); //15,40
  }
}
one();
