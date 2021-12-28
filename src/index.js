import './style.css';
import createClassDiv from './project.js';
import { eachDayOfIntervalWithOptions } from 'date-fns/fp';

const page = document.getElementById('content');

const title = document.createElement('div');
const contentWrapper = document.createElement('div');
const navWrapper = document.createElement('div');
const listWrapper = document.createElement('div');

page.classList.add('page');
title.classList.add('title');
contentWrapper.classList.add('contentWrapper');
navWrapper.classList.add('navWrapper');
listWrapper.classList.add('listWrapper');

page.appendChild(title);
page.appendChild(contentWrapper);
contentWrapper.append(navWrapper);
contentWrapper.append(listWrapper);

title.textContent = 'To Do List';

class Project{
    constructor(name, description, dueDate, priority){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get projectNode(){
        return this.projectNodeDiv;
    }
    set projectNode(projectNodeDiv){
        this.projectNodeDiv = projectNodeDiv; 
    }
}

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

    const defaultProject = new Project('Default', 'Default Project', null,null);
    const nextProject = new Project('nextProj', `it's the next project`, null, null);
    
    let projectArray = [defaultProject];    
    defaultProject.projectNode = createClassDiv(defaultProject);
    nextProject.projectNode = createClassDiv(nextProject);
    listWrapper.appendChild(defaultProject.projectNode);
    listWrapper.appendChild(nextProject.projectNode);

    const defaultDiv = document.createElement('div');
    defaultDiv.classList.add('navButton');
    defaultDiv.textContent = 'Default';
    defaultDiv.addEventListener('click', ()=>{changePage(defaultDiv)});
    
    projectWrapper.appendChild(defaultDiv);
}

setupNav();

function changePage(node){
    console.log('hello this works');
}