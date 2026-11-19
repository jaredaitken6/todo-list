// create the to-do item factory function. not es6 class or the outdated constructor function

// function createTodoItem(todoTitle, todoDescription, todoDueDate, todoPriority, todoDoneCheck, projectName, projectId) {
function createTodoItem(todoTitle, todoDescription, projectName, todoDueDate) { 

  return {
    todoTitle: todoTitle,
    todoDescription: todoDescription,
    // todoPriority: todoPriority,
    // todoDoneCheck: todoDoneCheck,
    projectName: projectName,
    todoDueDate: todoDueDate
    // projectId: crypto.randomUUID(),
    // based on the project name will determine what the to do items projectId is going to be
    // greet() {
    //   console.log(`${this.todoTitle}, ${this.todoDescription}, ${this.todoDueDate}, ${this.todoPriority}, ${this.todoDoneCheck}, ${this.projectName}, ${this.projectId}`);
    // }

  };
}

// export const todoItem = createTodoItem('clean', 'use soap', 'may 24', 4, true, true);
// export const todoItem2 = createTodoItem('sweep', 'with broom', 'dec 28', 2, false, true);

// const todoItem = createTodoItem('clean', 'use soap', 'may 24', 4, true, true);
// const todoItem2 = createTodoItem('sweep', 'with broom', 'dec 28', 2, false, true);

const todoItem = createTodoItem('clean', 'use soap', 'Default', "2026-11-28");
const todoItem2 = createTodoItem('laundry', 'air dry', "New Folder", "");
const todoItem3 = createTodoItem('wash car', 'wax', "New Folder", "2026-11-23");

export const todoItemsArray = [todoItem, todoItem2, todoItem3];





