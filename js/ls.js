let toDoList = [];

setList();

class todo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }

    save() {
       toDoList = getList();
       console.log(toDoList);
       toDoList.push(this);
       setList();
    }

}

function setList() {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function getList() {
    return JSON.parse(localStorage.getItem('toDoList'));
}

