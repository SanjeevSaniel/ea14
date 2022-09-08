// 1. Difference between “ == “ and “ === “ operators.
/*
== : (Double equals operator): Known as the equality or abstract comparison operator.
   : converts the variable values to the same type before performing comparison. This is called type coercion
=== : (Triple equals operator): Known as the identity or strict comparison operator.
    : does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.
*/

// 2. What is the spread operator?
/* 
The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.

It's a new operator introduced in ES6.
 */
const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];
console.log(combined);

[2, 4, 6, 1, 3, 5]; // Output

// 3. What are the differences between var, let and const?
/*
-- var
- Variables declared with var are in the function scope.

-- let
- Variables declared as let are in the block scope.

-- const
- Variables declared as const are in the block scope.

Values can be re-assigned after the variable declarations that's in case of var and let, but not for const.
*/

// 4. What is execution context ?
/*
let x = 10;

function timesTen(a){
    return a * 10;
}

let y = timesTen(x);
console.log(y); // 100

Execution context (EC) is defined as the environment in which the JavaScript code is executed. By environment, I mean the value of this, variables, objects, and functions JavaScript code has access to at a particular time.

Execution context in JavaScript are:
- Global execution context (GEC)
- Functional execution context (FEC)

Each execution context has two phases: the creation phase and the execution phase.
For each function call, the JavaScript engine creates a new function execution context.

*/

// 5. What is creation phase and execution phase ?
/*
When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:
- Create the global object i.e., window in the web browser or global in Node.js.
- Create the this object and bind it to the global object.
- Setup a memory heap for storing variables and function references.
- Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

After the creation phase, the global execution context moves to the execution phase.

During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.
For each function call, the JavaScript engine creates a new function execution context.
*/

// 6. What is meant by first class functions ?
/*
It means that you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.
*/

// 7. What are closures? Give an example of closure.
/*
A closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

Lexical scoping defines the scope of a variable by the position of that variable declared in the source code.
*/
let name = "John";

function greeting() {
  let message = "Hi";
  console.log(message + " " + name);
}
/*
- The variable "name" is a global variable. It is accessible from anywhere including within the greeting() function.
- The variable "message" is a local variable that is accessible only within the greeting() function.
- If you try to access the message variable outside the greeting() function, you will get an error.
- So the JavaScript engine uses the scope to manage the variable accessibility.
*/
