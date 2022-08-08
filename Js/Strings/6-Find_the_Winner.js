/*
Find the Winner

You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish.

You need to find out the that which player wins the maximum number of games or there is a draw between them.

Note: You have to complete Game_Winner function. No need to take any input.
*/

var Game_Winner = (S) => {
  let countOfA = 0;
  let countOfD = 0;
  for (let letter of S) {
    if (letter === "A") {
      countOfA++;
    } else {
      countOfD++;
    }
  }

  if (countOfA > countOfD) {
    return "Aditya";
  } else if (countOfA < countOfD) {
    return "Danish";
  } else {
    return "Draw";
  }
};

console.log(Game_Winner("ADDAAADDDDD"));
