/*
Find Sum

You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).

Note: You have to complete findSum function. No need to take any input.
*/

const findSum = (n) => {
  let sum = 0;
  let i = 0;
  for (i = n; i > 0; i--) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  // return sum;
  console.log(sum);
};

findSum(6);
