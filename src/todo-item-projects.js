// import { todoItem } from "./todo-item.js";
import { todoItemsArray } from "./todo-item.js";
import { isEmpty } from './checkInputEmpty.js';

export const allProjects = [
    { id: crypto.randomUUID(), name: "Default" }
];

// this is putting todo items into the right folder
todoItemsArray.forEach((theTodoItem) => {
//   console.log(`${theTodoItem.todoTitle} is an ${theTodoItem.projectName}.}`);
    allProjects.forEach((project) => {
        if (theTodoItem.projectName === project.name) {
            theTodoItem.projectId = project.id;
        } else if (isEmpty(theTodoItem.projectName)) {
            theTodoItem.projectId = allProjects[0].id;
        } else {
            allProjects.push({ id: crypto.randomUUID(), name: theTodoItem.projectName });
            theTodoItem.projectId = allProjects[allProjects.length - 1].id;
        }
    
    });
});







