//Definicion de variables a utilizar 

let form = document.querySelector('#form');
let input = document.querySelector('#input');
let msg = document.querySelector('#msg');
let tasks = document.querySelector('#tasks');
let taskList =document.querySelector('p');

let taskToDo = []


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Se hizo click en el formulario");

    taskValidation();
});

let taskValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Debes agregar la menos una tarea";
        console.log("El suario no agrego ninguna tarea");
    } else {
        console.log("se ha agregado una tarea");
        msg.innerHTML = "";
        acceptAddTask();

    }
};

let acceptAddTask = () => {
    
    const task = input.value
    taskToDo.push(task);
    console.log(task);
    tasks.innerHTML += `
    <div>
    <p>${task}</p>
    <span class="plus_buttons"> 
    <i onClick="deleteTask(this)" class="bi bi-trash3-fill"></i>
    <i onclick="editTask(this)" class="bi bi-pencil-square"></i>
    </span>
    </div> 
    `;
    input.value = "";
    storagetask();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    console.log("Una tarea fue eliminada")
};

let editTask = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    console.log("se esta editando una tarea")
};


let storagetask = () =>{

    localStorage.setItem('taskAdded', JSON.stringify(taskToDo));

console.log('Se almaceno la tarea en localStorage')
}

let getTask = () => {
    let savedTask = localStorage.getItem('taskToDo');
    if (savedTask) {
        taskToDo = JSON.parse(taskToDo)
    }
    
}

window.addEventListener('load', getTask)

