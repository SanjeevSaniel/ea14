/*
Check whether a Number is a prime or not.

Write a program which takes  a number from user and check whether number is prime number or not a prime number.

Note: You have to complete Prime_Check. No need to take any input.
*/

const Prime_Check = (N) => {
  if (N === 1) {
    return "NO";
  } else if (N === 2) {
      return "YES";
  } else {
      if (N % 2 !== 0 && N % 3 !== 0) {
          return "YES";
      }
      return "NO";
  }
};

Prime_Check(9);
