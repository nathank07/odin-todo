import keyInArray from "./keyInArray.js";

export default function remove(projects, project, index){
    console.log(projects[keyInArray(project, projects)][1]);
    projects[keyInArray(project, projects)][1].splice(index, 1);
    console.log(projects);
}
