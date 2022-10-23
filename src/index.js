import './style.css';
import { displayItems, tabView } from './javascript/visual.js';
import storageAvailable from './javascript/storageAvailable.js';

const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}

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

console.log(projects);





let test = JSON.stringify(projects);
let test2 = JSON.parse(test);

tabView(projects);
displayItems(projects[0]);

export default projects;







