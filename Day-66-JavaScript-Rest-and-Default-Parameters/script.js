// Day 66 - JavaScript Rest & Default Parameters

// Default Parameters

function greet(name = "Guest") {

    console.log("Welcome " + name);

}

greet();

greet("Rahul");

console.log("----------------");

// Rest Parameters

function addNumbers(...numbers) {

    let sum = 0;

    for (let number of numbers) {

        sum += number;

    }

    return sum;

}

console.log("Total:", addNumbers(10, 20, 30));

console.log("Total:", addNumbers(5, 10, 15, 20, 25));

console.log("----------------");

// Combining Normal & Rest Parameters

function student(course, ...students) {

    console.log("Course:", course);

    console.log("Students:");

    for (let name of students) {

        console.log(name);

    }

}

student("JavaScript", "Rahul", "Sai", "Kiran", "Ajay");

console.log("----------------");

// Rest Parameter with Arrow Function

const multiply = (...numbers) => {

    let result = 1;

    for (let number of numbers) {

        result *= number;

    }

    return result;

};

console.log("Multiplication:", multiply(2, 3, 4));

console.log("----------------");

// End Message

console.log("Day 66 Completed Successfully!");