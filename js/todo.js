let tr = document.getElementById('remaining-tasks');
let activated = "all";

let taskObject;

let tasksRemaining = 0;
let tasksCompleted = 0;

let taskNumber = 0;
let saved = false;

updateAppInfo();

let options = [];

function saveState() {

    let savedTasks = getList();
    let complete = [];
    let active = [];
    
    savedTasks.forEach(task => {
        if(task.completed) {
            complete.push(task);
        }else {
            active.push(task);
        }
    });

    options = {
        tNumber: taskNumber,
        tRemain: tasksRemaining,
        tComplete: tasksCompleted,
        activeTasks: active,
        completeTasks: complete,
        wasSaved: saved
    }

    localStorage.setItem('options', JSON.stringify(options));
}

window.addEventListener("unload", function(event) { 
    // Save the state of the app
    saved = true;
    saveState();
});


// CHANGE ACTIVE FILTER
function changeActiveFilter(x) {
    document.getElementById(activated).classList.remove('active-filter');
    x.classList.add('active-filter');
}


// SET ACTIVE FILTER
function activeFilter(filterId) {

    let taskList = document.getElementById('task-list');

    let all = document.getElementById('all');
    let active = document.getElementById('active');
    let completed = document.getElementById('completed');

    switch(filterId) {

        case all.id:

            changeActiveFilter(all);
            activated = all.id;

            seperateTasks();
            checkEmpty(taskList);

            for(let task of completedTaskArray) {
                task.style.display = "flex";
            }
            for(let task of activeTaskArray) {
                task.style.display = "flex";
            }  

            break;

        case active.id:

            changeActiveFilter(active);
            activated = active.id;

            seperateTasks();

            checkEmpty(taskList);

            for(let task of completedTaskArray) {
                task.style.display = "none";
            }
            for(let task of activeTaskArray) {
                task.style.display = "flex";
            }
            
            break;

        case completed.id:

            changeActiveFilter(completed);
            activated = completed.id;

            seperateTasks();

            checkEmpty(taskList);

            for(let task of activeTaskArray) {
                task.style.display = "none";
            }
            for(let task of completedTaskArray) {
                task.style.display = "flex";
            }

            break;
    }
}




// ADD NEW TASK
function addNewTask() {
    
    removeMessage();
    // Get the new task text input
    let newTask = document.getElementById('add-task');

    // Get the task-list parent element to store new tasks in
    let parent = document.getElementById('task-list');

    // Create a task-box to hold the new task elements
    let taskBox = document.createElement('div');

    // Set the class and id of the task-box
    taskBox.setAttribute('class', 'task-box active');
    taskBox.setAttribute('id', taskNumber);

    // Make sure a newly added task does not show up on completed list if currently on completed filter
    if (activated === "completed") {
        taskBox.style.display = "none";
    }

    let child0 = document.createElement('button');
    let child1 = document.createElement('p');
    let child2 = document.createElement('button');

    // Set up Button number 1 
    child0.setAttribute("type", "button");
    child0.setAttribute("onclick", "markComplete(this)");
    child0.setAttribute("class", "checkbox");
    child0.setAttribute("value", taskNumber);
    child0.innerHTML = "&#10004;";

    // Set up the paragraph 
    child1.setAttribute("class", "task-text");
    child1.innerHTML = newTask.value;

    taskObject = new todo(new Date(), newTask.value, false);
    taskObject.save();

    // Set up Button number 2 
    child2.setAttribute("type", "button");
    child2.setAttribute("onclick", "deleteTask(this.value)");
    child2.setAttribute("class", "delete");
    child2.setAttribute("value", taskNumber);
    child2.innerHTML = "&#10005;";

    // Add the child elements to the childDiv
    taskBox.appendChild(child0);
    taskBox.appendChild(child1);
    taskBox.appendChild(child2);

    // Append the childDiv to the Parent: the task list
    parent.appendChild(taskBox);

    // Update the app info
    tasksRemaining ++;
    taskNumber ++;
    updateAppInfo();
    checkEmpty(parent)
}




// MARK TASK COMPLETE
function markComplete(checkbox) {
    tasksRemaining --;
    tasksCompleted ++;

    let task = document.getElementById(checkbox.value);
    let child = task.children;
    
    task.classList.remove('active');
    task.classList.add('complete');
    
    child[0].style.background = "rgba(255, 255, 255, 0.9)";
    child[0].style.border = "none";
    child[0].innerHTML = "&#9989;";
    child[1].style.textDecoration = "line-through";
    // checkbox.innerHTML = '&#10005';

    checkbox.setAttribute('disabled', true);
    updateAppInfo()
}



// DELETE TASK
function deleteTask(boxId) {
    let element = document.getElementById('task-list');
    let box = document.getElementById(boxId);

    // see if class is completed of active.
    if(box.classList.contains('complete')) {
        tasksCompleted --;
    } 
    else if(box.classList.contains('active')) {
        tasksRemaining --;
    }
    updateAppInfo();

    box.remove();
    checkEmpty(element);
}

function appFirstLaunch(content) {

    let firstTask = content;

    // Get the task-list parent element to store new tasks in
    let parent = document.getElementById('task-list');

    // Create a task-box to hold the new task elements
    let taskBox = document.createElement('div');

    // Set the class and id of the task-box
    taskBox.setAttribute('class', 'task-box active');
    taskBox.setAttribute('id', taskNumber);
    let child0 = document.createElement('button');
    let child1 = document.createElement('p');
    let child2 = document.createElement('button');

    // Set up Button number 1 
    child0.setAttribute("type", "button");
    child0.setAttribute("onclick", "markComplete(this)");
    child0.setAttribute("class", "checkbox");
    child0.setAttribute("value", taskNumber);
    child0.innerHTML = "&#10004;";

    // Set up the paragraph 
    child1.setAttribute("class", "task-text");
    child1.innerHTML = firstTask;

    taskObject = new todo(new Date(), firstTask, false);
    taskObject.save();

    // Set up Button number 2 
    child2.setAttribute("type", "button");
    child2.setAttribute("onclick", "deleteTask(this.value)");
    child2.setAttribute("class", "delete");
    child2.setAttribute("value", taskNumber);
    child2.innerHTML = "&#10005;";

    // Add the child elements to the childDiv
    taskBox.appendChild(child0);
    taskBox.appendChild(child1);
    taskBox.appendChild(child2);

    // Append the childDiv to the Parent: the task list
    parent.appendChild(taskBox);

    // Update the app info
    tasksRemaining ++;
    taskNumber ++;
    updateAppInfo();
    checkEmpty(parent)
}


function buildState() {

    // let options = JSON.parse(localStorage.getItem('options'));
    // console.log(options);
    // tasksRemaining = parseInt(options.tRemain);
    // tasksCompleted = parseInt(options.tComplete);
    // taskNumber = parseInt(options.tNumber);

    if(taskNumber === 0) {
        appFirstLaunch( "Get started by making a new task!");
    } 

};
seperateTasks();
buildState();