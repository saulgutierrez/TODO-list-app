// Select elements in the DOM
const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('#itemList');
// Fetch all of them
const filters = document.querySelectorAll('.nav-item');

// Create an empty item list
let todoItems = [];

// Get items from localStorage
const getLocalStorage = function() {
    const todoStorage = localStorage.getItem("todoItems");
    if (todoStorage === "undefined" || todoStorage === null) {
        todoItems = [];
    }
    else {
        todoItems = JSON.parse(todoStorage);
    }

    console.log("items", todoItems);
}

// Set in LocalStorage
const setLocalStorage = function(todoItems) {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const itemName = itemInput.value.trim();
        if(itemName.length === 0) {
            alert('Please enter a task');
        }
        else {
            const itemObj = {
                name: itemName,
                isDone: false,
                addedAt: new Date().getTime()
            };
            todoItems.push(itemObj);
            setLocalStorage(todoItems);
        }
    });
    getLocalStorage();
});