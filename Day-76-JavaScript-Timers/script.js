// Day 76 - JavaScript Timers

const output = document.getElementById("output");

let intervalId;

// setTimeout()

document.getElementById("startTimeout").addEventListener("click", () => {

    output.textContent = "Waiting for 3 seconds...";

    setTimeout(() => {

        output.textContent = "setTimeout Executed!";

        console.log("setTimeout Completed");

    }, 3000);

});

// setInterval()

document.getElementById("startInterval").addEventListener("click", () => {

    let count = 0;

    intervalId = setInterval(() => {

        count++;

        output.textContent = "Counter: " + count;

        console.log("Counter:", count);

    }, 1000);

});

// clearInterval()

document.getElementById("stopInterval").addEventListener("click", () => {

    clearInterval(intervalId);

    output.textContent = "Interval Stopped";

    console.log("Interval Cleared");

});

console.log("Day 76 Completed Successfully!");