import keyInArray from "./keyInArray.js";
import { displayItems } from "./visual.js";

export default function add(projects, project, toDoItem){
    if(keyInArray(project, projects) === -1){
        projects.push([project, []]);
    } 
    if(toDoItem !== undefined){
       projects.forEach(element => {
            if(element[0] === project){ // if project key matches add todoitem
                element[1].push(toDoItem);
            }
       });
    }
}

