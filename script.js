//Definicion de variables a utilizar 

let form = document.querySelector('#form');
let textInput = document.querySelector('#input');
let msg = document.querySelector('#msg');
let tasks = document.querySelector('#tasks');

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
        acceptTask();

    }
};

let taskToDo = [{}];

let acceptTask = () => {
    taskToDo.push({
        text: textInput.value,
    });

    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
    console.log(taskToDo);
    // storageTask();
    addTask();
};

let addTask = () => {
    tasks.innerHTML = "";
    taskToDo.map((x, y) => {
        return (tasks.innerHTML += `
    <div id=${y}>
          <p>${x.text}</p>
          <span class="options">
            <i onClick= "editTask(this)" class="bi bi-pencil-square"></i>
            <i onClick ="deleteTask(this);addTask()" class="bi bi-trash3-fill"></i>
          </span>
        </div>
    `);
    });
    input.value = "";
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    taskToDo.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
    console.log("Una tarea fue eliminada")
};

let editTask = (e) => {
    let taskToEdit = e.parentElement.parentElement;
    input.value = taskToEdit.children[0].innerHTML;
    deleteTask(e);
    console.log("se esta editando una tarea")
};


//let storageTask = () => {

//    localStorage.setItem("taskToDo", JSON.stringify(taskToDo));
//}

(() => {
    taskToDo = JSON.parse(localStorage.getItem("taskToDo")) || []
    console.log(taskToDo)
    addTask();
})();
/*
let getTask = () => {
    let savedTask = localStorage.getItem('taskToDo');

  if (savedTask) {
        taskToDo = JSON.parse(savedTask);
        showTask();
    } 
    
} */

/*let showTask = () => {
    tasks.innerHTML = '';
    taskToDo.forEach(task => {
        tasks.innerHTML += `
        <div>
        <p>${task}</p>
        <span class="plus_buttons"> 
        <i onClick="deleteTask(this)" class="bi bi-trash3-fill"></i>
        <i onclick="editTask(this)" class="bi bi-pencil-square"></i>
        </span>
        </div> 
        `;
    });
}

window.addEventListener('load', showTask)*/




/*
let acceptAddTask = () => {

    let task = input.value;
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
    storageTask();
};  */