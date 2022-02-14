import './style.css';
import {addNewTaskDiv, addNewTask, createNewTask, Task, addNewTaskButton} from './task.js';
import {currentProject, Project, addProjectNav, createNewProject, populateProjects, addNewProjectButton} from './project.js';
import { eachDayOfIntervalWithOptions } from 'date-fns/fp';

//To do list:
// 1. be able to check items off
// 2. Make it look nice
// 3. sort by date/name (inbox/today/this week as well)
// 4. focusout create projectnav

//#region Initialize global variables, DOM stuff, and buttons; set up nav

const page = document.getElementById('content');

const title = document.createElement('div');
const contentWrapper = document.createElement('div');
const navWrapper = document.createElement('div');
export let listWrapper = document.createElement('div');
const newTaskScreen = document.getElementById('newTaskScreen');

const taskSubmitBtn = document.getElementById('taskSubmitButton');
taskSubmitBtn.addEventListener('click', (x) => {createNewTask();});

export const projectWrapper = setupNav();

//#endregion

export let projectArray = [];

page.classList.add('page');
title.classList.add('title');
contentWrapper.classList.add('contentWrapper');
navWrapper.classList.add('navWrapper');
listWrapper.classList.add('listWrapper');

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
    let JSON_ProjectArray = JSON.parse(localStorage.projectArray);
    projectArray = projectStringToObject(JSON_ProjectArray);
    // currentProject = projectArray[0];
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