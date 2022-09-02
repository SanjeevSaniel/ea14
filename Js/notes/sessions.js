// // let x = 1;
// // x = (++x, x++);
// /*
// * In comma separated values the last value will be assgined to the variable

// * having a pre/post operations alongwith the comma separated values, the current value of the last operational value will be assigned to the variable
// */
// // console.log(x);

// // for (let count = 1; count <= 20; count++) {
// //     console.log(count);
// // }

// // for (let i = 2; i <= 20; i+=2) {
// //   console.log(i);
// // }

// //  While Loop
// // let counter = 1;
// // while (counter <= 20) {
// //     console.log(counter);
// //     counter += 2;
// // }

// // let number = 2;
// // while (number <= 20) {
// //   console.log(number);
// //   number += 2;
// // }

// //*  Do while
// // In do while loop, we execute the statement for the first time, also the increment operations if exists, and then go for the condition checking
// // let counter = 1;

// // do {
// //   console.log(counter);
// //   counter += 2;
// // } while (counter <= 20);

// // let number = 2;
// // do {
// //     console.log(number);
// //     number += 2;
// // } while (number <= 20);

// //* Print Table of 7
// // for (let i = 1; i <= 10; i++) {
// //   console.log(`${7} * ${i} = ${7 * i}`);
// // }

// //* Functions
// // function add(a, b, c) {
// //   let result = 0;
// //   result = a + b + c;
// //   console.log(result);
// // }

// // add(1, 2, 3);

// //* Arrow Functions
// const addition = (a, b) => {
//   let result = a + b;
//   console.log(result);
// };

// addition(4, 8);

// //* Function expressions
// const expression = function () {
//   console.log("Function Expresion");
// };

// expression();

// //! Function Expression and Arrow Function doesn't support hoisting.

// const adding = (a, b) => {
//   // a = 2, b = 5
//   let result = a + b; // 2 + 5
//   return result; // result = 7
// };

// let finalResult = adding(2, 5); // finalresult = 7
// console.log(finalResult);

// // ---
// //* let and const is a block scoped

// let a = 15;
// const b = 30;
// var c = 5; // not block scoped, they get space in global space.
// {
//   let a = 10;
//   console.log(a); // 10
//   const b = 20;
//   console.log(b); // 20
//   var c = 7;
//   console.log(c); // 7
// }

// console.log(a); // 15
// console.log(b); // 30
// console.log(c); // 7

// console.log("-----");

// //* Legal Shadowing
// // var --> let

// //* Illegal Shadowing
// // let --> var

// var d = 20;
// console.log(d); // 20
// {
//   let d = 30;
//   console.log(d); // 30
// }

// console.log(d); // 20

// // --
// let f = 10;
// function one() {
//   let f = 15;
//   console.log(f); //15

//   two();
//   function two() {
//     let g = 20;
//     console.log(f, g); //15,20

//     three();
//     function three() {
//       let h = 30;
//       console.log(f, g, h); //15,20,30
//     }
//     console.log(f, g); //15,20
//   }
//   console.log(f); //15
//   four();
//   function four() {
//     let i = 40;
//     console.log("four", f, i); //15,40
//   }
// }
// one();

// //? August - 8
// // Arrays
// // Array is a data structure which helps us store varieties of values (i.e. different data types) although not necessary.

// // const arrayOfNumbers = [1, 2, 3, 4, 5];
// // const arrayOfNames = ["Sanjeev", "Hari"];
// // const detailsOfStudent = ["Sanjeev", 1546, null, true];

// // Methods to create an array - 3 Methods
// //? 1.
// // const listOfNames = ["Sanjeev", "Hari"];

// //? 2.
// // const listOfNumbers = [];
// // listOfNumbers[0] = 23;
// // listOfNumbers[1] = 12;
// // listOfNumbers[2] = 32;
// // listOfNumbers[7] = 52;
// // console.log(listOfNumbers);
// //! if an index of an array contains no values, the value is EMPTY.

