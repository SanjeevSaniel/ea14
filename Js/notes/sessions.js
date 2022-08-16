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

//! Function Expression and Arrow Function doesn't support hoisting.

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

//? August - 8
// Arrays
// Array is a data structure which helps us store varieties of values (i.e. different data types) although not necessary.

// const arrayOfNumbers = [1, 2, 3, 4, 5];
// const arrayOfNames = ["Sanjeev", "Hari"];
// const detailsOfStudent = ["Sanjeev", 1546, null, true];

// Methods to create an array - 3 Methods
//? 1.
// const listOfNames = ["Sanjeev", "Hari"];

//? 2.
// const listOfNumbers = [];
// listOfNumbers[0] = 23;
// listOfNumbers[1] = 12;
// listOfNumbers[2] = 32;
// listOfNumbers[7] = 52;
// console.log(listOfNumbers);
//! if an index of an array contains no values, the value is EMPTY.

//? 3.
const listOfPlaces = new Array("Delhi", "Hyderabad");
console.log(listOfPlaces);
console.log(listOfPlaces.length);

//? Push method
// always adds the new values at the end of the array
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
arrayOfNumbers.push(100);

//? Pop method
// it always removes the last element from the array.
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

//? Shift method
// it always removes values from the starting position of the array
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

//? Unshift method
// it always adds new values at the starting position of the array
arrayOfNumbers.unshift(10);
console.log(arrayOfNumbers);

console.log(typeof arrayOfNumbers); // In javascript, everything is an Object.
console.log(arrayOfNumbers[0]);
console.log(arrayOfNumbers[arrayOfNumbers.length - 1]);

const fruits = ["Apple", "Orange", "Pineapple", "Mango", "Orange", "Orange"];
console.log(fruits.indexOf("Orange"));
console.log(fruits.includes("Orange"));
console.log(fruits.lastIndexOf("Orange"));

//? Slice
console.log(fruits.slice(1, 4)); //! last index value in excluded.

//? Splice
// splice(starting position, no of items to delete)
console.log(fruits);
console.log(fruits.splice(1, 4, "Kiwi", "Melon"));
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());
console.log(fruits.sort().reverse());
const groupOfLetters = ["a", "aa", "aba", "ac", "aac", "acbac"];
console.log(groupOfLetters.sort());
//! sort will not give the number in ascending order

//? For of Loop and For in Loop
// allows to access the values of the array
for (const values of fruits) {
  console.log(values);
}

// allows to access the indexes of the array
for (const index in fruits) {
  console.log(index);
}

//? August - 9
// map, filter, reduce, some, every

const listOfNumbers = [2, 3, 5, 6, 4, 1, 8, 4];

const mappedNumbers = listOfNumbers.map((item) => item * 2);
console.log(mappedNumbers);

const filteredNumbers = listOfNumbers.filter((item) => item > 2);
console.log(filteredNumbers);

const reducedNumbers = listOfNumbers.reduce(
  (acc, curr) => (acc = acc + curr),
  0
);

//* some, every
// some
let resultOne = fruits.some(checkFruits);
function checkFruits(fruit) {
  return fruit === "Orange";
}

console.log(resultOne);

// every
let resultTwo = fruits.every(checkFruits);
function checkFruits(fruit) {
  return fruit === "Orange";
}
console.log(resultTwo);

//? String

const myAddress = "545, G.T. 'Howrah' - 711101";
console.log(myAddress);

const myString = "Awesome Javascript!";
console.log(myString);

// String - Methods
// charAt, concat, startsWith, endsWith

console.log(myString.charAt(5)); // returns the character at the particular index
console.log(myString.concat(myAddress)); // concatenates two strings together

console.log(myString.startsWith("Awe")); // Checks if the original string starts with the string mentioned in the parameter

console.log(myString.endsWith("Awe")); // Checks if the original string ends with the string mentioned in the parameter

console.log(myString.includes("script"));
console.log(myString.indexOf("script")); // index of the first occurrence of the string
console.log(myString.lastIndexOf("script")); // index of the last occurrence of the string

console.log(myString.length); // 0-18 = 19

// replace, replaceAll, search, reverse
console.log(myString.replace("A", "j"));
console.log(myString.replaceAll("e", "j"));

console.log(myString.search("Me")); // if the string is present, it returns the index or else returns -1

// console.log(myString.reverse()); // not supported for strings
// console.log(myString.sort()); // not supported for strings

console.log(myString.repeat(2));
console.log(myString.substr(2, 9)); // first value is the index of the character to starts with and second value is the number of characters from that position, [second value is the count of characters]

console.log(myString.substring(2, 9)); // first index value, second index value is exclusive
console.log(myString.substring(9, 2));
//! if substring first index value is greater than second one, they are reversed in position otherwise no change.

console.log(myString.slice(2, 9)); //first index value, second index value which is exclusive (not included)
console.log(myString.slice(9, 2)); // this will not alter the index numbers. if first is larger than second, will return empty value

//? trim, split
const myNewString = " Javascript  ";
console.log(myNewString.trim()); // removes the extra whitespace from the starting and the ending of the string

const names = "Hari-Bajaj-Soni";
const names1 = "Hari@Bajaj@Soni";
console.log(names.split("-"));
console.log(names1.split("@")[0]);
console.log(names1[0]);

//? Maps -

// Maps are collection of key, value pairs.
// It preserves the order of insertion of properties.
// It also preserves the data type of properties/keys, i.e. can have properties of any data type.

// How do we create a Map?
// two methods

// 1. Inserting arrays as key value pairs to Map

const map = new Map([
  ["firstName", "Sanjeev"],
  ["lastName", "Kujur"],
  ["age", 25],
]);

console.log(map);

const myMap = new Map();
myMap.set("firstName", "Sanjeev");
myMap.set("lastName", "Kujur");
myMap.set("age", 25);
console.log(myMap);
console.log(myMap.get("firstName"));

console.log(myMap.has(124));

// console.log(myMap.clear()); // clears all the entries of key value pairs
console.log(myMap.delete("age"));
console.log(myMap);
console.log(myMap.size);

//? August - 11
for (const keys of myMap.keys()) {
  console.log(keys);
}

for (const values of myMap.values()) {
  console.log(values);
}

for (const [keys, values] of myMap.entries()) {
  console.log(keys, values);
}

myMap.forEach(function (values, keys) {
  // if there are two parameters, then first one is values and then keys
  console.log(keys, values);
});

//? Sets

// Sets are collection of UNIQUE values, doesn't contain keys
// All the values can occur only once. They don't allow duplicate values
// It can hold values of any data type.

// methods to create a Set

// two method

const setOne = new Set(["apples", "Oranges", "Kiwi", "Mangoes"]);

const setTwo = new Set();
setTwo.add("Samsung");
setTwo.add("Vivo");
console.log(setTwo);

setTwo.delete("Vivo");
console.log(setTwo);

setTwo.clear();
console.log(setTwo);
console.log(setTwo.has("OnePlus"));

for (const keys of setTwo.keys()) {
  console.log(keys);
}

for (const values of setTwo.values()) {
  console.log(values);
}

for (const [keys, values] of setTwo.entries()) {
  console.log(keys, values);
}

setTwo.forEach(function (values, keys) {
  console.log(keys, values);
});

//! for sets just use .values
