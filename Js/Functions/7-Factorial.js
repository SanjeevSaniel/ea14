// Write a function that accepts parameter n and returns factorial of n

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(5));

// Output --> 120