// //? 3.
// const listOfPlaces = new Array("Delhi", "Hyderabad");
// console.log(listOfPlaces);
// console.log(listOfPlaces.length);

// //? Push method
// // always adds the new values at the end of the array
// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
// arrayOfNumbers.push(100);

// //? Pop method
// // it always removes the last element from the array.
// arrayOfNumbers.pop();
// console.log(arrayOfNumbers);

// //? Shift method
// // it always removes values from the starting position of the array
// arrayOfNumbers.shift();
// console.log(arrayOfNumbers);

// //? Unshift method
// // it always adds new values at the starting position of the array
// arrayOfNumbers.unshift(10);
// console.log(arrayOfNumbers);

// console.log(typeof arrayOfNumbers); // In javascript, everything is an Object.
// console.log(arrayOfNumbers[0]);
// console.log(arrayOfNumbers[arrayOfNumbers.length - 1]);

// const fruits = ["Apple", "Orange", "Pineapple", "Mango", "Orange", "Orange"];
// console.log(fruits.indexOf("Orange"));
// console.log(fruits.includes("Orange"));
// console.log(fruits.lastIndexOf("Orange"));

// //? Slice
// console.log(fruits.slice(1, 4)); //! last index value in excluded.

// //? Splice
// // splice(starting position, no of items to delete)
// console.log(fruits);
// console.log(fruits.splice(1, 4, "Kiwi", "Melon"));
// console.log(fruits);
// console.log(fruits.sort());
// console.log(fruits.reverse());
// console.log(fruits.sort().reverse());
// const groupOfLetters = ["a", "aa", "aba", "ac", "aac", "acbac"];
// console.log(groupOfLetters.sort());
// //! sort will not give the number in ascending order

// //? For of Loop and For in Loop
// // allows to access the values of the array
// for (const values of fruits) {
//   console.log(values);
// }

// // allows to access the indexes of the array
// for (const index in fruits) {
//   console.log(index);
// }

// //? August - 9
// // map, filter, reduce, some, every

// const listOfNumbers = [2, 3, 5, 6, 4, 1, 8, 4];

// const mappedNumbers = listOfNumbers.map((item) => item * 2);
// console.log(mappedNumbers);

// const filteredNumbers = listOfNumbers.filter((item) => item > 2);
// console.log(filteredNumbers);

// const reducedNumbers = listOfNumbers.reduce(
//   (acc, curr) => (acc = acc + curr),
//   0
// );

// //* some, every
// // some
// let resultOne = fruits.some(checkFruits);
// function checkFruits(fruit) {
//   return fruit === "Orange";
// }

// console.log(resultOne);

// // every
// let resultTwo = fruits.every(checkFruits);
// function checkFruits(fruit) {
//   return fruit === "Orange";
// }
// console.log(resultTwo);

// //? String

// const myAddress = "545, G.T. 'Howrah' - 711101";
// console.log(myAddress);

// const myString = "Awesome Javascript!";
// console.log(myString);

// // String - Methods
// // charAt, concat, startsWith, endsWith

// console.log(myString.charAt(5)); // returns the character at the particular index
// console.log(myString.concat(myAddress)); // concatenates two strings together

// console.log(myString.startsWith("Awe")); // Checks if the original string starts with the string mentioned in the parameter

// console.log(myString.endsWith("Awe")); // Checks if the original string ends with the string mentioned in the parameter

// console.log(myString.includes("script"));
// console.log(myString.indexOf("script")); // index of the first occurrence of the string
// console.log(myString.lastIndexOf("script")); // index of the last occurrence of the string

// console.log(myString.length); // 0-18 = 19

// // replace, replaceAll, search, reverse
// console.log(myString.replace("A", "j"));
// console.log(myString.replaceAll("e", "j"));

// console.log(myString.search("Me")); // if the string is present, it returns the index or else returns -1

// // console.log(myString.reverse()); // not supported for strings
// // console.log(myString.sort()); // not supported for strings

