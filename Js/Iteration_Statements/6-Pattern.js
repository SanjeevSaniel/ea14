/*
Print the Pattern.

Write a program which ask user for no of lines and print a pattern using an asterik .
Note: You have to complete Print_pattern. No need to take any input.
*/

const Print_pattern = (N) => {
  for (let index = 1; index <= N; index++) {
    console.log("*".repeat(index));
  }
};

Print_pattern(5);
