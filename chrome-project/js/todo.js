const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoWrap = document.querySelector(".todo-wrap")
const toDoList = document.getElementById("todo-list")

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDo -> 인자명은 아무거나 해도 상관 없음.
    saveToDos();
    
    if(toDos.length === 0){
        localStorage.removeItem(TODOS_KEY)
        toDoWrap.classList.remove("is-active");
    }
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    li.className = "todo-item";

    const span = document.createElement("span");
    span.className = "item-text"
    span.innerText = newToDo.text;
    li.appendChild(span);

    const button = document.createElement("button");
    const buttonText = document.createElement("span");
    buttonText.classList.add("blind")
    buttonText.innerText = "todo 지우기"
    button.className = "btn-close";
    button.type = "button";
    button.appendChild(buttonText);
    button.addEventListener("click",deleteTodo);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newToDo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    if(toDos.length !== 0 && !toDoWrap.classList.contains("is-active")){
        toDoWrap.classList.add("is-active");
    }

    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    toDoWrap.classList.add("is-active");
}

