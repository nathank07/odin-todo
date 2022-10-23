import add from "./add.js";
import remove from "./remove.js";
import projects from '../index.js';

const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}
const body = document.querySelector('body');

function displayItems(project, viewingMultiple){
    const toDoGrid = document.createElement('div');
    toDoGrid.classList.add("grid");

    project[1].forEach((toDoItem, index) => { //project[1] = Project items
        let toDoItemDiv = document.createElement('div');
        toDoItemDiv.classList.add("gridItem");

        let titleBar = document.createElement('div');
        let title = document.createElement('h2');
        let removeElement = document.createElement('button');
        title.innerHTML = toDoItem.title;
        removeElement.innerHTML = "X";
        removeElement.addEventListener('click', () => {
            remove(projects, project[0], index);
        })
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

    if(document.querySelector('.container') !== null){
        if(viewingMultiple === true){
            document.querySelector('.container').appendChild(toDoGrid);
        }
        else{
            body.removeChild(document.querySelector('.container')); // Clears the grid if there is one already available
            const container = document.createElement('div');
            container.classList.add('container');
            container.appendChild(toDoGrid);
            body.appendChild(container);
        }
    }
    else{
        const container = document.createElement('div');
        container.classList.add('container');
        container.appendChild(toDoGrid);
        body.appendChild(container);
    }
    
    document.querySelectorAll('.tabButton').forEach(button => { // Gives button selection class if it is picked
        button.classList.remove('selected');
        if(button.innerHTML === project[0]){ //project[0] = name of project
            button.classList.add('selected');
        }
    });

}

function displayAllItems(projects){
    const container = document.querySelector('.container');
    container.innerHTML = "";
    projects.forEach(project => {
        const header = document.createElement('h2');
        header.innerHTML = project[0];
        container.appendChild(header);
        displayItems(project, true);
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
    const viewAllButton = document.createElement('button');
    viewAllButton.classList.add('tabButton');
    viewAllButton.innerHTML = "View All Projects";
    viewAllButton.addEventListener('click', () => {
        displayAllItems(projects);
    })
    tabView.appendChild(viewAllButton);
    body.appendChild(tabView);
}

export {displayItems, tabView};