const body = document.querySelector('body');

function displayItems(project){
    const toDoGrid = document.createElement('div');
    toDoGrid.classList.add("grid");
    project.forEach(toDoItem => {
        let toDoItemDiv = document.createElement('div');
        toDoItemDiv.classList.add("gridItem");

        let title = document.createElement('h3');
        title.innerHTML = toDoItem.title;

        let description = document.createElement('p');
        description.innerHTML = toDoItem.description;

        let bottomBar = document.createElement('div');
        bottomBar.classList.add("bottom"); // Add any new elements under this div

            let priority = document.createElement('div');
            priority.innerHTML = toDoItem.priority;

            let dueDate = document.createElement('h4');
            dueDate.innerHTML = toDoItem.dueDate;

            let notes = document.createElement('div');
            notes.innerHTML = toDoItem.notes;

            let checklist = document.createElement('div');
            checklist.innerHTML = toDoItem.checklist;

            bottomBar.appendChild(priority);
            bottomBar.appendChild(dueDate);
            bottomBar.appendChild(notes);
            bottomBar.appendChild(checklist);
        
        toDoItemDiv.appendChild(title);
        toDoItemDiv.appendChild(description);
        toDoItemDiv.appendChild(bottomBar);

        toDoGrid.appendChild(toDoItemDiv);
    });
    if(document.querySelector('.grid') !== null){
        body.removeChild(document.querySelector('.grid')); // Clears the grid if there is one already available
    }
    body.appendChild(toDoGrid);
}

function tabView(projects){
    const tabView = document.createElement('div');
    tabView.classList.add('tabView');
    for (const [name, items] of Object.entries(projects)){ // for each project name list the to do items
        const projectButton = document.createElement('button');
        projectButton.classList.add('tabButton');
        projectButton.innerHTML = name;
        projectButton.addEventListener('click', () => {
            let buttons = document.querySelectorAll('.tabButton');
            buttons.forEach(button => {
                button.classList.remove('selected'); //Removes any previous selected buttons
            })
            projectButton.classList.add('selected'); //New button is now selected
            displayItems(items);
        })
        tabView.appendChild(projectButton);
    };
    body.appendChild(tabView);
    if(tabView.querySelector('.tabButton') !== null){ 
        tabView.querySelector('.tabButton').classList.add('selected'); //Selects the first project as selected
    }
}

export {displayItems, tabView};