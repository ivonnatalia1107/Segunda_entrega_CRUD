let form = document.getElementById("form");
let textInput = document.getElementById("input");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Se hizo click en el formulario");
    formValidation();
});

let formValidation = () => {
    if (textInput.value === "") {
        console.log("El suario no agrego ninguna tarea");
        msg.innerHTML = "Debes agregar la menos una tarea";
    } else {
        console.log("se ha agregado una tarea");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = [{}];

let acceptData = () => {
    data.push({
        text: textInput.value,

    });

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
    createTasks();
};

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
    <div id=${y}>
          <p>${x.text}</p>
          <span class="options">
            <i onClick= "editTask(this)" class="bi bi-pencil-square"></i>
            <i onClick ="deleteTask(this);createTasks()" class="bi bi-trash3-fill"></i>
          </span>
        </div>
    `);
    });

    resetForm();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);

};

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;

    deleteTask(e);
};

let resetForm = () => {
    textInput.value = "";

};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
    createTasks();
})();