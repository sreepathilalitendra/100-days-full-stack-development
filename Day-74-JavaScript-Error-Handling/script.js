// Day 74 - JavaScript Error Handling

const button = document.getElementById("checkButton");

const output = document.getElementById("output");

button.addEventListener("click", function () {

    try {

        const age = document.getElementById("age").value;

        if (age === "") {

            throw new Error("Age is required.");

        }

        if (age < 18) {

            throw new Error("You must be at least 18 years old.");

        }

        output.textContent = "Access Granted.";

        console.log("Validation Successful");

    }

    catch (error) {

        output.textContent = error.message;

        console.log("Error:", error.message);

    }

    finally {

        console.log("Execution Completed");

    }

});

console.log("Day 74 Completed Successfully!");