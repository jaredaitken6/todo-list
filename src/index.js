// test
import { greeting } from "./greeting.js";
console.log(greeting);
// end of test

// import { todoItem } from "./todo-item.js";
import { todoItemsArray } from "./todo-item.js";
// import { newProject, allProjects } from "./todo-item-projects.js";
import { allProjects } from "./todo-item-projects.js";
import { getTodoItems } from "./local-browser-storage.js";
import { getTodoProjects } from "./local-browser-storage.js";

// todoItem.greet();
console.log("allProjects array");
console.log(allProjects);
console.log("todoItems array");
console.log(todoItemsArray);
console.log("localStorage todoItems array");
console.log(getTodoItems());
console.log("localStorage todoProjects array");
console.log(getTodoProjects());

/*
    - Add delete task next or add the storage
*/

// on page load get and display the todo items array of objects

