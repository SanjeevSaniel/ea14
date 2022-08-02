/*
Find whether the number is present or not

Write a program which takes an array as input from the user and a number.
Check whether the number is present or not.

Note: You have to complete Find_Num. No need to take any input.
*/

const Find_Num = (array, N, M) => {
  let isPresent = false;
  for (let i = 0; i < N; i++) {
    if (array[i] === M) {
      isPresent = true;
      break;
    }
  }
  if (isPresent) {
    return "YES";
  } else {
   return "NO";
  }
};
