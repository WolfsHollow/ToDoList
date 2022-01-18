import './style.css';
import createClassDiv from './project.js';
import { eachDayOfIntervalWithOptions } from 'date-fns/fp';

const page = document.getElementById('content');

const title = document.createElement('div');
const contentWrapper = document.createElement('div');
const navWrapper = document.createElement('div');
const listWrapper = document.createElement('div');
const newTaskScreen = document.getElementById('newTaskScreen');

const taskSubmitBtn = document.getElementById('taskSubmitButton');
taskSubmitBtn.addEventListener('click', (x) => {createNewTask()});

const newTaskName = document.getElementById('name');
const newTaskDescription = document.getElementById('description');
const newTaskDate = document.getElementById('date');
const newTaskNotes = document.getElementById('notes');
const newTaskPriority = document.getElementById('priority');
const addNewProjectButton = document.createElement('div');
let isFormActive = false;
const addNewTaskButton = document.createElement('div');

const projectWrapper = setupNav();

const dummyDiv = document.createElement('div');

class Task{
    constructor(name, description, dueDate, notes, priority){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
    }

    get projectNode(){
        return this.projectNodeDiv;
    }
    set projectNode(projectNodeDiv){
        this.projectNodeDiv = projectNodeDiv; 
    }
}

class Project{
    constructor(name){
        this.name = name;
        this.taskDivList = [];
    }

    addTask(task){
        this.taskDivList.push(task);
    }
    populateTasks(){
        let list = this.taskDivList
        
        while (listWrapper.firstChild){
            listWrapper.removeChild(listWrapper.firstChild);
        }

        for (let i=0; i< list.length; i++){
            listWrapper.appendChild(list[i]);
        }
        listWrapper.appendChild(addNewTaskButton);
    }
    getTaskList(){
        return this.taskDivList;
    }
}
let projectArray = [];
let currentProject = [];

createNewProject('default');
createNewProject('default2');
console.log(projectArray);

function dummyTaskList(){
    let newTask = new Task('default', 'this is a description', '02/22/22', 'notes', 'high');
    let newTask2 = new Task('default2', 'this is a description', '02/22/23', 'notes', 'high');
    let newDiv = addNewTaskDiv(newTask);
    projectArray[0].addTask(newDiv);
    newDiv = addNewTaskDiv(newTask2);
    projectArray[0].addTask(newDiv);
    projectArray[0].populateTasks();
}

function dummyTaskList2(){
    let newTask = new Task('d', 'this is a description', '01/1/11', 'notes', 'high');
    let newTask2 = new Task('d2', 'this is a description', '02/22/23', 'notes', 'high');
    let newDiv = addNewTaskDiv(newTask);
    projectArray[1].addTask(newDiv);
    newDiv = addNewTaskDiv(newTask2);
    projectArray[1].addTask(newDiv);
    projectArray[1].populateTasks();
}

dummyTaskList();
dummyTaskList2();

page.classList.add('page');
title.classList.add('title');
contentWrapper.classList.add('contentWrapper');
navWrapper.classList.add('navWrapper');
listWrapper.classList.add('listWrapper');

addNewProjectButton.classList.add('addButton');
addNewProjectButton.addEventListener('click', (x)=>{addProjectNav(x)});
addNewTaskButton.classList.add('addButton');
addNewTaskButton.addEventListener('click', (x) => {addNewTask(x)});

page.append(newTaskScreen, title, contentWrapper);
contentWrapper.append(navWrapper, listWrapper);

title.textContent = 'To Do List';

