const addBtn = document.getElementById('add-btn');
const todoList = document.querySelector('.todo-list');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const saveTodosToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const loadTodosFromLocalStorage = () => {
  todos.forEach((todo) => {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
          <span>${todo}</span>
          <button class="del-todo">Del</button>
        `;
    todoList.appendChild(todoItem);
  });
};

loadTodosFromLocalStorage();

const handleAddTodo = () => {
  const inputTodo = document.getElementById('input-todo');
  const inputTodoValue = inputTodo.value.trim();

  if (inputTodoValue === '') {
    alert('Please enter a Task!');
    return;
  }

  todos.push(inputTodoValue);
  saveTodosToLocalStorage();

  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  todoItem.innerHTML = `
    <span>${inputTodoValue}</span>
    <button class="del-todo">Del</button>
  `;

  todoList.appendChild(todoItem);
  inputTodo.value = '';
  inputTodo.focus();
};

const handleDeleteTodo = (event) => {
  const itemIndex = Array.from(todoList.children).indexOf(event.target.parentNode);
  todos.splice(itemIndex, 1);
  saveTodosToLocalStorage();
  event.target.parentNode.remove();
};

addBtn.addEventListener('click', handleAddTodo);
todoList.addEventListener('click', (event) => {
  console.log(event.target);

  if (event.target.classList.contains('del-todo')) {
    handleDeleteTodo(event);
  }
});
