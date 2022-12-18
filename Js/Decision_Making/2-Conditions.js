/*
Check whether the condition is fulfilled or not?
Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.

Note: You have to complete Check_divisibility. No need to take any input
*/

const Check_divisibility = (N) => {
  console.log(
    N % 6 === 0 && N % 9 === 0 ? "Divisible by both" : "Not Divisible by both"
  );
};
