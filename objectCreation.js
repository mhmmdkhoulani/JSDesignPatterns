//Create object using object literal
const person = {
  name: "John",
  age: 30,
};

//Create object using Object create
const person2 = Object.create({
  name: "John",
  age: 30,
});

//Create object using Object new keyword
const person3 = new Object({
  name: "John",
  age: 30,
});

//Adding properties to an object
//1- Using dot notation
person3.name = "John";
person3.age = 30;

//2- Using bracket notation
person3["name"] = "John";
person3["age"] = 30;
