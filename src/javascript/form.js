import projects from "../index.js";
import add from "./add.js";
import keyInArray from "./keyInArray.js";
import toDoItem from "./toDoItem";
import {reset} from "./visual";

const body = document.querySelector('html');

export default function addForms(project) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    //overlay.addEventListener('click', () => {close()});
    const form = document.createElement('div');
    form.classList.add('form');
    
    const row = document.createElement('div');
    row.classList.add('row');
        let title = createFormBox("title", "text")
        row.appendChild(title);
        let description = createFormBox("description", "text")
        row.appendChild(description);
    const row2 = document.createElement('div');
    row2.classList.add('row');
        let date = createFormBox("date", "date")
        row2.appendChild(date);
        let priority = createFormBox("priority", "number", "1", "5")
        row2.appendChild(priority);
    const notes = createFormBox("notes", "notes");
    notes.querySelector('input').outerHTML = '<textarea rows="7"></textarea>';
    notes.classList.add("notes");
    
    const cancelCreateButton = document.createElement('div');
    cancelCreateButton.classList.add('cancelCreate');

    const createButton = document.createElement('button');
    createButton.classList.add('create');
    createButton.innerHTML = "Create";
    createButton.addEventListener('click', () => {
        submit(title, description, date, priority, notes, project);
    })

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel');
    cancelButton.innerHTML = "Cancel";
    cancelButton.addEventListener('click', () => { close() });

    cancelCreateButton.appendChild(cancelButton);
    cancelCreateButton.appendChild(createButton);

    form.appendChild(row);
    form.appendChild(row2);
    form.appendChild(notes);
    form.appendChild(cancelCreateButton);

    overlay.appendChild(form);

    return body.appendChild(overlay);
}

function createFormBox(variable, type, min, max){
    const formBox = document.createElement('div');
    formBox.classList.add('formBox');
    const label = document.createElement('label');
    label.setAttribute('for', variable);
    label.innerHTML = variable;
    const input = document.createElement('input');
    input.setAttribute('type', type);
    if(min !== undefined && max !== undefined){
        input.setAttribute('min', min);
        input.setAttribute('max', max);
        input.setAttribute('value',  min);
    }
    formBox.appendChild(label);
    formBox.appendChild(input);
    return formBox;
}

function submit(title, description, date, priority, notes, project){
    if(title.lastChild.value.length === 0){
        alert("Please fill out title field.");
    }
    else{
        if(priority.lastChild.value > 5){
            console.log(priority.lastChild.value);
            priority.lastChild.value = 5;
            console.log(priority.lastChild.value);
        }
        if(priority.lastChild.value < 1 || isNaN(priority.lastChild.value)){
            priority.lastChild.value = 1;
        }
        add(projects, project, toDoItem(title.lastChild.value, description.lastChild.value, date.lastChild.value, priority.lastChild.value, notes.lastChild.value));
        close();
        reset(keyInArray(project, projects));
    }
}

function close(){
    body.removeChild(body.querySelector('.overlay'));
}