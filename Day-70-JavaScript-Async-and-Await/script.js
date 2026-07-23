// Day 70 - JavaScript Async & Await

const output = document.getElementById("output");

function fetchData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {

                resolve("Data Loaded Successfully!");

            } else {

                reject("Failed to Load Data!");

            }

        }, 2000);

    });

}

async function loadData() {

    output.textContent = "Loading...";

    try {

        const result = await fetchData();

        output.textContent = result;

        console.log(result);

    } catch (error) {

        output.textContent = error;

        console.log(error);

    } finally {

        console.log("Async Operation Completed");

    }

}

document.getElementById("loadButton").addEventListener("click", loadData);

console.log("Day 70 Completed Successfully!");