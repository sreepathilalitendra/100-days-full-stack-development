// Day 64 - JavaScript ES6 Features

// let and const

let course = "JavaScript";

const platform = "CodeMonolith";

console.log("Course:", course);

console.log("Platform:", platform);

console.log("----------------");

// Template Literals

let name = "Rahul";

console.log(`Hello, ${name}! Welcome to ES6.`);

console.log("----------------");

// Default Parameters

function greet(user = "Guest") {

    console.log(`Welcome, ${user}`);

}

greet();

greet("Vamanan");

console.log("----------------");

// Spread Operator

let numbers1 = [1, 2, 3];

let numbers2 = [4, 5, 6];

let combinedNumbers = [...numbers1, ...numbers2];

console.log("Spread Operator:", combinedNumbers);

console.log("----------------");

// Rest Operator

function sum(...numbers) {

    let total = 0;

    for (let number of numbers) {

        total += number;

    }

    return total;

}

console.log("Rest Operator:", sum(10, 20, 30, 40));

console.log("----------------");

// End Message

console.log("Day 64 Completed Successfully!");