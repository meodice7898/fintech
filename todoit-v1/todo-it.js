"use strict";
console.log("TodoIt");
let todoList = [];
console.log("Current todo list: ", todoList);
const todoInput = document.getElementById("todoInput");
const todoListDiv = document.getElementById("todoListContainer");
function isEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTodo();
    }
}
function addTodo() {
    if (todoInput == null) {
        console.error("The todo input is missing from the page!");
        return;
    }
    const newTodo = todoInput.value;
    if ("" !== newTodo.trim()) {
        console.log("Adding todo: ", newTodo);
        todoList.push(newTodo);
        console.log("New todo list: ", todoList);
        todoInput.value = "";
        todoList.sort();
        updateTodoList();
        filterTodoList();
    }
}
function updateTodoList() {
    console.log("Updating the rendered todo list");
    todoListDiv.innerHTML = "";
    todoListDiv.textContent = "";
    const ul = document.createElement("ul");
    ul.setAttribute("id", "todoList");
    todoListDiv.appendChild(ul);
    todoList.forEach(item => {
        const li = document.createElement("li");
        li.setAttribute("class", "todo-list-item");
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = item;
        link.addEventListener("click", (event) => {
            event.preventDefault();
            removeTodoListItem(item);
        });
        li.appendChild(link);
        ul.appendChild(li);
    });
}
function filterTodoList() {
    console.log("Filtering the rendered todo list");
    const todoListHtml = document.getElementById("todoList");
    if (todoListHtml === null) {
        console.log("Nothing to filter");
        return;
    }
    const todoListFilter = document.getElementById("todoFilter");
    const todoListFilterText = todoListFilter.value.toUpperCase();
    todoListHtml.childNodes.forEach(item => {
        let itemText = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();
            item.style.display =
                itemText.startsWith(todoListFilterText) ? "list-item" : "none";
        }
    });
}
function removeTodoListItem(itemToRemove) {
    console.log("Item to remove: ", itemToRemove);
    todoList = todoList.filter((value) => value !== itemToRemove);
    updateTodoList();
    filterTodoList();
}
