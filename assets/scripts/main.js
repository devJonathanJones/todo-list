/*
 * Project Name: To-Do List
 * File Name: main.js
 * Author: Jonathan Jones
 * Date: 05.12.2025
 * Description: Basic To-Do List app
*/

const addTask = document.querySelector('#add-task-button')
const activeTaskList = document.querySelector('.active-tasks')
const deletedTaskList = document.querySelector('.deleted-tasks')
const inputTask = document.querySelector('#input-task')
const navTab = document.querySelector('.nav-tab')
const activeTasks = document.querySelector('.active-task-list')
const deletedTasks = document.querySelector('.deleted-task-list')
const clearTasks = document.querySelector('#clear-tasks')

addTask.onclick = function() {
    if (inputTask.value === '') {
        alert('Please type in a task')
    } else {
        const taskTemplate = `
        <li class="task-item">
             <input type="checkbox" name="task-checkbox" id="task-checkbox">
             <p>${inputTask.value}</p>
             <button id="delete-task"><i class="fa-solid fa-xmark"></i></button>
         </li>`

         activeTaskList.innerHTML += taskTemplate
         inputTask.value = ''
    }
}

activeTaskList.onclick = function(event) {
    const taskItem = event.target.closest('.task-item')
    const checkbox = event.target.closest('#task-checkbox')
    if (event.target.closest('#delete-task')) {
        taskItem.remove()
        deletedTaskList.append(taskItem)
    } else if (event.target.closest('#task-checkbox')) {
        checkbox.checked ? taskItem.classList.add('task-completed') : taskItem.classList.remove('task-completed')
    }
}

deletedTaskList.onclick = function(event) {
    const taskItem = event.target.closest('.task-item')
    const checkbox = event.target.closest('#task-checkbox')
    if (event.target.closest('#delete-task')) {
        taskItem.remove()
    } else if (event.target.closest('#task-checkbox')) {
        checkbox.checked ? taskItem.classList.add('task-completed') : taskItem.classList.remove('task-completed')
    }
}

navTab.onclick = function(event) {
    const selectedTab = event.target.closest('.tab')
    const activeTab = document.querySelector('#active-tab').parentElement
    const deletedTab = document.querySelector('#deleted-tab').parentElement

    if (selectedTab === activeTab && !selectedTab.classList.contains('selected-tab')) {
        selectedTab.classList.add('selected-tab')
        deletedTab.classList.remove('selected-tab')
        activeTasks.classList.add('active')
        deletedTasks.classList.remove('active')
    } else if (selectedTab === deletedTab && !selectedTab.classList.contains('selected-tab')) {
        selectedTab.classList.add('selected-tab')
        activeTab.classList.remove('selected-tab')
        deletedTasks.classList.add('active')
        activeTasks.classList.remove('active')
    }
}

clearTasks.onclick = function() {
    if (confirm('Are you sure you want to clear deleted tasks?')) {
        deletedTaskList.innerHTML = ''
    }
}