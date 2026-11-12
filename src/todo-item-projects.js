// an array of project arrays. the project arrays then hold the todo object items
// import { todoItem } from "./todo-item.js";
import { todoItemsArray } from "./todo-item.js";

// todoItem.greet();

// got to sort through the todoItems array to find if newProjectCheck is true or false
// todoItems is an array

export const allProjects = [];

todoItemsArray.forEach((theTodoItem) => {
//   console.log(`${user.name} is an ${user.role}.`);
    const newProjectChecked = theTodoItem.newProjectCheck;

    
    if (newProjectChecked || !newProjectChecked && allProjects === 0) {
        allProjects.push([theTodoItem]);
    } else {
        allProjects[allProjects.length - 1].push(theTodoItem);
    }
});




// if newProject is false do not make new project array. if it is true than make new array
// export const newProject = todoItem.newProjectCheck;

// // create new project folder if checked or if there are none
// if (newProject || !newProject && allProjects === 0) {
//     allProjects.push([todoItem]);
// } else {
//     allProjects[allProjects.length - 1].push(todoItem);
// }

