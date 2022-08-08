// Print output:
var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
}

// Output -->
// Undefined
// 21
