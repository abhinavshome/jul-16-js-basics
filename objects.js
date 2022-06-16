var person = {
  name: "Abhinav",
  age: 35,
  address: {
    street: "Sarjapur Main Road",
    city: "Banglore",
  },
  hobbies: ["painting", "travelling"],
  display: function () {
    console.log(`My name is ${this.name} and I live in ${this.address.city}`);
  },
};

console.log(person.name);
console.log(person);
person.display();
