/*
Reverse a Number.

Write a program which takes a number N as input from the user and You need to reverse the number.
Note: You have to complete Reverse_Number function. No need to take any input.
*/

var Reverse_Number = (N) => {
  let lastDigit = 0;
  let reverse = 0;
  while (N != 0) {
    lastDigit = N % 10;
    reverse = reverse * 10 + lastDigit;
    N = Math.floor(N / 10);
  }
  return reverse;
};

console.log(Reverse_Number(1900));
