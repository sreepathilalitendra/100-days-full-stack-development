// Day 55 - JavaScript String Methods

let message = "  Welcome to CodeMonolith JavaScript Series  ";

console.log("Original String:");

console.log(message);

console.log("----------------");

// length

console.log("Length:", message.length);

// trim()

let trimmed = message.trim();

console.log("trim():", trimmed);

// toUpperCase()

console.log("toUpperCase():", trimmed.toUpperCase());

// toLowerCase()

console.log("toLowerCase():", trimmed.toLowerCase());

console.log("----------------");

// slice()

console.log("slice(0, 7):", trimmed.slice(0, 7));

// substring()

console.log("substring(11, 23):", trimmed.substring(11, 23));

console.log("----------------");

// replace()

console.log("replace():", trimmed.replace("CodeMonolith", "Full Stack"));

console.log("----------------");

// includes()

console.log("includes('JavaScript'):", trimmed.includes("JavaScript"));

// startsWith()

console.log("startsWith('Welcome'):", trimmed.startsWith("Welcome"));

// endsWith()

console.log("endsWith('Series'):", trimmed.endsWith("Series"));

console.log("----------------");

// End Message

console.log("Day 55 Completed Successfully!");