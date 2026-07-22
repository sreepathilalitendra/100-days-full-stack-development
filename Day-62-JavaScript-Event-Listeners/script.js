// Day 62 - JavaScript Event Listeners

const output = document.getElementById("output");

// Click Event

document.getElementById("clickButton").addEventListener("click", function () {

    output.textContent = "Button Clicked Successfully!";

    console.log("Click Event");

});

// Double Click Event

document.getElementById("doubleButton").addEventListener("dblclick", function () {

    output.textContent = "Button Double Clicked!";

    console.log("Double Click Event");

});

// Mouse Over Event

document.getElementById("box").addEventListener("mouseover", function () {

    output.textContent = "Mouse Entered the Box";

    console.log("Mouse Over Event");

});

// Mouse Out Event

document.getElementById("box").addEventListener("mouseout", function () {

    output.textContent = "Mouse Left the Box";

    console.log("Mouse Out Event");

});

// Key Up Event

document.getElementById("username").addEventListener("keyup", function () {

    output.textContent = "Hello, " + this.value;

    console.log("Key Up Event");

});

// DOM Content Loaded Event

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM Fully Loaded");

});

// End Message

console.log("Day 62 Completed Successfully!");