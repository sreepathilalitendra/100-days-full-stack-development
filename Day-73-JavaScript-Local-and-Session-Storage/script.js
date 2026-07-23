// Day 73 - Local Storage & Session Storage

const input = document.getElementById("username");

const output = document.getElementById("output");

// Save to Local Storage

document.getElementById("saveLocal").addEventListener("click", () => {

    localStorage.setItem("username", input.value);

    output.textContent = "Saved to Local Storage";

});

// Get from Local Storage

document.getElementById("getLocal").addEventListener("click", () => {

    const value = localStorage.getItem("username");

    output.textContent = "Local Storage: " + value;

});

// Remove Local Storage

document.getElementById("removeLocal").addEventListener("click", () => {

    localStorage.removeItem("username");

    output.textContent = "Local Storage Removed";

});

// Save to Session Storage

document.getElementById("saveSession").addEventListener("click", () => {

    sessionStorage.setItem("username", input.value);

    output.textContent = "Saved to Session Storage";

});

// Get from Session Storage

document.getElementById("getSession").addEventListener("click", () => {

    const value = sessionStorage.getItem("username");

    output.textContent = "Session Storage: " + value;

});

// Clear Both Storages

document.getElementById("clearStorage").addEventListener("click", () => {

    localStorage.clear();

    sessionStorage.clear();

    output.textContent = "All Storage Cleared";

});

console.log("Day 73 Completed Successfully!");