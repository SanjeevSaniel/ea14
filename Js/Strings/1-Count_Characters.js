/*
Count Characters

You are given a string S, and your task is to return an array B (having a size of 2), where B[0] contains the count of haracter A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.

Note: You have to complete countCharacters function. No need to take any input.
*/

const countCharacters = (S) => {
    let countOfA = 0;
    let countOfD = 0;
    for (let character of S) {
        if (character === "A") {
            countOfA++;
        } else if (character === "D") {
            countOfD++;
        }
    }
    let B = [countOfA, countOfD];
    return B;
};

console.log(countCharacters("AbaDd"));
 


