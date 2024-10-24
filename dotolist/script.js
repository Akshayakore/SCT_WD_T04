let tasks = [];

function addTask() {
    const title = document.getElementById('taskTitle').value;
    const dateTime = document.getElementById('taskDateTime').value;
    if (title && dateTime) {
        tasks.push({ title, dateTime, completed: false });
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
            <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.title} - ${task.dateTime}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTitle = prompt('Edit Task Title:', tasks[index].title);
    const newDateTime = prompt('Edit Task DateTime:', tasks[index].dateTime);
    if (newTitle && newDateTime) {
        tasks[index].title = newTitle;
        tasks[index].dateTime = newDateTime;
        renderTasks();
    }
}

renderTasks();
