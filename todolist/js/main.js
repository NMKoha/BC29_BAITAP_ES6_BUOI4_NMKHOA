import { ToDoList } from "./todolist.js";
import { Task } from "./task.js";

const service = new ToDoList();

function getEle(id) {
    return document.getElementById(id);
};


getEle("addItem").onclick = () => {
    const newTask = getEle("newTask").value;
    const toDoList = new Task(newTask);
    service.addTask(toDoList);
    renderTask(service.taskList, "todo");
};

const renderTask = (list, id) => {
    const content = list.reduce((total, ele, index) => {
        total += `
        <li>
        <input type="text" value="${ele.newTask}" />
        
        <div class="icon">
           <button><i class="fa-solid fa-circle-minus" onclick="removeTask(${index})"></i></button>
           <button><i class="fa-solid fa-square-check" onclick="checkTask(${index})"></i></button>
        </div>        
        </li>        
        `;
        return total;
    }, "");
    getEle(id).innerHTML = content;

};

window.removeTask = (index) => {
    service.removeTask(service.taskList[index]);
    renderTask(service.taskList, "todo");
};

window.checkTask = (index) => {
    service.completedTask(service.taskList[index]);
    service.removeTask(service.taskList[index]);
    renderTask(service.taskList, "todo");
    renderTask(service.completedList, "completed");
};
getEle("two").onclick = () => {
    service.sapXepAtoZ();
    renderTask(service.taskList, "todo");
    renderTask(service.completedList, "completed");
};

getEle("three").onclick = () => {
    service.sapXepZtoA();
    renderTask(service.taskList, "todo");
    renderTask(service.completedList, "completed");
};