import add from "./add";
import projects from '../index.js';

const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}
const body = document.querySelector('body');

function displayItems(project){
    const toDoGrid = document.createElement('div');
    toDoGrid.classList.add("grid");

    project[1].forEach(toDoItem => { //project[1] = Project items
        let toDoItemDiv = document.createElement('div');
        toDoItemDiv.classList.add("gridItem");

        let titleBar = document.createElement('div');
        let title = document.createElement('h2');
        let removeElement = document.createElement('div');
        title.innerHTML = toDoItem.title;
        removeElement.innerHTML = "X";
        titleBar.classList.add('titleBar');
        titleBar.append(title);
        titleBar.append(removeElement);

        let description = document.createElement('p');
        description.innerHTML = toDoItem.description;

        let bottomBar = document.createElement('div');
        bottomBar.classList.add("bottom"); // Add any new elements under this div

            let priority = document.createElement('div');
            priority.innerHTML = toDoItem.priority;

            let dueDate = document.createElement('div');
            dueDate.innerHTML = toDoItem.dueDate;

            let notes = document.createElement('div');
            notes.innerHTML = toDoItem.notes;

            bottomBar.appendChild(priority);
            bottomBar.appendChild(dueDate);
            bottomBar.appendChild(notes);
        
        toDoItemDiv.appendChild(titleBar);
        toDoItemDiv.appendChild(description);
        toDoItemDiv.appendChild(bottomBar);

        toDoGrid.appendChild(toDoItemDiv);
    });

    let addButton = document.createElement('span');
    addButton.classList.add('gridItem', 'addButton');
    addButton.innerHTML = "add"
    addButton.addEventListener('click', () => {
        add(projects, project[0], toDoItem("a", "a", "a", "a", "a", "a"));
    })
    toDoGrid.appendChild(addButton);

    if(document.querySelector('.grid') !== null){
        body.removeChild(document.querySelector('.grid')); // Clears the grid if there is one already available
    }
    body.appendChild(toDoGrid);

    document.querySelectorAll('.tabButton').forEach(button => { // Gives button selection class if it is picked
        button.classList.remove('selected');
        if(button.innerHTML === project[0]){ //project[0] = name of project
            button.classList.add('selected');
        }
    });
}

function tabView(projects){
    const tabView = document.createElement('div');
    tabView.classList.add('tabView');
    for (const [name, items] of projects){ // for each project name list items when clicked
        const projectButton = document.createElement('button');
        projectButton.classList.add('tabButton');
        projectButton.innerHTML = name;
        projectButton.addEventListener('click', () => {
            displayItems([name, items]);
        })
        tabView.appendChild(projectButton);
    };
    body.appendChild(tabView);
}

export {displayItems, tabView};