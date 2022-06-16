var fruits = ["mango", "guava", "banana", "lichi", "msadsd"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[-1]);
console.log(typeof fruits[22]);

fruits.push("sugarcane");
console.log(fruits);
var last = fruits.pop();
console.log(fruits, last);

console.log(fruits.includes("banana"));
console.log(fruits.indexOf("banana"));

console.log(fruits.find((f) => f === "banana"));
console.log(fruits.find((f) => f[0] === "m"));
console.log(fruits.filter((f) => f[0] === "m"));
console.log(fruits.map((f) => f.at(0).toUpperCase() + f.slice(1)));
console.log(
  fruits
    .filter((f) => f[0] === "m")
    .map((f) => f.at(0).toUpperCase() + f.slice(1))
);
