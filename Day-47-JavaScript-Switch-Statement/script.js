// Day 47 - JavaScript Switch Statement

// Example 1 - Week Days

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// Example 2 - Calculator

let operator = "+";

let a = 20;

let b = 10;

switch (operator) {

    case "+":
        console.log("Addition:", a + b);
        break;

    case "-":
        console.log("Subtraction:", a - b);
        break;

    case "*":
        console.log("Multiplication:", a * b);
        break;

    case "/":
        console.log("Division:", a / b);
        break;

    default:
        console.log("Invalid Operator");
}

// End Message

console.log("Day 47 Completed Successfully!");