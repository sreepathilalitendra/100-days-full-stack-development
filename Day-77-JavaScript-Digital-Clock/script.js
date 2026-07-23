// Day 77 - JavaScript Digital Clock

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");

    let minutes = String(now.getMinutes()).padStart(2, "0");

    let seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;

}

updateClock();

setInterval(updateClock, 1000);

console.log("Day 77 Completed Successfully!");