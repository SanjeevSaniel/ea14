/*
Print Numbers

You are given an integer N, and your task is to print all the integers starting from 1 till N (N inclusive).

Note: You have to complete printNumbers function. No need to take any input.
*/


const printNumbers = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};

printNumbers(10);

