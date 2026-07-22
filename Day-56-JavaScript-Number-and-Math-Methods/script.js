// Day 56 - JavaScript Number and Math Methods

// Number()

let value = "100";

console.log("Number():", Number(value));

console.log("----------------");

// parseInt()

let integer = "250px";

console.log("parseInt():", parseInt(integer));

console.log("----------------");

// parseFloat()

let decimal = "99.99kg";

console.log("parseFloat():", parseFloat(decimal));

console.log("----------------");

// toFixed()

let price = 123.456789;

console.log("toFixed(2):", price.toFixed(2));

console.log("----------------");

// Math.round()

console.log("Math.round(4.6):", Math.round(4.6));

// Math.ceil()

console.log("Math.ceil(4.2):", Math.ceil(4.2));

// Math.floor()

console.log("Math.floor(4.8):", Math.floor(4.8));

console.log("----------------");

// Math.random()

console.log("Random Number:", Math.random());

console.log("Random Number (1-10):", Math.floor(Math.random() * 10) + 1);

console.log("----------------");

// Math.max()

console.log("Maximum:", Math.max(12, 45, 67, 89, 34));

// Math.min()

console.log("Minimum:", Math.min(12, 45, 67, 89, 34));

console.log("----------------");

// End Message

console.log("Day 56 Completed Successfully!");