// console.log(myString.repeat(2));
// console.log(myString.substr(2, 9)); // first value is the index of the character to starts with and second value is the number of characters from that position, [second value is the count of characters]

// console.log(myString.substring(2, 9)); // first index value, second index value is exclusive
// console.log(myString.substring(9, 2));
// //! if substring first index value is greater than second one, they are reversed in position otherwise no change.

// console.log(myString.slice(2, 9)); //first index value, second index value which is exclusive (not included)
// console.log(myString.slice(9, 2)); // this will not alter the index numbers. if first is larger than second, will return empty value

// //? trim, split
// const myNewString = " Javascript  ";
// console.log(myNewString.trim()); // removes the extra whitespace from the starting and the ending of the string

// const names = "Hari-Bajaj-Soni";
// const names1 = "Hari@Bajaj@Soni";
// console.log(names.split("-"));
// console.log(names1.split("@")[0]);
// console.log(names1[0]);

// //? Maps -

// // Maps are collection of key, value pairs.
// // It preserves the order of insertion of properties.
// // It also preserves the data type of properties/keys, i.e. can have properties of any data type.

// // How do we create a Map?
// // two methods

// // 1. Inserting arrays as key value pairs to Map

// const map = new Map([
//   ["firstName", "Sanjeev"],
//   ["lastName", "Kujur"],
//   ["age", 25],
// ]);

// console.log(map);

// const myMap = new Map();
// myMap.set("firstName", "Sanjeev");
// myMap.set("lastName", "Kujur");
// myMap.set("age", 25);
// console.log(myMap);
// console.log(myMap.get("firstName"));

// console.log(myMap.has(124));

// // console.log(myMap.clear()); // clears all the entries of key value pairs
// console.log(myMap.delete("age"));
// console.log(myMap);
// console.log(myMap.size);

// //? August - 11
// for (const keys of myMap.keys()) {
//   console.log(keys);
// }

// for (const values of myMap.values()) {
//   console.log(values);
// }

// for (const [keys, values] of myMap.entries()) {
//   console.log(keys, values);
// }

// myMap.forEach(function (values, keys) {
//   // if there are two parameters, then first one is values and then keys
//   console.log(keys, values);
// });

// //? Sets

// // Sets are collection of UNIQUE values, doesn't contain keys
// // All the values can occur only once. They don't allow duplicate values
// // It can hold values of any data type.

// // methods to create a Set

// // two method

// const setOne = new Set(["apples", "Oranges", "Kiwi", "Mangoes"]);

// const setTwo = new Set();
// setTwo.add("Samsung");
// setTwo.add("Vivo");
// console.log(setTwo);

// setTwo.delete("Vivo");
// console.log(setTwo);

// setTwo.clear();
// console.log(setTwo);
// console.log(setTwo.has("OnePlus"));

// for (const keys of setTwo.keys()) {
//   console.log(keys);
// }

// for (const values of setTwo.values()) {
//   console.log(values);
// }

// for (const [keys, values] of setTwo.entries()) {
//   console.log(keys, values);
// }

// setTwo.forEach(function (values, keys) {
//   console.log(keys, values);
// });

// //! for sets just use .values

// //? August - 19
// //* First Class Functions (FCF's) -
// // FCF's are those functions which can be passed as an argument into anohter or can be returned from another functions. They are also called as First Class Citizens.
// const functionA = function (a) {
//   console.log(a);
// };

// function abc() {
//   console.log("I am abc function");
// }
// functionA(abc); // abc is a FCF
// // functionA is a Higher Order Function

// functionA(function ab() {
//   console.log("I am ab function");
// });

// const functionB = function () {
//   return function () {
//     console.log("I am a returned function");
//   };
// };

// let returnedValue = function () {
//   console.log("I am a returned function");
// };

// console.log(returnedValue);

// //* Higher Order Functions
// // These are those functions which takes functions as arguments or return functions as values.

// //* Callback Functions
// // These are those kind of functions, which can be callbacked after certain period of time or as and when required.

