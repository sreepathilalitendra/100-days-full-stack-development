// Day 61 - JavaScript Events

// Click Event

function showMessage() {

    document.getElementById("output").textContent =
    "Button Clicked Successfully!";

    console.log("Click Event Triggered");

}

// Double Click Event

function doubleClickMessage() {

    document.getElementById("output").textContent =
    "Button Double Clicked!";

    console.log("Double Click Event Triggered");

}

// Mouse Over Event

function mouseOver() {

    document.getElementById("output").textContent =
    "Mouse Entered the Box";

    console.log("Mouse Over Event");

}

// Mouse Out Event

function mouseOut() {

    document.getElementById("output").textContent =
    "Mouse Left the Box";

    console.log("Mouse Out Event");

}

// Keyboard Event

function showText() {

    let name = document.getElementById("username").value;

    document.getElementById("output").textContent =
    "Hello, " + name;

    console.log("Key Up Event");

}

// End Message

console.log("Day 61 Completed Successfully!");