//Definicion de variables a utilizar 

let form = document.querySelector('#form');
let input = document.querySelector('#input');
let msg = document.querySelector('#msg');
let tasks = document.querySelector('#tasks');



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

let data = [];
let acceptTask = () => {
    data.push( [input.value
    
    ]);

    createTask();
    storageData();

};

let createTask = () => {
    tasks.innerHTML = "";
    data.map ( () => {
    return (tasks.innerHTML += `
    <div>
    <p>${}</p>
    <span class="plus_buttons"> 
    <i onClick="deleteTask(this)" class="bi bi-trash3-fill"></i>
    <i onclick="editTask(this)" class="bi bi-pencil-square"></i>
    </span>
    </div> 
        `);
    }
    )}; 


let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    console.log("Una tarea fue eliminada")
};

let editTask = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    console.log("se esta editando una tarea")
};


let storageData = () =>{
    data.push();

    localStorage.setItem('data', JSON.stringify(data));

console.log('Se almaceno la tarea en localStorage')
}