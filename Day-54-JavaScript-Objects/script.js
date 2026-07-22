// Day 54 - JavaScript Objects

// Creating an Object

let student = {

    name: "Rahul",

    age: 20,

    course: "Full Stack Development",

    city: "Hyderabad"

};

console.log("Student Object:");

console.log(student);

console.log("----------------");

// Accessing Object Properties

console.log("Name:", student.name);

console.log("Age:", student["age"]);

console.log("----------------");

// Updating Object Property

student.age = 21;

console.log("Updated Age:", student.age);

console.log("----------------");

// Adding New Property

student.email = "rahul@example.com";

console.log("After Adding Email:");

console.log(student);

console.log("----------------");

// Object Method

student.introduce = function () {

    return "Hello, My name is " + this.name;

};

console.log(student.introduce());

console.log("----------------");

// Object Keys

console.log("Keys:");

console.log(Object.keys(student));

console.log("----------------");

// Object Values

console.log("Values:");

console.log(Object.values(student));

console.log("----------------");

// Loop Through Object

console.log("Using for...in Loop");

for (let key in student) {

    console.log(key + " : " + student[key]);

}

console.log("----------------");

// End Message

console.log("Day 54 Completed Successfully!");