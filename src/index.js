import './style.css';
import { displayItems, tabView } from './javascript/visual.js';
import add from './javascript/add.js'
import remove from './javascript/remove';
const toDoItem = (title, description, dueDate, priority, notes) => {
    return {title, description, dueDate, priority, notes};
}
let projects2 = [
    ["Today", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["This Week", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["Friday", [toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e"), toDoItem("a", "b", "c", "d", "e")]],
    ["AAAAA", []],
    ["a", []]
]
let projects = [];
export default projects;

add(projects2, "Ratio");
add(projects2, "Ratio 2", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));
add(projects2, "Today", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));
add(projects2, "This Week", toDoItem("asdkl;asdj", "asdasdasd", "asdasdasd", "asdasddasd", "asdasdasd"));

let test = JSON.stringify(projects);
let test2 = JSON.parse(test);
console.log(test);
console.log(test2);

tabView(projects);
displayItems(projects[0]);






