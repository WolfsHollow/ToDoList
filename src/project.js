import {projectWrapper, projectArray, listWrapper} from './index.js';
import {addNewTaskButton} from './task.js';

export const addNewProjectButton = document.createElement('div');
addNewProjectButton.addEventListener('click', (x)=>{addProjectNav(x)});
addNewProjectButton.classList.add('addButton');
addNewProjectButton.innerText = '+';
let isFormActive = false;

export let currentProject = null;

export class Project{
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

export function addProjectNav(target){ // brings up form to create new project and creates it
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

export function createNewProject(value){ // makes new project from input and adds click event
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

export function populateProjects(projectArray){

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