// Day 67 - Template Literals & Enhanced Object Literals

// Template Literals

const firstName = "Rahul";

const course = "Full Stack Development";

console.log(`Hello ${firstName}, Welcome to ${course}!`);

console.log("----------------");

// Multi-line String

const message = `Learning JavaScript
is simple
and powerful.`;

console.log(message);

console.log("----------------");

// Expression Inside Template Literal

const a = 20;

const b = 30;

console.log(`Addition: ${a + b}`);

console.log("----------------");

// Enhanced Object Literals

const name = "Rahul";

const age = 22;

const student = {

    name,

    age,

    greet() {

        console.log(`Hello, I'm ${this.name}`);

    }

};

console.log(student);

student.greet();

console.log("----------------");

// Computed Property Name

const key = "city";

const user = {

    name: "Vamanan",

    [key]: "Hyderabad"

};

console.log(user);

console.log("----------------");

// End Message

console.log("Day 67 Completed Successfully!");