// const sayHi = (friendsName) => {
//   // callback function
//   console.log(`Hello ${friendsName}! I hope you are doing good`);
// };

// const greeting = (nameOfFriend, callbackFunction) => {
//   console.log(
//     `I am calling back a function named ${callbackFunction}. Watch Out!!`
//   );
//   callbackFunction(nameOfFriend); // sayHi("Sanjeev"), calling a callback function
// };

// greeting("Sanjeev", sayHi);

// //! Inheritance
// // brand, camera, android

// function Mobile(brand, camera, android) {
//   this.brand = brand;
//   this.camera = camera;
//   this.android = android;
// }

// const myMobile = new Mobile("Samsung", "64MP", "Android 12");
// const myMobile2 = new Mobile("Pixel", "10MP", "Android 13");

// console.log(myMobile);
// console.log(myMobile2);

// // Mobile { brand: 'Samsung', camera: '64MP', android: 'Android 12' }
// // Mobile { brand: 'Pixel', camera: '10MP', android: 'Android 13' }

// const student = {
//   name: "Sanjeev",
//   age: "25",
//   showDetails: function () {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//     // return (`Name: ${this.name}, Age: ${this.age}`);
//   },
// };

// student.showDetails();

// const studentTwo = {
//   name: "Ravi",
// };

// // Inheritance of properties and methods of an object
// //* studentTwo.__proto__ = student;
// //* console.log(studentTwo);
// //* console.log(studentTwo.age);
// //* studentTwo.showDetails();
// // console.log(studentTwo.showDetails());
// //* console.log("----");
// //* console.log(student.__proto__);
// //* console.log(student.__proto__.__proto__);
// //* console.log("----");
// //* console.log(studentTwo.__proto__);
// //* console.log(studentTwo.__proto__.__proto__);
// //* console.log(studentTwo.__proto__.__proto__.__proto__);

// // array
// //* let myArray = [1, 2, 3, 4, 5];
// //* console.log(myArray.__proto__);
// //* console.log(myArray.__proto__.__proto__);
// //* console.log(myArray.__proto__.__proto__.__proto__);

// //* function hello() {
// //*   console.log("Hi");
// //* }

// //* console.log(hello.__proto__);
// //* console.log(hello.__proto__.__proto__);
// //* console.log(hello.__proto__.__proto__.__proto__);

// //TODO: August - 23
// //? Call, Apply, Bind - They are used for function Borrowing.
// let employee1 = {
//   name: "Ravi",
//   employeeCode: 1,
//   domain: "Technical",
//   displayInfo: function () {
//     console.log(this.name, this.employeeCode, this.domain);
//   },
// };
// console.log(employee1.name);
// // employee1.displayInfo();

// let employee2 = {
//   name: "Arya",
//   employeeCode: 2,
//   domain: "Developer",
// };

// let employee3 = {
//   name: "Jaanvi",
//   employeeCode: 3,
//   domain: "HR",
// };

// employee1.displayInfo.call(employee2);
// employee1.displayInfo.call(employee3);

// //?
// let employee4 = {
//   name: "Ravi",
//   employeeCode: 1,
//   domain: "Technical",
// };

// let displayInfo = function (gender, age) {
//   console.log(this.name, this.employeeCode, this.domain, gender, age);
// };

// //! call() methods input format, first is always the object calling the function followed by the arguments.
// displayInfo.call(employee4, "Male", "25");
// displayInfo.call(employee3, "Female", "25");
// console.log("-------------------------------");

// //! apply()
// displayInfo.apply(employee1, ["Male", 25]); // arguments are passed in the form of an array.
// displayInfo.call(employee3, ["Female", "25"]);
// console.log("-------------------------------");

// //! bind()
// let resultBind = displayInfo.bind(employee1);
// resultBind("Male", 24);

// let result2 = displayInfo.bind(employee2);
// // console.log(result1);
// result2("Male", 25);

// let result3 = displayInfo.bind(employee3);
// // console.log(result1);
// result3("Female", 23);
// console.log("--------------------------------");

