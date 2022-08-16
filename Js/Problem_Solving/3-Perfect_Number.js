/*
Perfect Number Check.
Have you heard of Perfect numbers? If not let me tell you what is it, Perfect Numbers are integers that are equal to the sum of all its divisors except that number itself.

Now, You are given an integer N, write a program to check whether the given number is a Perfect Number or not.

Note: You have to complete Perfect _Check function. No need to take any input.
*/

var Perfect_Check = (N) => {
  let result = 0;
  for (let divisor = 0; divisor < N; divisor++) {
    if (N % divisor === 0) {
      result += divisor;
    }
  }
  return result === N ? "YES" : "NO";
};

console.log(Perfect_Check(6));
