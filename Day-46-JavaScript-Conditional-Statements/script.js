// Day 46 - JavaScript Conditional Statements

// if Statement

let age = 20;

if (age >= 18) {

    console.log("You are eligible to vote.");

}

// if...else Statement

let marks = 45;

if (marks >= 35) {

    console.log("Result: Pass");

} else {

    console.log("Result: Fail");

}

// else if Statement

let score = 82;

if (score >= 90) {

    console.log("Grade: A+");

} else if (score >= 75) {

    console.log("Grade: A");

} else if (score >= 60) {

    console.log("Grade: B");

} else if (score >= 35) {

    console.log("Grade: C");

} else {

    console.log("Grade: Fail");

}

// Nested if Statement

let username = "admin";
let password = "1234";

if (username === "admin") {

    if (password === "1234") {

        console.log("Login Successful");

    } else {

        console.log("Incorrect Password");

    }

} else {

    console.log("Invalid Username");

}

// End Message

console.log("Day 46 Completed Successfully!");