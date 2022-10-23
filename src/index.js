import './style.css';
import { displayItems, tabView } from './javascript/visual.js';
import storageAvailable from './javascript/storageAvailable.js';
import toDoItem from './javascript/toDoItem.js';


let projects = [
    ["My Project", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
    ["My Project 2", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
    ["My Project 3", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
    ["My Project 4", [toDoItem("Project 1", "b", "c", "d", "e"), toDoItem("Project 2", "b", "c", "d", "e"), toDoItem("Project 3", "b", "c", "d", "e")]],
]

if(storageAvailable('localStorage')){
    if(localStorage.getItem('projects')) {
        projects = JSON.parse(localStorage.getItem('projects'));
    } 
    else{
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}

tabView(projects);
displayItems(projects[0]);

export default projects;







