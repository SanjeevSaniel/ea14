/*
Check whether the triangle is Acute or Obtuse
Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

Note: You have to complete Triangle_Check. No need to take any input
*/

const Triangle_Check = (A, B, C) => {
  if (0 <= A <= 180 && 0 <= B <= 180 && 0 <= C <= 180) {
    if (A < 90 && B < 90 && C < 90) {
      if (A + B + C === 180) {
        return "acute";
      }
    } else if (90 < A <= 180 || 90 < B <= 180 || 90 < C <= 180) {
      return "obtuse";
    }
  }
};

Triangle_Check(60, 100, 20);
