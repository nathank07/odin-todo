import keyInArray from "./keyInArray.js";

export default function remove(projects, project, index){
    if(index === undefined){
        if(keyInArray(project, projects) === -1){
            alert("Error: Project does not exist");
        }
        else{
            projects.splice(keyInArray(project, projects), 1);
        }
    }
    else{
        projects[keyInArray(project, projects)][1].splice(index, 1);
    }
}
