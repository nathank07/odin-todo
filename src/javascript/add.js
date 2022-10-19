
export default function add(projects, project, toDoItem){
    if(keyInArray(project, projects) === false){
        console.log(keyInArray(project, projects))
        projects.push([project, []]);
        console.log('created ', project);
        console.log([project, []]);
    }
    if(toDoItem !== undefined){
       projects.forEach(element => {
            if(element[0] === project){ // if project key matches add todoitem
                element[1].push(toDoItem);
            }
       });
    }
}

function keyInArray(key, array) { //function that checks if a 2D array includes key
    return array.some(element => {
        if(element[0] === key){
            console.log(element[0], key);
            return true;
        }
    });
}