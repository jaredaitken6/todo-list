// import { todoItem } from "./todo-item.js";
import { todoItemsArray } from "./todo-item.js";
// import { newProject, allProjects } from "./todo-item-projects.js";
import { allProjects } from "./todo-item-projects.js";

// checking to see if local storage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

// how to use it
/*
export function saveProjects(projectsArray) {
  if (!storageAvailable("localStorage")) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsArray));
}

export function loadProjects() {
  if (!storageAvailable("localStorage")) return null;

  const rawData = localStorage.getItem(STORAGE_KEY);
  // Returns null on a user's first visit, or the parsed array if data exists
  return rawData ? JSON.parse(rawData) : null;
}
*/

// check if storage is available in the browser
// if not then what?

// on page load get the todo array of objects export the function into index.js

const ITEM_STORAGE_KEY = "todoItems";
const PROJECTS_STORAGE_KEY = "todoProjects";

// this function returns the todo list from local storage
export function getTodoItems() {
    // checks if the browser has localStorage
  if (!storageAvailable("localStorage")) return null;

  const rawData = localStorage.getItem(ITEM_STORAGE_KEY);
  // Returns empty array on a user's first visit, or the parsed array if data exists
  return rawData ? JSON.parse(rawData) : [];
}

// this function returns the todo project folders from local storage
export function getTodoProjects() {
    // checks if the browser has localStorage
  if (!storageAvailable("localStorage")) return null;

  const rawData = localStorage.getItem(PROJECTS_STORAGE_KEY);
  // Returns empty array on a user's first visit, or the parsed array if data exists
  return rawData ? JSON.parse(rawData) : [];
}

// Call setItem every time there is a change to the todo items or a change to the todoItem project
// store 2 arrays. one for todoItems and one for todo Projects

// a function to set the todo items to local storage
function setTodoItems(todoItems) {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

// a function to set the todo projects to local storage
function setTodoProjects(todoProjects) {
    localStorage.setItem("todoProjects", JSON.stringify(todoProjects));
}

setTodoItems(todoItemsArray);
setTodoProjects(allProjects);

getTodoItems();
getTodoProjects();




// todoItems() is an empty array. You need to put the todoList data into it using setItem("todoData", )
// every change to the data array you then need to setItem() the array



/*
get items on page start up
set items when data changes
*/

// create the functions that get the items in here and export the functions
// create the items that set the items in here and export the functions


