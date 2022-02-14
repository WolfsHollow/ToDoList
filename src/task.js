import {listWrapper, projectArray} from './index.js';
import {currentProject, Project} from './project.js';

const newTaskName = document.getElementById('name');
const newTaskDescription = document.getElementById('description');
const newTaskDate = document.getElementById('date');
const newTaskNotes = document.getElementById('notes');
const newTaskPriority = document.getElementById('priority');
let isInputActive = false;

export const addNewTaskButton = document.createElement('div');

addNewTaskButton.classList.add('addButton');
addNewTaskButton.addEventListener('click', (x) => {addNewTask(x)});
addNewTaskButton.innerText = '+';

let taskID = 0;

export class Task{
    constructor(name, description, dueDate, notes, priority, taskID){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
        this.div = null;
        this.taskID = taskID;
    }

    toJSON(){
        return this;
    }

    get projectNode(){
        return this.projectNodeDiv;
    }
    set projectNode(projectNodeDiv){
        this.projectNodeDiv = projectNodeDiv; 
    }
}

export function addNewTaskDiv(classObject){ // creates div for task defined by input
    let newDivWrapper = document.createElement('div');
    let nameDiv = document.createElement('div');
    let descriptionDiv = document.createElement('div');
    let dueDateDiv = document.createElement('div');
    let priorityDiv = document.createElement('div');
    let selectBtn = document.createElement('input');
    let deleteBtn = document.createElement('input');

    nameDiv.textContent = classObject.name;
    descriptionDiv.textContent = classObject.description;
    dueDateDiv.textContent = classObject.dueDate;
    priorityDiv.style.backgroundColor = getPriorityColor(classObject.priority);
    selectBtn.setAttribute('type', 'checkbox');
    selectBtn.onclick = toggleStrikethrough;
    deleteBtn.setAttribute('type', 'checkbox');
    deleteBtn.onclick = deleteTask;

    nameDiv.addEventListener('click', editDivValue);
    descriptionDiv.addEventListener('click', editDivValue);
    dueDateDiv.addEventListener('click', editDivValue);
    priorityDiv.addEventListener('click', editDivValue);
    
    selectBtn.classList.add('selectButton');
    deleteBtn.classList.add('selectButton');
    newDivWrapper.classList.add('divWrapper');
    nameDiv.classList.add('nameDiv');
    descriptionDiv.classList.add('descriptionDiv');
    dueDateDiv.classList.add('dueDateDiv');
    priorityDiv.classList.add('priorityDiv');
 
    newDivWrapper.append(priorityDiv);
    newDivWrapper.append(selectBtn);
    newDivWrapper.append(nameDiv);
    newDivWrapper.append(descriptionDiv);
    newDivWrapper.append(dueDateDiv);
    newDivWrapper.append(deleteBtn);
  
    classObject.projectNode = newDivWrapper;

    return newDivWrapper;
}

function editDivValue(e){
    if (!isInputActive){
        let currentText = e.target.innerText;
        let newInput = document.createElement('input');
        let taskList = currentProject.taskObjList;
        let divClass = e.target.classList[0];

        if (divClass == 'dueDateDiv'){
            newInput.setAttribute('type','date');
        }
        else{
            newInput.setAttribute('type', 'text');
        }
        let taskDivList = currentProject.taskDivList;
        let parent = e.target.parentElement;
        let index = currentProject.taskDivList.indexOf(parent);
        newInput.autofocus = true;
        newInput.classList.add('divInput');
        newInput.addEventListener('focusout', (event)=>{
                e.target.innerText = event.target.value;
                console.log(divClass);
                switch (divClass){
                    case 'nameDiv':
                        taskList[index].name = event.target.value;
                        break;
                    case 'priorityDiv':
                        taskList[index].priority = event.target.value;
                        break;
                    case 'descriptionDiv':
                        taskList[index].description = event.target.value;
                        break;
                    case 'dueDateDiv':
                        taskList[index].dueDate = event.target.value;
                        break;
                    case 'notesDiv':
                        taskList[index].notes = event.target.value;
                        break;
                }  
                localStorage.setItem('projectArray', JSON.stringify(projectArray));
                isInputActive = false;
                });
        e.target.innerText = '';
        e.target.appendChild(newInput);
        isInputActive = true;
        newInput.value = currentText;    
    }
}

function toggleStrikethrough(){
    console.log('strike');
}

function deleteTask(e){
    let parent = e.target.parentElement;
    parent.parentElement.removeChild(parent);
    let taskList = currentProject.taskObjList;
    let taskDivList = currentProject.taskDivList;
    
    let index = currentProject.taskDivList.indexOf(parent);
    
    if (index == -1){
        console.log('it broke. the div being removed is not in the project');
    }
    taskList.splice(index,1);
    taskDivList.splice(index,1);
    localStorage.setItem('projectArray', JSON.stringify(projectArray));
}

function getPriorityColor(priority){ //returns stripe color for priority
    switch(priority){
        case 'Neutral':
            return 'white';
        case 'Low':
            return 'green';
        case 'Medium':
            return 'yellow';
        case 'High':
            return 'red';
    }
}

export function addNewTask(){ // brings up form to create new task
    let classTask = newTaskScreen.classList;
    if (classTask.contains('show')){  
      newTaskScreen.classList.remove('show');
    }
    else {newTaskScreen.classList.add('show');}
}

export function createNewTask(){ 
    let newTask = new Task(newTaskName.value, 
                            newTaskDescription.value,
                            newTaskDate.value,
                            newTaskNotes.value,
                            newTaskPriority.value,
                            taskID);
    let newDiv = addNewTaskDiv(newTask);
    taskID += 1;
    newTask.div = newDiv.outerHTML;
    newTaskScreen.classList.remove('show');
    currentProject.addTaskObj(newTask);
    currentProject.addTaskDiv(newDiv); 
    localStorage.setItem('projectArray', JSON.stringify(projectArray));
    listWrapper.appendChild(newDiv);
    listWrapper.removeChild(addNewTaskButton);
    listWrapper.appendChild(addNewTaskButton);
}