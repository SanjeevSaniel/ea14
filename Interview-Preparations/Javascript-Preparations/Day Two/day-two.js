// 1. Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
/*
`Call` is a function that helps you change the context of the invoking function. Basically, it helps you replace the value of this inside a function with whatever value you want.
*/
let obj1 = { name: "Niladri" };

let greetingCall = function (a, b, c) {
  return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};

console.log(greetingCall.call(obj1, "Newtown", "KOLKATA", "WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB

/*
`Apply` is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
*/
let obj2 = { name: "Niladri" };

let greetingApply = function (a, b, c) {
  return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};

// array of arguments to the actual function
var args = ["Newtown", "KOLKATA", "WB"];
console.log("Output using .apply() below ");
console.log(greetingApply.apply(obj2, args));

/* The output will be :
   Output using .apply() below
   welcome Niladri to Newtown KOLKATA in WB */

/*
`Bind` is a function that helps you create another function that you can execute later with the new context of this that is provided.
*/
let obj3 = { name: "Niladri" };

let greetingBind = function (a, b, c) {
  return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};

//creates a bound function that has same body and parameters
let bound = greetingBind.bind(obj3);

console.dir(bound); ///returns a function

console.log("Output using .bind() below ");

console.log(bound("Newtown", "KOLKATA", "WB")); //call the bound function

/* the output will be 
Output using .bind() below
welcome Niladri to Newtown KOLKATA in WB */

// 2. What are objects in javascript?
/*
In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.

The key of a property can be a `string`. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
*/

// Exapmle of creating an object:
let personObject = {
  firstName: "Sanjeev",
  lastName: "Kujur",
};

// 3. What are function constructors?
// In JavaScript, a constructor function is used to create objects.

// constructor function
function Person() {
  (this.name = "John"), (this.age = 23);
}

// create an object
const person = new Person();

// In the above example, function Person() is an object constructor function.
// To create an object from a constructor function, we use the new keyword.

// 4. Explain prototypes
/*
When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called a prototype object) that has a constructor property by default. The constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using functionName.prototype.
*/

function Human(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function () {
      return this.firstName + " " + this.lastName;
    });
}

let person1 = new Human("Virat", "Kohli");

console.log(person1);

// 5. What is prototype chain
// If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value.

// constructor function
function Person() {
  this.name = "John";
}

// add a property
Person.prototype.age = 20;

// creating an object
const person2 = new Person();

console.log(person2.age); // 20

// changing the property value of prototype
Person.prototype = { age: 50 };

// creating new object
const person3 = new Person();

console.log(person3.age); // 50
console.log(person2.age); // 20

// 6. Give an example of inheritance using function constructor
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

let dog = new Animal("foo", 5);
console.log(dog); // animal { name: 'foo', age: 5 }
let cat = new Animal("koo", 3);
console.log(cat); // animal { name: 'koo', age: 3 }

// 7. What are callbacks?
// a callback is a function that you pass into another function as an argument for executing later.
// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);

/* Output:

   Hi Peter
   I am callback function
*/

// 8. What is the use of setTimeout
// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
// program to display a text using setTimeout method
function greet() {
  console.log("Hello world");
}

setTimeout(greet, 3000);
console.log("This message is shown first");
/* Output:
   This message is shown first
   Hello world
*/

// 9. What are pure functions?
//  A pure function is a function which: given the same input, will always return the same output.
function sayGreeting(name) {
  return `Hello ${name}`;
}
// It is a pure function because you always get a `Hello <name>` as output for the <name> pass as an input.
