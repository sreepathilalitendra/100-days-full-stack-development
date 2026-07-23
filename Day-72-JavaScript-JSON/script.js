// Day 72 - JavaScript JSON

const output = document.getElementById("output");

document.getElementById("convertButton").addEventListener("click", function () {

    // JavaScript Object

    const student = {

        name: "Rahul",

        age: 21,

        course: "Full Stack Development",

        city: "Hyderabad"

    };

    console.log("JavaScript Object:");

    console.log(student);

    console.log("----------------");

    // Object to JSON

    const jsonData = JSON.stringify(student);

    console.log("JSON String:");

    console.log(jsonData);

    console.log("----------------");

    // JSON to Object

    const objectData = JSON.parse(jsonData);

    console.log("Converted Object:");

    console.log(objectData);

    console.log("----------------");

    // JSON Array

    const students = [

        {

            name: "Rahul",

            course: "HTML"

        },

        {

            name: "Sai",

            course: "CSS"

        },

        {

            name: "Ajay",

            course: "JavaScript"

        }

    ];

    output.textContent = JSON.stringify(students, null, 4);

    console.log(students);

});

console.log("Day 72 Completed Successfully!");