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

addBtn.addEventListener('click', handleAddTodo);

// 1. Xem và thực hành lại nếu chưa hiểu
// 2. Nếu vẫn không hiểu, xem lại điều 1