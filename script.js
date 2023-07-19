//Definicion de variables a utilizar 

let form = document.querySelector('#form');
let input = document.querySelector('#input');
let msg = document.querySelector('#msg');
let tasks = document.querySelector('#tasks');
let taskToDo = {
    text: ""
};
let tasksToDo = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Se hizo click en el formulario");

    dataValidation();
});

let dataValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Debes agregar la menos una tarea";
        console.log("El suario no agrego ninguna tarea");
    } else {
        console.log("se ha agregado una tarea");
        msg.innerHTML = "";
        acceptTask();
    }
};

let acceptTask = () => {
    ;
    taskToDo["text"] = input.value
    console.log(taskToDo);

    createTask();

    /*
    tasksToDo.push({taskToDo})
    localStorage.setItem("tasksToDo", JSON.stringify(tasksToDo));
    console.log(tasksToDo);
    tasksToDo = JSON.parse(localStorage.getItem("tasksToDo")) || [];
    console.log(tasksToDo); */

};

let createTask = () => {
    tasks.innerHTML += `
    <div>
    <p>${taskToDo.text}</p>
    <span class="plus_buttons"> 
    <i onClick="deleteTask(this)" class="bi bi-trash3-fill"></i>
    <i onclick="editTask(this)" class="bi bi-pencil-square"></i>
    </span>
    </div> 
    `;
    input.value = "";
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






