// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`My name is ${this.name} and age is ${this.age}`);
  }
}

var p = new Person("Abhinav", 23);
p.city = "Banglore";
console.log(p);
console.log(p.name);
console.log(p.constructor);

var o = { x: 1 };
console.log(o);
console.log(o.constructor);

var arr = [2, 3, 4];
console.log(arr);
console.log(arr.constructor);

p.display();
