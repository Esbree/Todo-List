let todos = [];

function addTodo() {
  const newTodoInput = document.getElementById('newTodo');
  const todoList = document.getElementById('todoList');

  const todoText = newTodoInput.value.trim();

  if (todoText === '') {
    alert('Please enter a valid todo');
    return;
  }

  const todoObject = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(todoObject);

  // Clear the input field
  newTodoInput.value = '';

  // Render the updated todo list
  renderTodoList();
}

function renderTodoList() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="completeTodo(${todo.id})">Complete</button>
    `;

    if (todo.completed) {
      listItem.classList.add('completed');
    }

    todoList.appendChild(listItem);
  });
}

function completeTodo(todoId) {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex !== -1) {
    todos[todoIndex].completed = true;
    renderTodoList();
  }
}

// Initial rendering
renderTodoList();
