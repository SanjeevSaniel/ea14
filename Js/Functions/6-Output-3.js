// Print output

var x = 21;
a();
b();
console.log(a);
a = function () {
  x = 20;
  console.log(x);
};
b = function () {
  x = 40;
  console.log(x);
};

// Output --> a is not defined
