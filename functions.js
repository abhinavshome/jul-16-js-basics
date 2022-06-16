function add(n1, n2) {
  return n1 + n2;
}

var sum = add(2, 9);

console.log(sum);

//anonymous functions
var diff = (n1, n2) => {
  return n1 - n2;
};

var y = diff(8, 9);
console.log(y);

var mean = (n1, n2, f) => f(n2, n1) / 2;
var m = mean(2, 7, (x1, x2) => x1 + x2);
console.log(m);
