// an array of project arrays. the project arrays then hold the todo object items
import { todoItem } from "./todo-item.js";

// todoItem.greet();



export const allProjects = [];

// if newProject is false do not make new project array. if it is true than make new array
export const newProject = todoItem.newProjectCheck;

if (newProject || !newProject && allProjects === 0) {
    allProjects.push([todoItem]);
} else {
    allProjects[allProjects.length - 1].push(todoItem);
}

