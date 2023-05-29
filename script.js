( () => { 

    const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    // se crea la variable task con el elemento li de html
    const task = document.createElement("li");
    //se agrega la clase card a task 
    task.classList.add("card");
    //limpia el valor del input cuando se le de clic en agregar
    input.value = "";

    // se crea el elemento div en la variable taskContent
    const taskContent = document.createElement("div");
   

    const titleTask = document.createElement("span");
    // se le agrega la clase que tiene el elemento span, en este caso su clase es task
    titleTask.classList.add("task");
    // se le agrega a titleTask el texto con innertext con el valor de value
    titleTask.innerText = value;

    // se le agrega al elemento padre (taskContent) su respectivo elemento hijo, la función (checkComplete())
    taskContent.appendChild(checkComplete());
    // se le agrega al elemento padre (taskContent) su respectivo elemento hijo (titleTask)
    taskContent.appendChild(titleTask);

    // template strings o backticks sirven para poner codigo html en js
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
};

// Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);

// => funcion flecha
const checkComplete = () => {
    const i = document.createElement("i");
    //clases del elemento i, separadas por comas
    i.classList.add("far","fa-check-square","icon");
    // se agrega al elemento i el addeventlistener, 1er parametro es tipo del elemento ; 2do parametro la funcion que se ejecutara cuando usuario de click
    i.addEventListener("click",completeTask);
    return i;
}

// Inmediately invoked function expression IIFE son funciones que en cuanto se declaran
// se ejecutan
const completeTask = (event) => {
    const element = event.target;
    // toggle, verifica si existe o no la clase, si existe se pone, sino no se pone
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

}) ();