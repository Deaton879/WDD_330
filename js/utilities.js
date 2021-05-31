// UPDATE APP INFO
function updateAppInfo() {
    tr.innerHTML = tasksRemaining;
}

// Arrays of active and completed 
let completedTaskArray;
let activeTaskArray;   

// CALL TO UPDATE LISTS OF ACTIVE AND COMPLETE TASKS
function seperateTasks() {
    activeTaskArray = document.getElementsByClassName('active');
    completedTaskArray = document.getElementsByClassName('complete');
}


// GENERATE ERROR MESSAGE
function error(element) {
    element.setAttribute('placeholder', "Enter your task, and then press submit."); 
}



// REMOVE ANY EMPTY MESSAGES 
function removeMessage() {   
    if(document.getElementById('proxy')) {
        document.getElementById('proxy').remove();
    }
}


// Check if tasks remaining are 0, or if an array is empty. 
// If so, populate the task-box with an empty list message
function checkEmpty(element) {
    
    removeMessage();
    
    let proxy = document.createElement('p');
    proxy.setAttribute('class', 'task-text');

    // Create a task-box to hold the new task elements
    let taskBox = document.createElement('div');

    // Set the class and id of the task-box
    taskBox.setAttribute('class', 'task-box proxy');
    taskBox.setAttribute('id', 'proxy');

    if (completedTaskArray.length <= 0 && activeTaskArray.length <= 0) {
        proxy.innerHTML = "Add a new task to get started!";
        taskBox.appendChild(proxy);        
        element.appendChild(taskBox);
    }

}


// MAKE SURE USER HAS ACTUALLY INPUT SOMETHING
function checkInput() {
    let newTask = document.getElementById('add-task');

    if(newTask.value === "") {
        error(newTask);
    }else {
        addNewTask();
    }
}