// displayInfo.bind(employee1)("Male", 24);

// //! Object.create()
// const PersonProto = {
//   calculateAge() {
//     //here in this.propertyName, this is pointing to the object that is calling this method....
//     console.log(
//       `My name is ${this.fName} ${this.lName} and current age is ${
//         2022 - this.bYear
//       }`
//     );
//   },
//   initialise(fName, lName, bYear) {
//     this.fName = fName;
//     this.lName = lName;
//     this.bYear = bYear;
//   },
// };

// const jarvis = Object.create(PersonProto);
// console.log(jarvis);

// jarvis.fName = "Jarvis";
// jarvis.lName = "Stewart";
// jarvis.bYear = 1994;
// console.log(jarvis);
// //jarvis.initialise("Jarvis","Stewart",1994);

// jarvis.calculateAge();

// const harry = Object.create(PersonProto);
// console.log(harry);
// harry.initialise("Harry", "Potter", 1980);

// console.log(harry);

// //TODO: August - 24
// //? Class
// /*
// Classes in javascript doesn't work exactly similar to that of classes in java/c++

// 1. Classes are not hoisted
// 2. Classes are called as First Class Citizens
// 3. Classes are used in strict mode
// */

// class PersonClass1 {
//   constructor() {}

//   calculateAge() {}
// }

// const PersonClass = class {
//   constructor(fName, lName, age) {
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age;
//   }

//   calculateAge() {
//     console.log(`My name is ${this.fName} ${this.lName}`);
//   }
// };

// const jsClass = new PersonClass("Sanjeev", "Kujur", 25);
// console.log(jsClass);

// jsClass.calculateAge();

// PersonClass.prototype.greet = function () {
//   console.log(`Hi!`);
// };

// jsClass.greet();

// const StudentProto = Object.create(PersonProto);
// StudentProto.initial = function (fName, lName, course) {
//   PersonProto.initialise.call(StudentProto, fName, lName, course);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `Student's name is ${this.fName} ${this.lName} and is pursuing course as ${this.course}`
//   );
// };

// const sejhal = Object.create(StudentProto);
// console.log(sejhal);
// sejhal.initial("Sejhal", "Kaushal", 1994, "CSE");
// sejhal.introduce();
// sejhal.calculateAge();

// //TODO: August - 25
// //? Closures

// const ticketBooking = function () {
//   let passengerCount = 0;
//   let passengerCount1 = 0;
//   return function () {
//     passengerCount++;
//     passengerCount1++;
//     console.log(
//       `The count of the passenges are ${passengerCount} ${passengerCount1}`
//     );
//   };
// };

// const bookie = ticketBooking();
// console.log(bookie); // function definition
// console.dir(bookie);
// bookie(); // The count of the passenges are 1 1
// bookie(); // The count of the passenges are 2 2
// bookie(); // The count of the passenges are 3 3

// let h;
// const g = function () {
//   const a = 23;
//   h = function () {
//     console.log(a * 2);
//   };
// };

// g();
// h();
// console.log(h);

// const i = function () {
//   const b = 25;
//   h = function () {
//     console.log(b * 2);
//   };
// };

// i();
// h();

// // setTimeout and setInterval
// // setInterval(
// //   (param1, param2) => {
// //     console.log("Hey", param1, param2);
// //     console.log("Hey", param1, param2);
// //   },
// //   2000,
// //   "apple",
// //   "oranges"
// // );

// const boardPassengers = (n, wait) => {
//   const peoplePerGroup = n / 3; //60

//   setTimeout(() => {
//     console.log(`We are boarding all ${n} passengers`);
//     console.log(
//       `There are 3 groups with ${peoplePerGroup} passengers in each group`
//     );
//   }, wait * 1000); //3secs
//   console.log(`Starting onboarding of the passengers in ${wait} hrs`);
// };
// boardPassengers(180, 3);

// //? JQuery
// //Jquery - It is a JavaScript Library, which provides us an effective method for doing some changes in our
// // frontend and gives us essential features like DOM manipulation and AJAX interactions.

