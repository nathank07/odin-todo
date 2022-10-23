import keyInArray from "./keyInArray.js";

export default function remove(projects, project, index){
    projects[keyInArray(project, projects)][1].splice(index, 1);
}
