// Day 50 - JavaScript Functions

// Function Declaration

function welcome() {

    console.log("Welcome to JavaScript Functions.");

}

welcome();

console.log("----------------");

// Function with Parameters

function add(a, b) {

    console.log("Addition:", a + b);

}

add(20, 10);

console.log("----------------");

// Function with Return Value

function multiply(a, b) {

    return a * b;

}

let result = multiply(5, 8);

console.log("Multiplication:", result);

console.log("----------------");

// Function Expression

const greet = function(name) {

    console.log("Hello,", name);

};

greet("CodeMonolith");

console.log("----------------");

// Function to Find Square

function square(number) {

    return number * number;

}

console.log("Square:", square(6));

console.log("----------------");

// End Message

console.log("Day 50 Completed Successfully!");