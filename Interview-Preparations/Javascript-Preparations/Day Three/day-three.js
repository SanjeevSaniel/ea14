// 1. What are promises and why do we need them?
/*
A promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
A promise may have one of three states.
- Pending
- Fulfilled
- Rejected

A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

It is also used to handle Web API calls.
*/
const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);
/* Output
   Promise {<resolved>: "There is a count value."}
*/

// 2. What is the purpose of async/await keywords?
/*
We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.
The await keyword is used inside the async function to wait for the asynchronous operation.
*/
// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();

/* Output
   Promise resolved
   hello
*/

// 3. What is hoisting ?
/* Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

keyword var is hoisted and let and const does not allow hoisting.
*/
// program to display value
var a;
a = 5;
console.log(a); // 5

// initializations are not hoisted
var a;
console.log(a); // undefined
a = 5;

// 4. What is the DOM?
/* DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.

The DOM views an HTML document as a tree of nodes. A node represents an HTML element. */

// 5. Difference between undefined vs not defined vs NaN
// The "undefined" type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it is assigned the value of undefined.
let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined

// The null data type that has only one value null.
let obj = null;
console.log(typeof obj); // object

// NaN stands for Not a Number. It is a special numeric value that indicates an invalid number.
console.log("a" / 2); // NaN;

// 6. How many operators do we have in JS ?
/*
Assignment Operators
Arithmetic Operators
Comparison Operators
Logical Operators
Bitwise Operators
String Operators
Other Operators
*/

// 7. What is callback hell ?
// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.
setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      setTimeout(() => {
        console.log(4);
        setTimeout(() => {
          console.log(5);
          setTimeout(() => {
            console.log(6);
            setTimeout(() => {
              console.log(7);
            }, 1000 * 7);
          }, 1000 * 7);
        }, 1000 * 5);
      }, 1000 * 4);
    }, 1000 * 3);
  }, 1000 * 2);
}, 1000);

// 8. What is promise chaining ?
// Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.
/*
You can perform an operation after a promise is resolved using methods then(), catch() and finally().
- The then() method is used with the callback when the promise is successfully fulfilled or resolved.
- The catch() method is used with the callback when the promise is rejected or if an error occurs.
- The finally() method gets executed when the promise is either resolved successfully or rejected.
 */
// returns a promise
let countValue1 = new Promise(function (resolve, reject) {
  reject("Promise rejected");
});

// executes when promise is resolved successfully
countValue1
  .then(function successValue(result) {
    console.log(result);
  })

  // executes if there is an error
  .catch(function errorValue(result) {
    console.log(result);
  });

// Output - Promise rejected

// 9. What are arrow functions?
// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.
let greet = () => console.log("Hello");
greet(); // Hello

// 10. Give an example of async/await
// a promise
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise1;

  console.log(result);
  console.log("hello");
}

// calling the async function
asyncFunc();
