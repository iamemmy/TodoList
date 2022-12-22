// Variables for Enter button and text area
let myButton = document.querySelector('#myButton')
let textArea = document.querySelector('#textfield')

// Variable for task
let taskContainer = document.querySelector('.task-container')
let taskList =  document.createElement('ul');

let task ;

// Random number
let randomNumber;


// Enter task function
myButton.addEventListener('click', function() {
    
    taskContainer.style.visibility = 'visible';

    randomNumber = Math.floor(Math.random() * 999);
    
    if(textArea.value != '') {

        let listItem = document.createElement('li')
        task = `
            <p class="task">${textArea.value}</p>
            <div>
                <i id="${randomNumber}" onclick="checkTask(${randomNumber})">Done</i>
                <i id="${randomNumber}" onclick="deleteTask(${randomNumber})">Delete</i>
            </div>
        `
        
        listItem.innerHTML = task;

        taskList.appendChild(listItem);
        taskContainer.appendChild(taskList);
        textArea.value = '';
    } else{
        alert('Please enter task');
    }
})

// Delete task function
function deleteTask(randomNumber) {
    let delItem = document.getElementById(randomNumber);
    taskList.removeChild(delItem.parentElement.parentElement);
}

// Checked task function
function checkTask(randomNumber) {
    let checkItem = document.getElementById(randomNumber).parentElement;
    // console.log(checkItem.previousElementSibling);
    checkItem.previousElementSibling.style.textDecoration = "line-through";
}