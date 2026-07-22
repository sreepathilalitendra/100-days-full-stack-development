// Day 63 - JavaScript Form Validation

const form = document.getElementById("myForm");

const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let password = document.getElementById("password").value.trim();

    if (name === "") {

        message.textContent = "Name is required.";

        return;

    }

    if (email === "") {

        message.textContent = "Email is required.";

        return;

    }

    if (!email.includes("@")) {

        message.textContent = "Enter a valid email.";

        return;

    }

    if (password.length < 6) {

        message.textContent = "Password must contain at least 6 characters.";

        return;

    }

    message.textContent = "Form Submitted Successfully!";

    console.log("Form Validation Successful");

});

console.log("Day 63 Completed Successfully!");