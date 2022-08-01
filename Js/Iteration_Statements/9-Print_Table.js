/*
Print the Table

Write a program which takes a number from user and print the table.

Note: You have to complete Print_Table. No need to take any input.
*/

const Print_Table = (N) => {
  if (N >= 1) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${N} * ${i} = ${N * i}`);
    }
  }
};

Print_Table(3);
