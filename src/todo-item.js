// create the to-do item factory function. not es6 class or the outdated constructor function
// export the object
// title, description, dueDate, priority and checklist.

function createTodoItem(todoTitle, todoDescription, todoDueDate, todoPriority, todoDoneCheck, newProjectCheck) {
  return {
    todoTitle: todoTitle,
    todoDescription: todoDescription,
    todoDueDate: todoDueDate,
    todoPriority: todoPriority,
    todoDoneCheck: todoDoneCheck,
    newProjectCheck: newProjectCheck,
    greet() {
      console.log(`${this.todoTitle}, ${this.todoDescription}, ${this.todoDueDate}, ${this.todoPriority}, ${this.todoDoneCheck}, ${this.newProjectCheck}`);
    }
  };
}

export const todoItem = createTodoItem('clean', 'use soap', 'may 24', 4, true, true);





