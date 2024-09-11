let input = document.getElementById('hii');
let randomNum = Math.floor(Math.random()*40, 20) + 20;
let result = document.getElementById('h3');
let myButton = document.getElementById('btn');
let chance = 0;

function checks() {
    chance++;
    let inputValue = parseInt(input.value);

    
    if (inputValue === randomNum) {
        result.textContent = `Wow, you won! The number was ${randomNum}`;
    } 
    else if (inputValue > 50 || inputValue < 20) {
    	result.textContent = 'sorry values cant be greater then 50 and less than 20';
    }

    else if(isNaN(inputValue)){
    	result.textContent = 'pls values must be inputed as a number'; 
    }
    else {
        result.textContent = 'You are wrong';
    }
    return chance;
}

if (chance == 5) {
        result.textContent = 'oops you are out of chances'
        myButton.removeEventListener('click', checks)
        myButton.textContent = 'Reset'

        input.value = ''
}



myButton.addEventListener('click', checks)


console.log(randomNum);

let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    let taskText = taskInput.value;


    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function () {
        li.style.display  = 'none';
    });

    taskList.appendChild(li);

    taskInput.value = '';
}

// function addTask() {
//     console.log('Button clicked'); // Debug line
//     let taskText = taskInput.value.trim();
// }

// console.log(taskInput, addTaskButton, taskList);


