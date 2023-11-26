let tasks = [
{
    id: 1,
    text: "Task 1",
    dueDate: "02-12-2023",
    category: "personal",
    completed: false,
},
{
    id: 2,
    text: "Task 2",
    dueDate: "07-12-2023",
    category: "work",
    completed: false,
},
{
    id: 3,
    text: "Task 3",
    dueDate: "28-11-2023",
    category: "shopping",
    completed: false,
},
];

displayTasks(tasks);

function displayTasks(tasks) {
const taskList = document.querySelector("#task-list");
taskList.innerHTML = ""; // Clear existing tasks

tasks.forEach((task) => {
    const li = document.createElement("li");
    li.draggable = true;
    li.classList.add("task");
    if (task.completed) {
    li.classList.add("completed");
    }
    li.dataset.id = task.id;
    li.dataset.category = task.category;
    li.innerHTML = `${task.text}  &emsp; &emsp; ${task.dueDate}  &emsp;  &emsp;${task.category}  &emsp; &emsp;
<button id='delbutton' onclick="deleteTask(this)">Delete</button>`;

    taskList.appendChild(li);
});

// Add drag-and-drop functionality
addDragAndDrop();
}

function addTask() {
const newTaskText = document.getElementById("new-task-text").value;
const newTaskDueDate =
    document.getElementById("new-task-due-date").value;
const newTaskCategory =
    document.getElementById("new-task-category").value;

if (newTaskText.trim() === "") {
    alert("Please enter a task.");
    return;
}

const newTask = {
    id: tasks.length + 1,
    text: newTaskText,
    dueDate: newTaskDueDate,
    category: newTaskCategory,
    completed: false,
};

tasks.push(newTask);
displayTasks(tasks);

}
function completeTask(taskId) {
const taskIndex = tasks.findIndex((task) => task.id === taskId);
tasks[taskIndex].completed = !tasks[taskIndex].completed;
displayTasks(tasks);
}

function addDragAndDrop() {
const tasksElements = document.querySelectorAll(".task");

tasksElements.forEach((taskElement) => {
    taskElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.dataset.id);
    });
});

const taskList = document.getElementById("task-list");

taskList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggedTaskId = e.dataTransfer.getData("text/plain");
    const draggedTask = document.querySelector(
    `[data-id='${draggedTaskId}']`,
    );
    const overTask = e.target.closest(".task");

    if (overTask && overTask !== draggedTask) {
    taskList.insertBefore(draggedTask, overTask);
    updateTaskOrder();
    }
});
}

function updateTaskOrder() {
const taskList = document.getElementById("task-list");
const updatedTasks = [];

taskList.childNodes.forEach((task, index) => {
    const taskId = parseInt(task.dataset.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    updatedTasks.push({ ...tasks[taskIndex] });
});

tasks = updatedTasks;
displayTasks(tasks);
}

function allowDrop(event) {
event.preventDefault();
}

function drop(event) {
event.preventDefault();
}

function filterTasks(category) {
const filteredTasks =
    category === "all"
    ? tasks
    : tasks.filter((task) => task.category === category);
displayTasks(filteredTasks);
}
function deleteTask(button) {
    const listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
function clearTasks() {
tasks = [];
displayTasks(tasks);
}