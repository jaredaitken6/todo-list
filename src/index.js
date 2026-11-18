// test
import { greeting } from "./greeting.js";

console.log(greeting);
// end of test

// import { todoItem } from "./todo-item.js";
import { todoItemsArray } from "./todo-item.js";
// import { newProject, allProjects } from "./todo-item-projects.js";
import { allProjects } from "./todo-item-projects.js";
import { todoItemsWithDate } from "./todo-due-date.js";
import { allDates, furthestFutureDate, fromCurrentToFurthestDate, todoItemsInMilliseconds, todoItemsInPercentages } from "./todo-due-date.js";

// todoItem.greet();
console.log("allProjects array");
console.log(allProjects);
console.log("todoItems array");
console.log(todoItemsArray);
console.log("date array");
console.log(todoItemsWithDate);
console.log("furthest date");
console.log(furthestFutureDate);
console.log("difference in ms from current date to furthest date");
console.log(fromCurrentToFurthestDate);
console.log("all dates");
console.log(allDates);
console.log("todo items dates in milliseconds");
console.log(todoItemsInMilliseconds);
console.log("todo items dates in percentages");
console.log(todoItemsInPercentages);

/*
    - Add delete task next or add the storage
*/

