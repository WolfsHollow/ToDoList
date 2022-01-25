import './style.css';
import createClassDiv from './project.js';
import { eachDayOfIntervalWithOptions } from 'date-fns/fp';

//To do list:
// *******5. Local storage
// 1. resize task divs
// 2. add a remove task button
// 3. make tasks editable 
// 4. sort by date/name (inbox/today/this week as well)
// 6. Make it look nice
// 7. be able to check items off

//#region Initialize global variables, DOM stuff, and buttons; set up nav

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

//#endregion

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

// local storage check
if (localStorage.length == 0){
    // load as normal
    console.log('aint nothing here chief');
    createNewProject('default');
}
else {
    // localStorage.clear();

    let JSON_ProjectArray = JSON.parse(localStorage.projectArray);
    console.log(JSON_ProjectArray);
    projectArray = projectStringToObject(JSON_ProjectArray);
    console.log(projectArray);
    populateProjects(projectArray);
}

function projectStringToObject(JSONArray){
    let length = JSONArray.length;

    for (let i = 0; i < length; i++){
        JSONArray[i] = Object.setPrototypeOf(JSONArray[i],Project);    
        console.log(JSONArray[i].name);
        console.log(JSONArray[i].taskDivList);
    }
    return JSONArray;
}

function clearLocalStorage(){
    console.log(localStorage);
    localStorage.setItem('bgcolor', 'red');
    localStorage.setItem('font', 'Helvetica');
    localStorage.setItem('image', 'miGato.png');
    console.log(localStorage);
    localStorage.clear();
    console.log(localStorage);
}

function setupNav(){ // sets up navigation panel on the left and adds AddNew buttons
    
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

function addNewTaskDiv(classObject){ // creates div for task defined by input
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

function addNewTask(){ // brings up form to create new task
    let classTask = newTaskScreen.classList;
    if (classTask.contains('show')){  
      newTaskScreen.classList.remove('show');
    }
    else {newTaskScreen.classList.add('show');}
}
  
function addProjectNav(target){ // brings up form to create new project and creates it
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

function createNewProject(value){ // makes new project from input and adds click event
    let newProject = new Project(value);
    // if (projectArray == ''){
    //     currentProject = newProject;
    // }

    currentProject = newProject;

    projectArray.push(newProject);
    localStorage.setItem('projectArray', JSON.stringify(projectArray));
    console.log('added to storage');
    console.log(localStorage.projectArray);

    let newProjectNavDiv = document.createElement('div');
    newProjectNavDiv.innerText = value;
    newProjectNavDiv.value = 'test value';
    newProjectNavDiv.project = newProject;
    newProjectNavDiv.addEventListener('click', (e)=>{ let divProject = e.target.project;
                                                      currentProject = divProject;
                                                      divProject.populateTasks();
                                                      });
    newProjectNavDiv.classList.add('navProjectDiv');
    projectWrapper.removeChild(addNewProjectButton);
    projectWrapper.appendChild(newProjectNavDiv);
    projectWrapper.appendChild(addNewProjectButton);
}

function populateProjects(projectArray){

    let projLength = projectArray.length;

    for (let i = 0; i < projLength; i++){
        let newProjectNavDiv = document.createElement('div');

        newProjectNavDiv.innerText = projectArray[i].name
        newProjectNavDiv.value = 'test value';
        newProjectNavDiv.project = projectArray[i];
        newProjectNavDiv.addEventListener('click', (e)=>{  
                                                        let divProject = e.target.project;
                                                        currentProject = divProject;
                                                        console.log(currentProject);
                                                        // currentProject.populateTasks();
                                                        });
        newProjectNavDiv.classList.add('navProjectDiv');
        projectWrapper.removeChild(addNewProjectButton);
        projectWrapper.appendChild(newProjectNavDiv);
        projectWrapper.appendChild(addNewProjectButton);
    }
    
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