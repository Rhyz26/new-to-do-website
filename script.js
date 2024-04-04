let addButton = document.getElementById("add-button");
let clearCompletedButton= document.getElementById ("clear-completed-button")
let emptyButton = document.getElementById("empty-button");
let saveButton = document.getElementById("save-button");
let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");


addButton.addEventListener('click', addToDoItem);
function addToDoItem(){
    alert("add button clicked");

}

clearCompletedButton.addEventListener('click', clearComplete);

function clearComplete(){
    alert("clear");
}

emptyButton.addEventListener('click', emptyTheList);
function emptyTheList(){
    alert("empty list");
}

saveButton.addEventListener("click", saveTheList);
function saveTheList(){
    alert("save the list");
}




function newToDoItem(itemText, completed) {
    let toDoItem = document.createElement("li");
    let toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}


function addToDoItem() {
    let itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}


function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}



function clearCompletedToDoItems() {
    let completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}


function emptyList() {
    let toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}




function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();