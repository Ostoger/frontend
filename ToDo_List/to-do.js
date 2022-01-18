if (localStorage.getItem("todo")) {
    let taskList = document.getElementById("task-list");
    taskList.innerHTML = localStorage.getItem("todo");
}

const addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", addTask);

const removeTask = document.querySelectorAll("#delete-btn");
removeTask.addEventListener("click", toLocal);

function addTask() {
    let inputText = document.querySelector("#input-task");

    let taskList = document.getElementById("task-list");

    let listTag = document.createElement("li")
    let inputTag = document.createElement("input");

    let spanTag = document.createElement("span");
    spanTag.setAttribute("class", "task");

    let buttonTag = document.createElement("button");

    inputTag.setAttribute("type", "checkbox");
    inputTag.setAttribute("name", "checkbox");

    spanTag.insertAdjacentHTML("afterbegin", inputText.value);

    buttonTag.setAttribute("type", "button");
    buttonTag.setAttribute("class", "delete-btn")
    buttonTag.innerHTML += 'х';

    buttonTag.setAttribute("onclick", "this.parentNode.remove(); toLocal();")

    listTag.appendChild(inputTag);
    listTag.appendChild(spanTag);
    listTag.appendChild(buttonTag);

    taskList.appendChild(listTag);
    toLocal();
}

function toLocal() {
    let taskList = document.getElementById("task-list");
    let toDo = taskList.innerHTML;
    localStorage.setItem("todo", toDo);
}
