import './style.css';
import createClassDiv from './project.js';
import { eachDayOfIntervalWithOptions } from 'date-fns/fp';

//To do list:
// 7. be able to check items off
// 1. resize task divs
// 6. Make it look nice
// 4. sort by date/name (inbox/today/this week as well)
// 5. focusout create projectnav
// 2. fix to do list - to do list

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
addNewProjectButton.innerText = '+';
addNewTaskButton.innerText = '+';

const projectWrapper = setupNav();

let taskID = 0;
let isInputActive = false;

//#endregion

class Task{
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

class Project{
    constructor(name){
        this.name = name;
        this.taskObjList = [];
        this.taskDivList = [];
    }

    toJSON(){
        return this;
    }

    addTaskDiv(task){
        this.taskDivList.push(task);
    }
    addTaskObj(task){
        this.taskObjList.push(task);
    }
    populateTaskDivs(){
        let list = this.taskDivList;
            
        while (listWrapper.firstChild){
            listWrapper.removeChild(listWrapper.firstChild);
        }
        for (let i=0; i< list.length; i++){
            listWrapper.appendChild(list[i]);
        }
        listWrapper.appendChild(addNewTaskButton);
    }
}
let projectArray = [];
let currentProject = null;

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
    projectArray = projectStringToObject(JSON_ProjectArray);
    currentProject = projectArray[0];
    populateProjects(projectArray);

}

function projectStringToObject(JSONArray){
    let length = JSONArray.length;
    let taskLength, taskList, htmlList, newDiv;    
    for (let i = 0; i < length; i++){
        htmlList =[];
        JSONArray[i] = Object.setPrototypeOf(JSONArray[i], Project.prototype); 
        taskList = JSONArray[i].taskObjList;
        taskLength = taskList.length;
        JSONArray[i].taskDivList = [];
        for (let j = 0; j< taskLength; j++){
            taskList[j] = Object.setPrototypeOf(taskList[j], Task.prototype);
            newDiv = addNewTaskDiv(taskList[j]);
            console.log(newDiv);
            JSONArray[i].addTaskDiv(newDiv); // repopulate taskDivList for class object  
        }       
        console.log(`the project task div list is`, JSONArray[i].taskDivList); 
    }
    return JSONArray;
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
        newProjectInput.autofocus = true;
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

    let newProjectNavDiv = document.createElement('div');
    newProjectNavDiv.innerText = value;
    newProjectNavDiv.value = 'test value';
    newProjectNavDiv.project = newProject;
    newProjectNavDiv.addEventListener('click', (e)=>{ let divProject = e.target.project;
                                                      currentProject = divProject;
                                                      divProject.populateTaskDivs();
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
                                                        currentProject.populateTaskDivs();
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