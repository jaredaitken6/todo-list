// import { todoItem } from "./todo-item.js";
import { todoItemsArray } from "./todo-item.js";
import { isEmpty } from './checkInputEmpty.js';

export const allProjects = [
    { id: crypto.randomUUID(), name: "Default" }
];

// this is putting todo items into the right folder

todoItemsArray.forEach((theTodoItem) => {
    allProjects.forEach((project) => {
        if (theTodoItem.projectName === project.name) {
            theTodoItem.projectId = project.id;
        } 
        if (isEmpty(theTodoItem.projectName || theTodoItem.projectName === "default")) {
            theTodoItem.projectId = allProjects[0].id;
        }
    });
    if (!theTodoItem.projectId && allProjects.every(project => project.name !== theTodoItem.projectName)) {
        allProjects.push({ id: crypto.randomUUID(), name: theTodoItem.projectName });
        theTodoItem.projectId = allProjects[allProjects.length - 1].id;
    }
});



