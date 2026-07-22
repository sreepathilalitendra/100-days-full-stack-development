// Day 65 - JavaScript Destructuring & Spread

// Array Destructuring

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);

console.log(second);

console.log(third);

console.log("----------------");

// Object Destructuring

const student = {

    name: "Rahul",

    age: 21,

    course: "JavaScript"

};

const { name, age, course } = student;

console.log(name);

console.log(age);

console.log(course);

console.log("----------------");

// Spread Operator

const numbers1 = [1, 2, 3];

const numbers2 = [...numbers1, 4, 5];

console.log(numbers2);

console.log("----------------");

// Copy Object

const user = {

    username: "admin",

    role: "Developer"

};

const newUser = {

    ...user,

    city: "Hyderabad"

};

console.log(newUser);

console.log("----------------");

// End Message

console.log("Day 65 Completed Successfully!");