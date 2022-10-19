import './style.css';
import { displayItems, tabView } from './javascript/visual.js';
import add from './javascript/add.js'
const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}
let projects = [
    ["Today", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["This Week", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["Friday", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", []],
    ["a", []]
]
export default projects;

add(projects, "Ratio");
add(projects, "Ratio 2", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));
add(projects, "Today", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));

console.log(projects);
tabView(projects);
if(displayItems !== []){
    displayItems(projects[0]);
} else{
    //empty project logic
}




