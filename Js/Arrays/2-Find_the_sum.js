/*
Find the Sum.

Write a program which takes an array as input from the user and find out the sum of the array elements.

Note: You have to complete Find_Sum. No need to take any input.
*/

const Find_Sum = (array, N) => {
    let result = 0;
    for (let i = 0; i < N; i++) {
      result += array[i];
    }
    return result;
};
