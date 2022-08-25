// 1.
function counter() {
  var counter = 0;

  function IncreaseCounter() {
    return (counter += 1);
  }

  return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
// Output - 1 2 3 4

// 2.
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
// Output -  1 0

// 3.
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
// Output - 3 3 3

// 4. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
const rectangle = (length) => {
  br = function (breadth) {
    console.log(length * breadth);
  };
};

rectangle(4);
br(2);
// Output - 8

// 5. Take a variable in outer function and create an inner function to increase the counter every time it is called
const outer = () => {
  let n = 0;
  inner = function () {
    return n++;
  };
  return inner;
};

const result = outer();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
// Output - 0 1 2 3

// 6. Print Output
var a = 12;
(function () {
  alert(a);
})(); // 12

// 7.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x(); // 12

// 8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = "a";

  (function innerFunc(innerArg) {
    var innerVar = "b";

    console.log(
      "outerArg = " +
        outerArg +
        "\n" +
        "innerArg = " +
        innerArg +
        "\n" +
        "outerVar = " +
        outerVar +
        "\n" +
        "innerVar = " +
        innerVar +
        "\n" +
        "globalVar = " +
        globalVar
    );
  })(456);
})(123);
/*
Output :
    outerArg = 123
    innerArg = 456
    outerVar = a
    innerVar = b
    globalVar = xyz
*/
