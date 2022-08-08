/*
Find Length

You are given a string S, and your task is to return the length of the string S.

Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.
*/

const findLength = (S) => {
  let count = 0;
  for (let letter of S) {
    count++;
  }
  return count;
};
