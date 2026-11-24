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

const STORAGE_KEY = "todoData";

// this function returns the todo list
export function todoItems() {
    // checks if the browser has localStorage
  if (!storageAvailable("localStorage")) return null;

  const rawData = localStorage.getItem(STORAGE_KEY);
  // Returns null on a user's first visit, or the parsed array if data exists
  return rawData ? JSON.parse(rawData) : [];
}

// todoItems() is an empty array. You need to put the todoList data into it using setItem("todoData", )
// every change to the data array you then need to setItem() the array



/*
get items on page start up
set items when data changes
*/

// create the functions that get the items in here and export the functions
// create the items that set the items in here and export the functions


