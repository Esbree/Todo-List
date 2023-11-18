let todos = [];

function addTodo() {
  const newTodoInput = document.getElementById('newTodo');
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

  newTodoInput.value = '';

  renderTodoList();
}

function completeTodo(todoId) {
  const todo = todos.find((todo) => todo.id === todoId);

  if (todo) {
    todo.completed = true;
    renderTodoList();
    console.log(todos);
  }
}

function renderTodoList() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="completeTodo(${todo.id})" ${
      todo.completed ? 'disabled' : ''
    }>Complete</button>
    `;

    if (todo.completed) {
      listItem.classList.add('completed');
    }

    todoList.appendChild(listItem);
  });
}

// Initial rendering
renderTodoList();
