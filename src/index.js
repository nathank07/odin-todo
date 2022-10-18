import './style.css';
import { displayItems, tabView } from './javascript/visual.js';

const toDoItem = (title, description, dueDate, priority, notes, checklist) => {
    return {title, description, dueDate, priority, notes, checklist};
}
const projects = {
    "Today" : [toDoItem("a", "b", "c", "d", "e", "f"), toDoItem("a", "b", "c", "d", "e", "f"), toDoItem("a", "b", "c", "d", "e", "f")],
    "This Week" : [toDoItem("a", "b", "c", "d", "e", "f"), toDoItem("a", "b", "c", "d", "e", "f")],
    "Friday" : [toDoItem("a", "b", "c", "d", "e", "f"), toDoItem("a", "b", "c", "d", "e", "f"), toDoItem("a", "b", "c", "d", "e", "f"), toDoItem("a", "b", "c", "d", "e", "f")],
}
tabView(projects);

try{
    displayItems(Object.values(projects)[0]);
}
catch {
    console.log("you have no projects!")
}



