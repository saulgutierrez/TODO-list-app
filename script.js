// Select elements in the DOM
const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('#itemList');
// Fetch all of them
const filters = document.querySelectorAll('.nav-item');

// Create an empty item list
let todoItems = [];

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
            }
        }
    })
})