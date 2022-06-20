export class ToDoList {
    taskList = [];
    completedList = [];

    addTask(toDoList) {
        this.taskList = [...this.taskList, toDoList]
    };
    completedTask(toDoList) {
        this.completedList = [...this.completedList, toDoList]
    };

    removeTask(index) {
        this.taskList = this.taskList.filter((ele) => ele !== index);
    };
    hamSoSanh = (a, b) => a - b;

    sapXepAtoZ() {
        this.taskList.sort(hamsosanh);
        this.completedList.sort(hamsosanh);
    }

    sapXepZtoA() {
        // this.sapXepAtoZ();
        this.taskList.reverse();
        this.completedList.reverse();
    }
}