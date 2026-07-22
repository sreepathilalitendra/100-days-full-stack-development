// Day 59 - JavaScript DOM Selectors

function selectElements() {

    // getElementById()

    let heading = document.getElementById("heading");

    console.log("ID Selector:");

    console.log(heading.innerHTML);

    console.log("----------------");

    // getElementsByClassName()

    let classElements = document.getElementsByClassName("text");

    console.log("Class Selector:");

    for (let element of classElements) {

        console.log(element.innerHTML);

    }

    console.log("----------------");

    // getElementsByTagName()

    let headings = document.getElementsByTagName("h2");

    console.log("Tag Selector:");

    for (let item of headings) {

        console.log(item.innerHTML);

    }

    console.log("----------------");

    // querySelector()

    let firstParagraph = document.querySelector(".text");

    console.log("querySelector():");

    console.log(firstParagraph.innerHTML);

    console.log("----------------");

    // querySelectorAll()

    let allParagraphs = document.querySelectorAll(".text");

    console.log("querySelectorAll():");

    allParagraphs.forEach(function(item){

        console.log(item.innerHTML);

    });

    console.log("----------------");

    console.log("Day 59 Completed Successfully!");

}