// Day 92 - Node.js Modules & File System

const math = require("./math");

const fs = require("fs");

// Custom Module

console.log("Addition:", math.add(20, 10));

console.log("Subtraction:", math.subtract(20, 10));

console.log("-------------------------");

// Write File

fs.writeFileSync(

    "message.txt",

    "Welcome to Node.js File System Module."

);

console.log("File created successfully.");

// Read File

const data = fs.readFileSync(

    "message.txt",

    "utf8"

);

console.log("File Content:");

console.log(data);

// Append File

fs.appendFileSync(

    "message.txt",

    "\nLearning File System Module."

);

console.log("Content appended successfully.");

console.log("-------------------------");

console.log("Day 92 Completed Successfully!");