// //* What is Javascript ?
// // Reference -> //* https://www.javascripttutorial.net/what-is-javascript/

// // let b = 5;
// // // let c = ++b + b++;
// // let c = b++ + ++b;

// // console.log(c);
// // console.log(b)
// // console.log(!0 && "False");

// // return (A % 10 == 0) && (B % 10 == 0) ? true : false;

// //  August 1
// // Types of variables =
// //    Primitive and non - primitive(Array / Object)

// // Number = Integer, Float
// // Strings = "sanjeev". 'Hellow World
// // Boolean = true / false
// // undefined
// // null

// //* Syntax
// // keyword nameOfTheVariable = value    (number / string / boolean)

// /** Two types of //* Execution Context
//     1. global execution context
//     2. functional execution context

//    Two phases inside a Execution Context
//     - Creation Phase
//     - Execution Phase

// ** Link to reference -> https://www.javascripttutorial.net/javascript-execution-context/#:~:text=the%20execution%20phase.-,The%20creation%20phase,browser%20or%20global%20in%20Node.

// */

// //* let -
// // 1. we can declare the variable name in one line and initialize it on another line or in the same line itself.
// // 2. Two variables with same name aren't possible with let
// // 3. We can reassign/update the values of the variable which have already been initialized.
// // 4. let is block scoped.
// // 5. Let doesn't supports Hoisting.
// // If accessed before declaratiom, it throws ReferenceError
// // They are residing in Temporal Dead Zone (TDZ), until they are not initialized

// //* const -
// // 1. we have to declare the variable and initialize in the same line itself.
// // 2. Two variables with same name aren't possible with const.
// // 3. We can't reassign/update the values of the variable which have already been initialized.
// // 4. const is block scoped.
// // 5. const also doesn't supports Hoisting.
// // If accessed before declaratiom, it throws ReferenceError
// // They are residing in Temporal Dead Zone (TDZ), until they are not initialized

// //* var -
// // 1. we can declare the variable name in one line and initialize it on another line
// // or in the same line itself.
// // 2. Two variables with same name are possible with var
// // 3. We can reassign/update the values of the variable which have already been initialized.
// // 4. var is global scoped.
// // 5. var supports Hoisting.

// //* Reference -> https://www.javascripttutorial.net/javascript-variables/

// //* Hoisting -
// // it brings the declaration of the variables in the top of the code.Similarly for functions also
// // Hoisting means we can access the variables and functions even before declaring them.
// //* Reference - https://www.javascripttutorial.net/javascript-hoisting/

// // Undefined - when we try to access a variable that is declared but not initialized
// // ex - for var keywords

// // Not Defined - when we try to access the variable that is not declared

// //* Increment and Decrement
// // ++ = + 1;
// // -- = - 1;
// // a++ = a + 1;
// //++a = a + 1;

// // let a = 0;
// // console.log(a++);
// //0  zero is first printed and then goes for postfix operations //a = a + 1;
// //Finally value become a = 1;
// // console.log(++a);
// //   first the value will be incremented and then the value will be updated. //a = a + 1;
// //

// // let number = 5;
// // console.log(number++);

// // let c = 4;
// // console.log(c++);// 4
// // console.log(c++);// 5
// // console.log(++c);// 7
// // console.log(++c);// 8

// let d = 3,
//   e = 4;
// console.log(d++ + ++e); // 3 + 5 = 8
// console.log(d + e); // 4 + 5 = 9

// // console.log(d,e);//d=3,e=4
// console.log(d > 5 && 10); // false
// console.log(d > 5 || e < 10); // true
// console.log(!10); //always gives u o/p in true and false only

// let a = 3;
// console.log(a++ + --a); // 3 + 3 = 6
// console.log(a);

// let b;
// (b = a++), ++a;
// console.log(a);

// /*
//  if (age >= 18 && age < 60) {
// 	console.log('I am an Adult!!!');//
// } else if (age >= 60) {
// 	console.log('I am Senior Citizen');
// } else {
// 	console.log('I am still a kiddo!!');
// }

// if(age < 18){
// 	console.log("I am still a kiddo!!");
// }
// else if( age >=18 && age < 30){
// 	console.log('I am a Youngster!!!');//
// }
// else if(age >=30 && age < 60){
// 	console.log('I am an Adult!!!');
// }
// else{
// 	console.log('I am Senior Citizen');
// let value = 2;
// switch (value) {
// 	case 1:
// 		console.log('I am case 1');
// 		break;
// 	case 2:
// 		console.log('I am case 2');
// 		// break;
// 	case 3:
// 		console.log('I am case 3');
// 		break;
// 	case 4:
// 		console.log('I am case 4');
// 		// break;
// 	case 5:
// 		console.log('I am case 5');
// 		// break;
// 	default:
// 		console.log('I am case 7');
// 		break;
// }
// */

// /*
//  for loops

// for (let i = 0; i <= 10; i++) {
// 	console.log('I am ', i);
// }

//  */


