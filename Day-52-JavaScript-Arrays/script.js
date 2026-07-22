// Day 52 - JavaScript Arrays

// Creating an Array

let courses = ["HTML", "CSS", "JavaScript", "React"];

console.log("Courses:", courses);

console.log("----------------");

// Accessing Array Elements

console.log("First Course:", courses[0]);

console.log("Second Course:", courses[1]);

console.log("Last Course:", courses[courses.length - 1]);

console.log("----------------");

// Updating an Element

courses[2] = "Node.js";

console.log("Updated Courses:", courses);

console.log("----------------");

// Array Length

console.log("Total Courses:", courses.length);

console.log("----------------");

// Loop Through an Array

console.log("Using for Loop");

for (let i = 0; i < courses.length; i++) {

    console.log(courses[i]);

}

console.log("----------------");

// Using for...of Loop

console.log("Using for...of Loop");

for (let course of courses) {

    console.log(course);

}

console.log("----------------");

// End Message

console.log("Day 52 Completed Successfully!");