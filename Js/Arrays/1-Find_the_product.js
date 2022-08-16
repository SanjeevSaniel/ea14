/*
Find the Product.

Write a program that takes an array as input from the user and find out the product of the elements.

Note: You have to complete Find_Prod. No need to take any input.
*/

const Find_Prod = (array, N) => {
  let result = 1;
  for (let i = 0; i < N; i++) {
    result *= array[i];
  }
  return result;
};

// const Find_Product = (array) => {
//   const product = array.reduce((acc, value) => {
//     acc = acc * value;
//     return acc;
//   }, 1);
//   return product;
// };

// console.log(Find_Product([1, 2, 3, 4, 5]));