function setupNav(){
    
    const navButtonsWrapper = document.createElement('div');
        const inbox = document.createElement('div');
        const today = document.createElement('div');
        const week = document.createElement('div');   
    const projectWrapper = document.createElement('div'); 

    navButtonsWrapper.classList.add('navButtonsWrapper');
    inbox.classList.add('navButton');
    inbox.addEventListener('click', ()=>{changePage(inbox)});
    today.classList.add('navButton');
    today.addEventListener('click', ()=>{changePage(today)});
    week.classList.add('navButton');
    week.addEventListener('click', ()=>{changePage(week)});

    projectWrapper.classList.add('projectWrapper');

    navWrapper.appendChild(navButtonsWrapper);
    navWrapper.appendChild(projectWrapper);

    navButtonsWrapper.appendChild(inbox);
    navButtonsWrapper.appendChild(today);
    navButtonsWrapper.appendChild(week);

    inbox.textContent = 'Inbox';
    today.textContent = 'Today';
    week.textContent = 'This Week';

    projectWrapper.textContent = 'Projects';

    projectWrapper.appendChild(addNewProjectButton);  
    listWrapper.appendChild(addNewTaskButton);
    
    return projectWrapper;
}

function changePage(node){
    console.log('hello this works');
}

function addNewTaskDiv(classObject){
    let newDivWrapper = document.createElement('div');
    let nameDiv = document.createElement('div');
    let descriptionDiv = document.createElement('div');
    let dueDateDiv = document.createElement('div');
    let priorityDiv = document.createElement('div');

    nameDiv.textContent = classObject.name;
    descriptionDiv.textContent = classObject.description;
    dueDateDiv.textContent = classObject.dueDate;
    priorityDiv.textContent = classObject.priority;

    newDivWrapper.classList.add('divWrapper');
    nameDiv.classList.add('nameDiv');
    descriptionDiv.classList.add('descriptionDiv');
    dueDateDiv.classList.add('dueDateDiv');
    priorityDiv.classList.add('priorityDiv');
 
    newDivWrapper.append(nameDiv);
    newDivWrapper.append(descriptionDiv);
    newDivWrapper.append(dueDateDiv);
    newDivWrapper.append(priorityDiv);
  
    classObject.projectNode = newDivWrapper;

    return newDivWrapper;
}

function addNewTask(){
    let classTask = newTaskScreen.classList;
    if (classTask.contains('show')){  
      newTaskScreen.classList.remove('show');
    }
    else {newTaskScreen.classList.add('show');}
}
  
function addProjectNav(target){
    if (isFormActive == false){
        isFormActive = true;
        let newProjectForm = document.createElement('form');
        let newProjectInput = document.createElement('input');
        newProjectForm.onsubmit = () => {createNewProject(newProjectInput.value);
                                        projectWrapper.removeChild(newProjectForm);
                                        projectWrapper.removeChild(addNewProjectButton);
                                        projectWrapper.appendChild(addNewProjectButton);
                                        isFormActive = false;
                                        return false};
        projectWrapper.appendChild(newProjectForm);
        newProjectForm.appendChild(newProjectInput);
    }    
}

function createNewProject(value){
    let newProject = new Project(value);
    if (projectArray == ''){
        currentProject = newProject;
    }
    projectArray.push(newProject);
    let newProjectNavDiv = document.createElement('div');
    newProjectNavDiv.innerText = value;
    newProjectNavDiv.value = 'test value';
    newProjectNavDiv.project = newProject;
    newProjectNavDiv.addEventListener('click', (e)=>{ let divProject = e.target.project;
                                                      currentProject = divProject;
                                                      divProject.populateTasks();
                                                      });
    newProjectNavDiv.classList.add('navProjectDiv');
    projectWrapper.appendChild(newProjectNavDiv);
}

function createNewTask(){
    let newTask = new Task(newTaskName.value, 
                                newTaskDescription.value,
                                newTaskDate.value,

                                newTaskNotes.value,
                                newTaskPriority.value);
    let newDiv = addNewTaskDiv(newTask)
    newTaskScreen.classList.remove('show');
    console.log(currentProject);
    currentProject.addTask(newDiv);
    listWrapper.appendChild(newDiv);
    listWrapper.removeChild(addNewTaskButton);
    listWrapper.appendChild(addNewTaskButton);
}