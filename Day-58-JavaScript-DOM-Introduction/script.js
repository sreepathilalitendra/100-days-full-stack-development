// Day 58 - JavaScript DOM Introduction

// Access HTML Elements

let heading = document.getElementById("heading");

let message = document.getElementById("message");

// Display Current Content

console.log("Heading:", heading.innerHTML);

console.log("Message:", message.innerHTML);

console.log("----------------");

// Function to Change Content

function changeContent() {

    heading.innerHTML = "🚀 DOM Updated Successfully";

    message.innerHTML = "JavaScript can change HTML content dynamically.";

    console.log("Content Updated!");

}

console.log("----------------");

// End Message

console.log("Day 58 Completed Successfully!");