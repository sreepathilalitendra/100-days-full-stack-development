// Day 60 - JavaScript DOM Manipulation

// Change Text Content

function changeContent() {

    document.getElementById("heading").textContent =
    "DOM Manipulation Completed";

    document.getElementById("paragraph").textContent =
    "JavaScript changed this text successfully.";

}

// Change CSS Style

function changeStyle() {

    let heading = document.getElementById("heading");

    heading.style.color = "blue";

    heading.style.backgroundColor = "lightyellow";

    heading.style.padding = "10px";

    heading.style.borderRadius = "8px";

}

// Change Image

function changeImage() {

    document.getElementById("image").src =
    "https://via.placeholder.com/200";

}

// Add New Element

function addElement() {

    let newElement = document.createElement("p");

    newElement.textContent = "This paragraph was created using JavaScript.";

    newElement.id = "newParagraph";

    document.getElementById("container").appendChild(newElement);

}

// Remove Element

function removeElement() {

    let element = document.getElementById("newParagraph");

    if (element) {

        element.remove();

    }

}

console.log("Day 60 Completed Successfully!");