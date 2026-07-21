// Day 49 - JavaScript Break and Continue

// break Statement

console.log("Break Statement");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {

        break;

    }

    console.log(i);

}

console.log("----------------");

// continue Statement

console.log("Continue Statement");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {

        continue;

    }

    console.log(i);

}

console.log("----------------");

// break Example

let number = 1;

while (number <= 10) {

    if (number === 8) {

        break;

    }

    console.log(number);

    number++;

}

console.log("----------------");

// continue Example

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {

        continue;

    }

    console.log("Odd Number:", i);

}

// End Message

console.log("Day 49 Completed Successfully!");