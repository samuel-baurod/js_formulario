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
    // template strings o backticks sirven para poner codigo html en js
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">´${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;

    list.appendChild(task);
    console.log(content);

}

console.log(btn);

// Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);
