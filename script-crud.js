const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const formTextarea = document.querySelector('.app__form-textarea');
const taskListSection = document.querySelector('.app__section-task-list');
const btnCancelTask = document.querySelector('.app__form-footer__button--cancel');
const taskDescriptionSection = document.querySelector('.app__section-active-task-description');
const btnRemoveCompleted = document.querySelector('#btn-remover-concluidas')
const btnRemoveAll = document.querySelector('#btn-remover-todas')

let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
let taskSelected = null;
let taskElementSelected = null;

btnAddTask.addEventListener('click', () => {
    if (formAddTask.classList.contains('hidden')) {
        formAddTask.classList.remove('hidden');
    }
})

btnCancelTask.addEventListener('click', () => {
    formAddTask.classList.add('hidden');
})

formAddTask.addEventListener('submit', (event) => {
    event.preventDefault();
    createTask();
})

function updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function createTask() {
    const task = {
        description: formTextarea.value.trim(),
        completed: false
    }

    if (task.description) {
        taskList.push(task);
    }

    taskListSection.appendChild(createTaskElement(task));
    updateStorage();

    formTextarea.value = '';
    formAddTask.classList.add('hidden');
}

function createTaskElement(task) {
    const liElement = document.createElement('li');
    liElement.classList.add('app__section-task-list-item')

    const svgElement = document.createElement('svg');
    svgElement.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `;

    const pElement = document.createElement('p');
    pElement.classList.add('app__section-task-list-item-description')
    pElement.textContent = task.description;

    const btnElement = document.createElement('button');
    btnElement.classList.add('app_button-edit')
    
    const editBtn = document.createElement('img');
    editBtn.setAttribute('src', 'imagens/edit.png');

    btnElement.onclick = () => {
        const newDescription = prompt('Edit task description:', task.description).trim();
        if(newDescription) {
            task.description = newDescription;
            pElement.textContent = task.description;
            updateStorage();
        }
    }

    if(task.completed) {
        liElement.classList.add('app__section-task-list-item-complete');
        liElement.classList.remove('app__section-task-list-item-active');
        btnElement.setAttribute('disabled', 'disabled');
        taskDescriptionSection.textContent = '';
    } else {
        liElement.onclick = () => {
                document.querySelectorAll('.app__section-task-list-item-active')
                    .forEach(element => {
                        element.classList.remove('app__section-task-list-item-active');
                });
        
                if (liElement === taskElementSelected) {
                    taskSelected = null;
                    taskElementSelected = null;
                    taskDescriptionSection.textContent = '';
                    liElement.classList.remove('app__section-task-list-item-active');
                    
                    return
                }
                
                liElement.classList.add('app__section-task-list-item-active');
                taskDescriptionSection.textContent = task.description;
                taskSelected = task;
                taskElementSelected = liElement;
        
        }
    }

    btnElement.appendChild(editBtn);
    liElement.append(svgElement, pElement, btnElement);

    return liElement;
}

taskList.forEach(task => {
    taskListSection.appendChild(createTaskElement(task));
});

document.addEventListener('FocoFinalizado', () => {
    console.log('Evento FocoFinalizado disparado');

    console.log('taskSelected:', taskSelected, 'taskElementSelected:', taskElementSelected);
    
    if (taskSelected && taskElementSelected) {
        taskElementSelected.classList.add('app__section-task-list-item-complete');
        taskElementSelected.classList.remove('app__section-task-list-item-active');
        taskElementSelected.querySelector('button').setAttribute('disabled', 'disabled');
        taskDescriptionSection.textContent = '';
        
        taskSelected.completed = true;
        updateStorage();
    }
})

const removeTasks = (onlyCompleted) => {
    const selector = onlyCompleted ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
    document.querySelectorAll(selector).forEach(element => element.remove());
    taskList = onlyCompleted ? taskList.filter(task => !task.completed) : [];
     
    updateStorage();
}

btnRemoveCompleted.onclick = () => removeTasks(true);
btnRemoveAll.onclick = () => removeTasks(false);