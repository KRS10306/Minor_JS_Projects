let task = document.getElementById('todo-list')


let Title = document.getElementById('todo-input-heading')
let Content = document.getElementById('todo-input-text')


function Add() {
    let T = Title.value
    let C = Content.value
    // e.preventDefault()
    localStorage.setItem(T, C)
    // console.log("fw");
    task.innerHTML += `<li><h1>${T}</h1><br> <span>${localStorage.getItem(T)}</span><button onclick="Remove(this)">Delete</button> </li>`
}

const Remove = (buttonElement) => {
    // Retrieve title and delete the corresponding localStorage item
    let listItem = buttonElement.parentElement; // Get the <li> containing the button
    let T = listItem.querySelector("h1").innerText; // Get the title from the <h1>
    
    // Remove from localStorage
    localStorage.removeItem(T);

    // Remove the <li> from the DOM
    listItem.remove();
};

function LoadTasks() {
    for (let i = 0; i < localStorage.length; i++) {
        let T = localStorage.key(i); // Get the task title (key)
        let C = localStorage.getItem(T); // Get the task content (value)

        // Add each task to the DOM
        task.innerHTML += `<li><h1>${T}</h1><br> 
            <span>${C}</span> 
            <button onclick="Remove(this)">Delete</button> 
        </li>`;
    }
}
document.addEventListener("DOMContentLoaded", LoadTasks);
