const taskInput = document.querySelector('.taskInput input'),
    filters = document.querySelectorAll('.filters span'),
    clearBtn = document.querySelector('.clearBtn'),
    taskBox = document.querySelector('.taskBox');

let todos = JSON.parse(localStorage.getItem('todoList'));
console.log(todos);

let editId;
let isEditedTask = false;

taskInput.addEventListener('keyup', (e) => {
    let userTask = taskInput.value.trim();
    if (e.key == 'Enter' && userTask) {
        console.log(userTask);
        
        if (!isEditedTask) {

            console.log(todos);
            
            
            if (!todos) {
                todos = [];
            }

            console.log(todos);
            taskInput.value = '';
            let taskInfo = { name: userTask, status: "pending" };
            todos.push(taskInfo);
        }
        else {
            isEditedTask = false;
            todos[editId].name = userTask;
        }
        localStorage.setItem('todoList', JSON.stringify(todos));
        showTodo('all');
    }
})

showTodo('all');

function showTodo(filter) {
    let li = ``;
    if (todos) {
        todos.forEach((todo, id) => {

            let isCompleted = todo.status == "completed" ? 'checked' : '';

            if (filter == todo.status || filter == 'all') {
                li += `<li class="task">
                         <label for="${id}">
                             <input type="checkbox" onclick="updateStatus(this)" id="${id}" ${isCompleted}>
                             <p class='${isCompleted}'>${todo.name}</p>
                         </label>
                         <div class="settings">
                             <i class="uil uil-ellipsis-h" onclick='showMenu(this)'></i>
                             <ul class="taskMenu">
                                 <li onclick='editTask(${id},"${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                                 <li onclick='deleteTask(${id})'><i class="uil uil-trash"></i>Delete</li>
                             </ul>
                         </div>
                    </li>`;
            }

            // console.log(id, todo);
        });
    }
    li == ''? clearBtn.classList.remove('active'):clearBtn.classList.add('active');
    taskBox.innerHTML = li || `<span> You don't have any task here </span>`;
}

function updateStatus(selectedTask) {
    console.log(selectedTask.id);
    let taskName = selectedTask.nextElementSibling;
    // console.log(taskName);
    if (selectedTask.checked) {
        taskName.classList.add('checked');
        todos[selectedTask.id].status = 'completed';
    }
    else {
        taskName.classList.remove('checked');
        todos[selectedTask.id].status = 'pending';
    }
    localStorage.setItem('todoList', JSON.stringify(todos));
}


function showMenu(selectedTask) {
    let taskMenu = selectedTask.nextElementSibling;
    taskMenu.classList.add('show');

    document.addEventListener('click', (e) => {
        if (e.target.tagName != 'I' || e.target != selectedTask) {
            taskMenu.classList.remove('show');
        }
    })
}


function deleteTask(deleteId) {
    // console.log(deleteId);
    todos.splice(deleteId, 1);
    localStorage.setItem('todoList', JSON.stringify(todos));

    showTodo('all');
}


function editTask(taskId, taskName) {
    // console.log(taskId,taskName);
    editId = taskId;
    isEditedTask = true;
    taskInput.value = taskName;

}

filters.forEach((btn) => {
    btn.addEventListener('click', () => {

        document.querySelector('span.active').classList.remove('active');
        
        btn.classList.add('active');

        showTodo(btn.id);
    })
})


clearBtn.addEventListener('click', () => {
    todos.splice(0, todos.length);
    localStorage.setItem('todoList', JSON.stringify(todos));
    showTodo('all');
})




