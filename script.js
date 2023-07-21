//Definicion de variables a utilizar 

let form = document.querySelector('#form');
let textInput = document.querySelector('#input');
let textitle = document.querySelector('#title')
let msg = document.querySelector('#msg');
let tasks = document.querySelector('#tasks');

//añadir un evento cuando el formulario de envie 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Se hizo click en el formulario");
    taskValidation();
});

// validacion del ingreso de los datos en el input 

let taskValidation = () => {
    if (textInput.value === "" || textitle.value === "") {
        console.log("El suario no agrego ninguna tarea");
        msg.innerHTML = "Debes rellenar ambos campos";
    } else {
        console.log("se ha agregado una tarea");
        msg.innerHTML = "";
        acceptTask();
    }
};

// recoger los datos aceptados previamente  

let taskToDo = [{}]; //almacenar objetos dentro de un arreglo 

let acceptTask = () => {
    taskToDo.push({
        text: textitle.value,
        description: textInput.value,
    });

    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
    console.log(taskToDo);
    addTask();
};

// agregar los datos recolectados a un template y darle una posición para poder invocarlos //hacer que el formulario vuelva a blanco 

let addTask = () => {
    tasks.innerHTML = "";
    taskToDo.map((x, y) => {
        return (tasks.innerHTML += `
    <div class="task_box" id=${y}>
          <h2>${x.text}</h2>
          <p>${x.description}</p>
          <span class="options">
            <i onClick= "editTask(this);toTop()"  class="bi bi-pencil-square"></i>
            <i onClick ="deleteTask(this);addTask()" class="bi bi-trash3-fill"></i>
          </span>
    </div>
    `);
    });
    textInput.value = "";
    textitle.value = "";
}

// eliminar un elemento

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    taskToDo.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
    console.log("taskToDo")
};

// editar tarea, eliminar la antigua, desplegar la nueva 

let editTask = (e) => {
    let taskToEdit = e.parentElement.parentElement;
    textitle.value = taskToEdit.children[0].innerHTML;
    textInput.value = taskToEdit.children[1].innerHTML;
    deleteTask(e);
    console.log("se esta editando una tarea")
};

function toTop() {
    window.scrollTo(0, 0)
}

(() => {
    taskToDo = JSON.parse(localStorage.getItem("taskToDo")) || []
    console.log(taskToDo)
    addTask();
})();
