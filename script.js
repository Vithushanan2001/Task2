document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskText = todoInput.value;

        if (taskText === '') return;

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(taskText));

        const deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('Delete'));
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);

        todoInput.value = '';
    }
});
