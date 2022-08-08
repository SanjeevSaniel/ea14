/*
Print the Pattern.

Write a program which ask user for no of lines and print a pattern using an asterik .
Note: You have to complete Print_pattern. No need to take any input.
*/

const Print_pattern = (N) => {
  for (let row = 1; row <= N; row++) {
    // console.log("*".repeat(index));
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
};

Print_pattern(5);
