console.log("TodoIt");

let todoList: string[] = [];
console.log("Current todo list: ", todoList);

const todoInput: HTMLInputElement =
    document.getElementById("todoInput") as HTMLInputElement;
const todoListDiv: HTMLDivElement =
    document.getElementById("todoListContainer") as HTMLDivElement;

function isEnter(event: KeyboardEvent): void {
    if (event.key === "Enter") {
        event.preventDefault();
        addTodo();
    }
}

function addTodo(): void {
    if (todoInput == null) {
        console.error("The todo input is missing from the page!");
        return;
    }

    const newTodo: string = todoInput.value;
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

function updateTodoList(): void {
    console.log("Updating the rendered todo list");
    todoListDiv.innerHTML = "";
    todoListDiv.textContent = "";

    const ul: HTMLUListElement = document.createElement("ul");
    ul.setAttribute("id", "todoList");
    todoListDiv.appendChild(ul);

    todoList.forEach(item => {
        const li: HTMLLIElement = document.createElement("li");
        li.setAttribute("class", "todo-list-item");

        const link: HTMLAnchorElement = document.createElement("a");
        link.href = "#";
        link.textContent = item;
        link.addEventListener("click", (event: MouseEvent) => {
            event.preventDefault();
            removeTodoListItem(item);
        });

        li.appendChild(link);
        ul.appendChild(li);
    });
}

function filterTodoList(): void {
    console.log("Filtering the rendered todo list");
    const todoListHtml: HTMLUListElement =
        document.getElementById("todoList") as HTMLUListElement;

    if (todoListHtml === null) {
        console.log("Nothing to filter");
        return;
    }

    const todoListFilter: HTMLInputElement =
        document.getElementById("todoFilter") as HTMLInputElement;
    const todoListFilterText: string = todoListFilter.value.toUpperCase();

    todoListHtml.childNodes.forEach(item => {
        let itemText: string | null = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();
            (item as HTMLLIElement).style.display =
                itemText.startsWith(todoListFilterText) ? "list-item" : "none";
        }
    });
}

function removeTodoListItem(itemToRemove: string): void {
    console.log("Item to remove: ", itemToRemove);
    todoList = todoList.filter((value: string) => value !== itemToRemove);
    updateTodoList();
    filterTodoList();
}