// // $("button").click(function () {
// //   // $("p").hide();
// //   $("p").toggle();
// // });

// //TODO: August 30, 2022
// //? Ajax
// // Asynchronous Javascript and XML
// $("button").click(function () {
//   $.ajax({
//     url: "https://jsonplaceholder.typicode.com/todos/2",
//     type: "GET",
//     success: function (data) {
//       console.log(data);
//       document.getElementById("para").innerText = data.title;
//     },
//   });
// });

// //? Callback Hell
// // Callbacks are just the name/convention for using JavaScript. It instead of immediately returning results like other functions, takes time to produce the result. So, If we stuck in some particular call which prevents us from making further calls ends us into callback Hell.
// // The structure of callback hell looks like pyramid/arrow shape.
// // This makes our code look haphazard and makes it hard to understand.
// // We should always try to avoid using multiple Callbacks to end up falling into callback hell.
// // We use Promises to prevent using Callbacks and thereby avoiding Callback Hell.

// const getEmpId = () => {
//   setTimeout(() => {
//     console.log("Fetching the ID's");
//     let id = [1, 2, 3, 4, 5];
//     console.log(id);

//     setTimeout(() => {
//       let empDetails = {
//         fName: "Sanjeev",
//         lName: "Kujur",
//         age: 25,
//       };
//       console.log(
//         `The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
//       );

//       setTimeout(() => {
//         (empDetails.gender = "Male"),
//           console.log(
//             `The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the gender is ${empDetails.gender}`
//           );
//       }, 2000);
//     }, 2000);
//   }, 2000);
// };

// getEmpId();

// //TODO: August 31
// //? Promises
// // Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not able to do so fetches us with an error message.

// // It has three stages
// // 1. Pending  2. Resolved(fulfilled)  3. Rejected
// // const getId = new Promise((resolve, reject) => {
// //   // Producer - resolve and reject are executor function
// //   setTimeout(() => {
// //     let id = [1, 2, 3, 4, 5];
// //     resolve(id);
// //     reject("Error in fetching the details");
// //   }, 2000);
// // });

// // Consumer
// // getId
// //   .then((data) => {
// //     console.log("The data resolved is", data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });
// // // .finally(() => {
// // //   console.log("End of Promise");
// // // })

// const getId = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let id = [1, 2, 3, 4, 5];
//     resolve(id);
//     reject("Error in fetching the details"); //either of resolve or reject is executed on the basis of data received.If received then resolve is called otherwise reject is called. Resolve hits the .then() method and the reject hits the .catch method()
//   }, 2000);
// });

// const getEmpDetails = (data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (data) => {
//         let empDetails = {
//           fName: "Ravi",
//           lName: "Patel",
//           age: 24,
//         };
//         resolve(
//           `The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
//         );
//       },
//       2000,
//       data
//     );
//   });
// };

// getId
//   .then((id) => {
//     console.log("The id is", id);
//     getEmpDetails(id[2])
//       .then((data) => {
//         console.log("the data is", data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("End of promise chaining");
//   });

// let promise = new Promise((resolve, reject) => {
//   resolve();
// });

// //! having an error
// // promise
// // 	.then(() => {
// // 		console.log("first");
// // 	})
// // 	.then(() => {
// // 		setTimeout(() => {
// //             console.log("second");
// //         }, 3000);
// // 	})
// // 	.then(() => {
// //         console.log("third");
// // 	});

// // executes successfully
// promise
//   .then(() => {
//     console.log("first");
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("second");
//         resolve();
//         // reject();
//       }, 3000);
//     });
//   })
//   .then(() => {
//     console.log("third");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //TODO: September - 1
// //? Async/Await
// // They are used to handle promises more efficiently. The word async before a function always means that the function returns a PROMISE. So, therefore we use "async" keyword before the function name to return a promise instead of a value.

// // Await is used to wait for the result that is to be returned from the promise. So, we use await when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making API calls.

// // Await is always used with the keyword async.

