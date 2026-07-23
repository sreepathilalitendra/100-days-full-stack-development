// Day 71 - JavaScript Fetch API

const button = document.getElementById("loadButton");

const userList = document.getElementById("userList");

button.addEventListener("click", loadUsers);

async function loadUsers() {

    userList.innerHTML = "<li>Loading...</li>";

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        userList.innerHTML = "";

        users.forEach(function(user) {

            const li = document.createElement("li");

            li.textContent = `${user.name} - ${user.email}`;

            userList.appendChild(li);

        });

        console.log(users);

    }

    catch(error) {

        userList.innerHTML = "<li>Failed to load data.</li>";

        console.log(error);

    }

}

console.log("Day 71 Completed Successfully!");