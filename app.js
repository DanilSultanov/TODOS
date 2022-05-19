const todoForm = document.querySelector("#form");
const todoInput = document.querySelector("#input");
const todoList = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const textTodo = todoInput.value.trim();

  
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.textContent = textTodo;
    todoList.appendChild(li);
   
  
  todoInput.value = "";

 
});

todoList.addEventListener('contextmenu', (event) => {
    event.target.remove(todoList)
  })

 todoList.addEventListener('click', (e) => {
    e.target.classList.toggle('completed')
  }) 


  