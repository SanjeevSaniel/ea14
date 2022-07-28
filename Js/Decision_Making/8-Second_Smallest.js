/*
Second Smallest

You are given 3 distinct integers X,Y, and Z, and your task is to find and return the second smallest integer among the three provided integers.

Note: You have to complete findSndSmallest function. No need to take any input.
*/

const findSndSmallest = (x, y, z) => {
  if (x != y && y != z && x != z) {
    if ((x < y && x > z) || (x > y && x < z)) {
      return x;
    } else if ((x < y && y < z) || (x > y && y > z)) {
      return y;
    } else {
      return z;
    }
  }
};