// async function tryingPromises() {
//   //continued with line 2.
//   console.log("I am inside the function using async/await"); //3.
//   const response = await fetch("https://api.github.com/users"); //4.th line initiated but not finished, it will continue from here later, because I am asked to wait but I have other options to execute other lines also.
//   console.log("before the response is fetched");
//   const users = await response.json();
//   console.log("Users resolved");

//   return users;
// }

// console.log("Before calling the function"); //1.
// let data = tryingPromises(); //2./ new Promise(resolve,reject)
// console.log("After calling the function"); //this was the 4th line that got completed
// console.log("data received", data);
// data.then((res) => {
//   console.log(res);
// });
// // data.catch((err)=>{
// //     console.log(err);
// // })
// console.log("End Of Code");

// //?Example - 1
// // const functionOne = () => {
// //   return "I am function One";
// // };

// // const functionTwo = () => {
// //   // return new Promise((res,rej)=>{
// //   setTimeout(() => {
// //     return "I am function Two";
// //   }, 3000);
// //   // })
// // };

// // const functionThree = () => {
// //   return "I am function Three";
// // };

// // const callAllFunctions = () => {
// //   let responseOne = functionOne();
// //   console.log(responseOne);

// //   let responseTwo = functionTwo();
// //   console.log(responseTwo);

// //   let responseThree = functionThree();
// //   console.log(responseThree);
// // };

// // callAllFunctions();

// //?Example - 2

// const functionOne = () => {
//   return "I am function One";
// };

// const functionTwo = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("I am function Two");
//     }, 3000);
//   });
// };

// const functionThree = () => {
//   return "I am function Three";
// };

// const callAllFunctions = async () => {
//   let responseOne = functionOne();
//   console.log(responseOne);

//   let responseTwo = await functionTwo();
//   console.log(responseTwo);

//   let responseThree = functionThree();
//   console.log(responseThree);
// };

// callAllFunctions();

// //? Example - 3
// // const getId = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     let id = [1, 2, 3, 4, 5];
// //     resolve(id);
// //     reject("Error in fetching the details"); //either of resolve or reject is executed on the basis of data received.If received then resolve is called otherwise reject is called. Resolve hits the .then() method and the reject hits the .catch method()
// //   }, 2000);
// // });

// // const getEmpDetails = (data) => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(
// //       (data) => {
// //         let empDetails = {
// //           fName: "Ravi",
// //           lName: "Patel",
// //           age: 24,
// //         };
// //         resolve(
// //           `The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`
// //         );
// //       },
// //       2000,
// //       data
// //     );
// //   });
// // };

// // const getData = async () => {
// //   console.log("Asyncs/await call started");
// //   const id = await getId;
// //   console.log(id);

// //   const empdetails = await getEmpDetails(id[2]);
// //   console.log(empDetails);
// // };
// // getData();

//TODO: September - 2
//? Local Storage and Session Storage
// Cookies, JWT Token, Types of Errors

const submitDetails = () => {
  const response = document.getElementById("name").value;
  console.log(response);
  localStorage.setItem("name", response);
  sessionStorage.setItem("name", response);
};

const showDetails = () => {
  const data = localStorage.getItem("name");
  console.log(data);
  const data1 = sessionStorage.getItem("name");
  console.log(data1);
};

// TypeError, ReferenceError, SyntaxError
function hello() {
  console.log("Hello"; // SyntaxError
}
const a = 10; // TypeError
// a = 20;

// let nameOneOkay;
console.log(nameOneOkay); // ReferenceError


//! Immediately Invoked Function Expression (IIFE)
(() => {
    // some initiation code
    const firstVariable = 0;
    const secondVariable = 1;
    console.log("I am IIFE");
})();

const firstVariable = 1;
const secondVariable = 1;
console.log(firstVariable, secondVariable);

// Symbol
const sym1 = Symbol();
const sym2 = Symbol("Sanjeev");
const sym3 = Symbol("Sanjeev");

console.log(sym2);
console.log(sym2 === sym3);