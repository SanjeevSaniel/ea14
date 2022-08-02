/*
Even Odd

You are given an array A containing N integer elements, and your task is to return an array B (having a size equal to 2), where B [0] contains the sum of all even elements of array A and B [1] has the sum of all odd elements of the array A.

Note: You have to complete findEvenOdd function. No need to take any input.
*/

const findEvenOdd = (N, Arr) => {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) {
            sumOfEven += Arr[i];
        } else {
            sumOfOdd += Arr[i];
        }
    }
    let newArray = [sumOfEven, sumOfOdd];

    return newArray;
};

findEvenOdd(7, [1, 2, 3, 4, 5, 6, 7]);
