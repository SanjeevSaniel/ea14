//* 1. What is a Temporal Dead Zone?
// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

{
  // This is the temporal dead zone for the age variable!
  // This is the temporal dead zone for the age variable!
  let age = 25; // When, we got there! No more TDZ
  console.log(age);
}

//* 2. What is the for-in loop in JavaScript? Give its syntax
// The for..in loop in JavaScript allows us to iterate over all property keys of an object.

for (key in object) {
  // body of for...in
}

// In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties.

//* 3. Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript.
/* 
Global Scope =- Variables defined outside a function are in the global scope. Also, There is only one Global scope throughout a JavaScript document.Once you’ve declared a global variable, you can use that variable anywhere in your code, even in function

Local Scope =- Variables defined inside a function are in local scope.And they have a different scope for every call of that function.
*/

//Global Variable
var num1 = 10;
var add = function () {
  // Local Variable
  var num2 = 20;
  console.log(num1); // prints 10
  console.log(num2); // prints 20
  // Global Variable Accessible inside function
  return num1 + num2;
};
console.log(num1); // prints 10
console.log(num2); // undefined error
console.log(add()); // Print 30

// Block Scope =- any variable declared in a block is called a block scope a block generally means a pair of parenthesis like {}.so if any variable is declared in a block that also can't be accessed outside. but remember Blocks only scope let and const declarations, but not var declarations.
{
  var block = 1;
  let bl = 10;
  const bl2 = 50;
}

console.log(block); // 1
console.log(bl); //ReferenceError
console.log(bl2); //ReferanceError

// Function Scope =- All scope in javascript is functional Scope by default. This means the variables declared in a function will exclusively stay within the function and cannot be accessed from outside the function or within other functions.
function example1() {
  const a = 10;
  console.log(`inside example1 ${a}`);
}
function example2() {
  console.log(`inside example2 ${a}`); // ReferenceError: a is not defined
}
example1();
console.log(`outside example1 ${a}`); // ReferenceError: a is not defined

// The "scope chain" is how Javascript looks for variables. When looking for variables through the nested scope, the inner scope first looks at its own scope. If the variable is not assigned locally, which is inside the inner function or block scope, then JavaScript will look at the outer scope of said function or block to find the variable. If Javascript could not find the variable in any of the outer scopes on the chain, it will throw a reference error.

//* 4. What is difference between null and undefined and where to use what?
// Undefined means a variable has been declared but has not yet been assigned a value. undefined is a type by itself (undefined). Unassigned variables are initialized by JavaScript with a default value of undefined.
var n;
console.log(n); //undefined

// Null is an object. It can be assigned to a variable as a representation of no value.
let n = null;
n = 1;

//* 5. what is Symbol?
// The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique.

// two symbols with the same description
const value1 = Symbol("hello");
const value2 = Symbol("hello");

console.log(value1 === value2); // false

//* 6. Write code to explain map and filter in arrays.

// Map
const nums = [1, 3, 5, 7];

const numsDoubled = nums.map((number) => number * 2);
console.log(numsDoubled); // [2, 6, 10, 14]

// No return from map's callback fn
const undefArray = nums.map((number) => {
  let double = nums * 2;
});
console.log(undefArray); // [undefined, undefined, undefined, undefined]

// Filter
const array = [1, -1, 2, 3, -5];
const positiveArray = array.filter((num) => num >= 0);
console.log(positiveArray); // [1, 2, 3]

//* 7. Explain passed by value and passed by reference
// In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments.

// Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.

//* 8. Please explain Self Invoking Function and its code
// A self-invoking expression is invoked (started) automatically, without being called. Function expressions will execute automatically if the expression is followed by () .
(function () {
  let x = "Hello!!";
})();

//* 9. What is an event loop and call stack ?
/* JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

JavaScript can do one single thing at a time because it has only one call stack.
The call stack is a mechanism that helps the JavaScript interpreter to keep track of the functions that a script calls.
Every time a script or function calls a function, it's added to the top of the call stack. Every time the function exits, the interpreter removes it from the call stack.

A function either exits through a return statement or by reaching the end of the scope.
*/
