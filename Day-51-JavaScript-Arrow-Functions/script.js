// Day 51 - JavaScript Arrow Functions

// Basic Arrow Function

const welcome = () => {

    console.log("Welcome to Arrow Functions.");

};

welcome();

console.log("----------------");

// Arrow Function with One Parameter

const greet = name => {

    console.log("Hello,", name);

};

greet("CodeMonolith");

console.log("----------------");

// Arrow Function with Multiple Parameters

const add = (a, b) => {

    return a + b;

};

console.log("Addition:", add(20, 30));

console.log("----------------");

// Arrow Function with Implicit Return

const square = number => number * number;

console.log("Square:", square(8));

console.log("----------------");

// Arrow Function as Callback

const numbers = [10, 20, 30, 40, 50];

numbers.forEach(number => {

    console.log(number);

});

console.log("----------------");

// End Message

console.log("Day 51 Completed Successfully!");