// Day 69 - JavaScript Promises

const output = document.getElementById("output");

document.getElementById("startButton").addEventListener("click", function () {

    output.textContent = "Loading...";

    const promise = new Promise(function (resolve, reject) {

        let success = true;

        setTimeout(function () {

            if (success) {

                resolve("Data Loaded Successfully!");

            } else {

                reject("Failed to Load Data!");

            }

        }, 2000);

    });

    promise

        .then(function (result) {

            output.textContent = result;

            console.log(result);

        })

        .catch(function (error) {

            output.textContent = error;

            console.log(error);

        })

        .finally(function () {

            console.log("Promise Execution Finished");

        });

});

console.log("Day 69 Completed Successfully!");