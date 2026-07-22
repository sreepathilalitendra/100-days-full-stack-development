// Day 53 - JavaScript Array Methods

let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

console.log("----------------");

// push()

fruits.push("Orange");

console.log("After push():", fruits);

// pop()

fruits.pop();

console.log("After pop():", fruits);

// unshift()

fruits.unshift("Grapes");

console.log("After unshift():", fruits);

// shift()

fruits.shift();

console.log("After shift():", fruits);

console.log("----------------");

// slice()

let newArray = fruits.slice(0, 2);

console.log("slice():", newArray);

// splice()

fruits.splice(1, 1, "Pineapple");

console.log("splice():", fruits);

console.log("----------------");

// concat()

let colors = ["Red", "Blue"];

let result = fruits.concat(colors);

console.log("concat():", result);

console.log("----------------");

// includes()

console.log("includes('Mango'):", fruits.includes("Mango"));

// indexOf()

console.log("indexOf('Banana'):", fruits.indexOf("Banana"));

console.log("----------------");

// reverse()

console.log("reverse():", [...fruits].reverse());

// sort()

let numbers = [45, 10, 5, 80, 25];

numbers.sort((a, b) => a - b);

console.log("sort():", numbers);

console.log("----------------");

// End Message

console.log("Day 53 Completed Successfully!");