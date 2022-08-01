/*
Print the Odds.

Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

Note: You have to complete Print_Odd. No need to take any input.
*/

const Print_Odd = (N) => {
    let index;
    for (index = 2; index <= N; index++) {
        if (index === 2 || index % 2 !== 0) {
            console.log(index);
        }
    }
};

Print_Odd(10);
