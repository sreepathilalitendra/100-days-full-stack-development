// Day 78 - JavaScript To-Do List

const taskInput = document.getElementById("taskInput");

const addTask = document.getElementById("addTask");

const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {

        alert("Please enter a task.");

        return;

    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <span class="delete">❌</span>
    `;

    li.querySelector(".delete").addEventListener("click", function () {

        li.remove();

    });

    taskList.appendChild(li);

    taskInput.value = "";

});

console.log("Day 78 Completed Successfully!");