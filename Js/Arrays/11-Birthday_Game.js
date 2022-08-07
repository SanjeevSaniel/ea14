/*
* Birthday Game

Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i].

She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month M and the sum of the integers on the squares is equal to his birthday D. 

You must determine how many ways she can divide the chocolate.
*/

// TODO: Not passing all test cases.
// function Birthday_Game(arr, D, M) {
//   let numberOfWays = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//     for (let j = i + 1; j < M + i && j < arr.length; j++) {
//       sum += arr[j];

//       if (sum === D) {
//         numberOfWays++;
//       }
//     }
//   }

//   return numberOfWays;
// }

function Birthday_Game(arr, D, M) {
  let numberOfWays = 0; // store the total number of ways
  let numberOfSquares = arr.length; // length of the segment
  for (let i = 0; i < numberOfSquares; i++) {
    let sum = 0; // sum of the integer on the squares
    if (i + M > numberOfSquares) {
      // sum of current index and M should be < length of the segment
      return numberOfWays;
    }
    for (let j = 0; j < M; j++) {
      sum += arr[i + j];
    }
    if (sum === D) {
      numberOfWays++;
    }
  }
  return numberOfWays;
}

console.log(Birthday_Game([2, 2, 1, 3, 2], 4, 2));
