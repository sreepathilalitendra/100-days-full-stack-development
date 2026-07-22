// Day 57 - JavaScript Date and Time

// Create Current Date

let today = new Date();

console.log("Current Date:", today);

console.log("----------------");

// Get Date Information

console.log("Year:", today.getFullYear());

console.log("Month:", today.getMonth() + 1);

console.log("Date:", today.getDate());

console.log("Day:", today.getDay());

console.log("----------------");

// Get Time Information

console.log("Hours:", today.getHours());

console.log("Minutes:", today.getMinutes());

console.log("Seconds:", today.getSeconds());

console.log("----------------");

// Set Date

let customDate = new Date();

customDate.setFullYear(2030);

customDate.setDate(15);

console.log("Modified Date:", customDate);

console.log("----------------");

// Display Date in Different Formats

console.log("toDateString():", today.toDateString());

console.log("toLocaleDateString():", today.toLocaleDateString());

console.log("toLocaleTimeString():", today.toLocaleTimeString());

console.log("----------------");

// End Message

console.log("Day 57 Completed Successfully!");